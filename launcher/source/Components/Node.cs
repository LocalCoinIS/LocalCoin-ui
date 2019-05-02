using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace LocalcoinHost.Components {
    public class Node: ProcessControll {
        public override string WorkingDirectory { get { return Directory.GetCurrentDirectory() + "/node/"; } }
        public override string FileName         { get { return Platform.Name == OSPlatform.Windows.ToString().ToLower() ? "witness_node.exe" : "witness_node"; } }
        public string          ConfigIni        { get { return this.WorkingDirectory + "witness_node_data_dir/config.ini"; } }
        
        public void RewriteConfig(string newBodyConfig) {
            using (StreamWriter writer = System.IO.File.CreateText(this.ConfigIni))
                writer.Write(newBodyConfig);
        }

        public string ReadConfig() => System.IO.File.ReadAllText(this.ConfigIni);

        public void TryKillByName()
        {
            if (!File.Exists(RunningAppFileName)) return;

            string name = System.IO.File.ReadAllText(RunningAppFileName);
            if (name == "") return;

            foreach (var process in Process.GetProcessesByName(name))
            {
                process.Kill();
                this.ClearNameFile();
                Console.WriteLine("Kill old " + process.ProcessName);
            }
        }
    }
}
