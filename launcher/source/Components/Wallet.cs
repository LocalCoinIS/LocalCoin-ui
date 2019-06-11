using System.IO;
using System.Runtime.InteropServices;

namespace LocalcoinHost.Components {
    public class Wallet : ProcessControll {
        public string UsedUrl;
        public override string Arguments        { get => UsedUrl;     }
        public override string Title            { get => "LocalCoin"; }
        public override string WorkingDirectory { get => Directory.GetCurrentDirectory() + "/"; }
        public override string FileName         { get => Platform.Name == OSPlatform.Windows.ToString().ToLower() ? "wallet.exe" : "wallet"; }
    }
}
