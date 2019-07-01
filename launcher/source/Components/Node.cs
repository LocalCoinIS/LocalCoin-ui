using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace LocalcoinHost.Components
{
    public enum NodeWorkStatus { active, firewalled }

    public class Node : ProcessControll
    {
        const int MAX_SAVE_LINES = 100;

        private List<string> output = new List<string>();
        public List<string> LastConsoleLines
        {
            get
            {
                return this.output;
            }
        }

        public static NodeWorkStatus status;
        public override string WorkingDirectory { get { return Startup.BASE_DIR + "/node/"; } }
        public override string FileName { get { return Platform.Name == OSPlatform.Windows.ToString().ToLower() ? "witness_node.exe" : "witness_node"; } }
        public string ConfigIni { get { return this.WorkingDirectory + "witness_node_data_dir/config.ini"; } }
        public string P2pLog { get { return this.WorkingDirectory + "witness_node_data_dir/logs/p2p/p2p.log"; } }
        public string P2pLogTmp { get { return this.P2pLog + ".tmp"; } }
        public override string Arguments { get { return "--replay-blockchain"; } }

        public string ReadConfig() => System.IO.File.ReadAllText(this.ConfigIni);

        public void RewriteConfig(string newBodyConfig)
        {
            using (StreamWriter writer = System.IO.File.CreateText(this.ConfigIni))
                writer.Write(newBodyConfig);
        }

        public new int Start()
        {
            this.TryKillByName();

            this.process = Process.Start(new ProcessStartInfo()
            {
                WorkingDirectory = this.WorkingDirectory,
                FileName = this.WorkingDirectory + this.FileName,
                UseShellExecute = false,
                RedirectStandardOutput = true,
                RedirectStandardError = true,
                Arguments = this.Arguments
            });

            this.process.PriorityClass = ProcessPriorityClass.AboveNormal;

            this.process.BeginOutputReadLine();
            this.process.BeginErrorReadLine();

            this.process.OutputDataReceived += Process_OutputDataReceived;
            this.process.ErrorDataReceived += Process_OutputDataReceived;
            this.startup.SubscribeExitEventNode();

            try
            {
                this.WriteNameFile(Title == null ? this.process.ProcessName : Title);
                Console.WriteLine(FileName + " process id: " + this.process.Id);
                return this.process.Id;
            }
            catch (Exception) { }


            return -1;
        }

        private void Process_OutputDataReceived(object sender, DataReceivedEventArgs e)
        {
            if (!String.IsNullOrEmpty(e.Data))
            {
                output.Add(e.Data);
                if (output.Count > MAX_SAVE_LINES)
                {
                    output.RemoveRange(0, output.Count - MAX_SAVE_LINES);
                }
            }
        }

        protected string GetOutpudVal(string lineExp, string valExp)
        {
            for (int i = output.Count - 1; i > 0; i--)
            {
                string line = output[i];

                try
                {
                    string lastLineMatch = new Regex(lineExp)
                        .Matches(line)
                        .Last<Match>()
                        .Value;

                    if (lastLineMatch == "") continue;

                    string val = new Regex(valExp)
                        .Match(lastLineMatch)
                        .Value;

                    if (val != "") return val;
                }
                catch (Exception) { }
            }

            return "";
        }

        public List<string> ReadLog(int cntLastLines = 300)
        {
            try
            {
                if (!System.IO.File.Exists(this.P2pLog))
                    return new List<string>();

                if (System.IO.File.Exists(this.P2pLogTmp))
                    File.Delete(this.P2pLogTmp);

                File.Copy(this.P2pLog, this.P2pLogTmp);

                var lines = System.IO.File.ReadAllLines(this.P2pLogTmp);
                int from = lines.Length - cntLastLines;
                if (from < 0) from = 0;

                return lines
                        .ToList()
                        .GetRange(from, lines.Length < cntLastLines ? lines.Length : cntLastLines);
            }
            catch (Exception)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("Error read log");
                Console.ResetColor();
            }

            return new List<string>();
        }

        public string GetPercentReplayBlock() => GetOutpudVal(@"(\d*.\d*\%)(\s*)(\d*)(\s*)of(\s*)(\d*)", @"(\d*.\d*)");

        public new void TryKillByName()
        {
            try
            {
                this.process.OutputDataReceived -= Process_OutputDataReceived;
                this.process.ErrorDataReceived -= Process_OutputDataReceived;
            } catch (Exception) { }

            try
            {
                this.startup.UnsubscribeExitEventNode();
            } catch (Exception) { }

            try
            {
                base.TryKillByName();
            } catch (Exception) { }
        }
    }
}
