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
        public override string Arguments        { get { return "--replay-blockchain"; } }

        public string ReadConfig() => System.IO.File.ReadAllText(this.ConfigIni);

        public void RewriteConfig(string newBodyConfig) {
            using (StreamWriter writer = System.IO.File.CreateText(this.ConfigIni))
                writer.Write(newBodyConfig);
        }
    }
}
