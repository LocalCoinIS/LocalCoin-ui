using System;
using System.IO;
using System.Runtime.InteropServices;

namespace LocalcoinHost.Components {
    public class Wallet : ProcessControll {
        public string UsedUrl;
        public override string Arguments        { get => UsedUrl;     }
        public override string Title            { get => "LocalCoin"; }
        public override string WorkingDirectory { get => Startup.BASE_DIR + "/"; }
        public override string FileName         { get => Platform.Name == OSPlatform.Windows.ToString().ToLower() ? "wallet.exe" : "wallet"; }

        public new int Start()
        {
            var result = base.Start();

            if(result != -1)
                this.startup.SubscribeExitEventWallet();

            Console.WriteLine(FileName + " process id: " + result);

            return result;
        }

        public new void TryKillByName()
        {
            this.startup.UnsubscribeExitEventWallet();
            base.TryKillByName();
        }
    }
}
