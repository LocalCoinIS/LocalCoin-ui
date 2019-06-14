using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;

namespace source
{
    public partial class PreloaderForm : Form
    {
        Timer timer;
        public PreloaderForm()
        {
            InitializeComponent();

            this.Load += (object sender, EventArgs e) => {
                CenterToScreen();
                Opacity = 0.95;
                
                try {
                    if (File.Exists(pathWalletIsLoaded))
                        File.Delete(pathWalletIsLoaded);
                }
                catch (Exception ex) { }

                timer = new Timer();
                timer.Interval = (500);
                timer.Tick += new EventHandler(timer_Tick);
                timer.Start();
            };
        }

        const string lbl = "Loading";
        public string dots = ".";
        private void timer_Tick(object sender, EventArgs e)
        {
            dots += ".";
            if (dots.Length > 4) dots = ".";
            loadingLabel.Text = lbl + dots;

            if(walletIsLoaded())
            {
                timer.Stop();
                Hide();
            }
        }

        bool walletIsLoaded() {
            bool isLoaded = false;
            try { isLoaded = File.Exists(pathWalletIsLoaded); }
            catch (Exception) { isLoaded = false; }

            if (isLoaded)
                try { File.Delete(pathWalletIsLoaded); }
                catch (Exception) { }

            return isLoaded;
        }

        string pathWalletIsLoaded {
            get { return Application.StartupPath + "\\app\\wallet_is_loaded"; }
        }
    }
}
;