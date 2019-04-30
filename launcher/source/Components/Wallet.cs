using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace LocalcoinHost.Components {
    public class Wallet : ProcessControll {
        public string UsedUrl;
        public override string Arguments { get => UsedUrl; }

        public override string FileName {
            get => Directory.GetCurrentDirectory() + "/" + (Platform.Name == OSPlatform.Windows.ToString().ToLower() ? "wallet" : "wallet");
        }
    }
}
