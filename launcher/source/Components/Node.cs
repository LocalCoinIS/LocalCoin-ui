using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace LocalcoinHost.Components {
    public enum NodeWorkStatus { active, firewalled }

    public class Node: ProcessControll {
        public int lineCount = 0;
        public string output = "";

        public static NodeWorkStatus status;
        public override string WorkingDirectory { get {
                return "C:/Users/biliba/Desktop/p/node/";
                //return Directory.GetCurrentDirectory() + "/node/";
            } }
        public override string FileName         { get { return Platform.Name == OSPlatform.Windows.ToString().ToLower() ? "witness_node.exe" : "witness_node"; } }
        public string          ConfigIni        { get { return this.WorkingDirectory + "witness_node_data_dir/config.ini"; } }
        public override string Arguments        { get { return "--replay-blockchain"; } }

        public string ReadConfig() => System.IO.File.ReadAllText(this.ConfigIni);

        public void RewriteConfig(string newBodyConfig) {
            using (StreamWriter writer = System.IO.File.CreateText(this.ConfigIni))
                writer.Write(newBodyConfig);
        }

        public int Start()
        {
            this.TryKillByName();

            this.process = Process.Start(new ProcessStartInfo()
            {
                WorkingDirectory = this.WorkingDirectory,
                FileName = this.WorkingDirectory + this.FileName,
                UseShellExecute = false,
                RedirectStandardOutput = true,
                Arguments = this.Arguments
            });

            this.process.OutputDataReceived += Process_OutputDataReceived;
            this.process.ErrorDataReceived += Process_OutputDataReceived;

            try
            {
                this.WriteNameFile(Title == null ? this.process.ProcessName : Title);
                return this.process.Id;
            }
            catch (Exception) { }

            return -1;
        }

        private void Process_OutputDataReceived(object sender, DataReceivedEventArgs e)
        {
            if (!String.IsNullOrEmpty(e.Data))
            {
                lineCount++;
                output += "\n[" + lineCount + "]: " + e.Data;
            }
        }
    }
}
