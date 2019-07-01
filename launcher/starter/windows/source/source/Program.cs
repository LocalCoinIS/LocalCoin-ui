using IWshRuntimeLibrary;
using Microsoft.Win32;
using source.Properties;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace source
{
    static class Program
    {
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);

            new Thread(() => new TrayApplicationContext()).Start();
            Application.Run( new PreloaderForm() );
        }
    }

    public class TrayApplicationContext : ApplicationContext
    {
        NotifyIcon trayIcon;

        public TrayApplicationContext()
        {
            trayIcon = new NotifyIcon() {
                Icon = Icon.ExtractAssociatedIcon(Assembly.GetExecutingAssembly().Location),
                ContextMenu = new ContextMenu(
                    new MenuItem[] {
                        new MenuItem("Exit", (object sender, EventArgs e) => Environment.Exit(0))
                    }
                ), Visible = true };
                        
            AskCreateIcon();
            LaunchHost();
        }

        string readVersion() {
            if(System.IO.File.Exists(".\\.version"))
                try {
                    return System.IO.File.ReadAllText(".\\.version");
                } catch (Exception) { }

            return "latest";
        }

        void AskCreateIcon() {
            int hasBeenAsked;
            try { hasBeenAsked = (int)Registry.GetValue(RegistryPath, "", 0); }
            catch (Exception ex) { hasBeenAsked = 0; }

            if (hasBeenAsked == 0)
            {
                MessageBoxButtons buttons = MessageBoxButtons.YesNo;
                DialogResult result = MessageBox.Show(
                    "Do you want create desktop icon?",
                    "Create desktop icon",
                    buttons,
                    MessageBoxIcon.None,
                    MessageBoxDefaultButton.Button1,
                    (MessageBoxOptions)0x40000 // MB_TOPMOST
                );

                if (result == DialogResult.Yes) CreateDesctopIcon();
                Registry.SetValue(RegistryPath, "", 1);
            }
        }
        
        string RegistryPath {
            get { return "HKEY_CURRENT_USER\\LocalcoinHost\\IconCreate\\HasBeenAsked" + this.readVersion(); }
        }
        const string LaunchHostFileName = "LocalcoinHost.exe";
        string LaunchHostWorkingDirectory {
            get {
                try
                {
                    return Application.StartupPath + "\\app\\";
                } catch (Exception) {
                    MessageBox.Show(
                        "Not found host folder",
                        "ERROR",
                        MessageBoxButtons.OK,
                        MessageBoxIcon.None,
                        MessageBoxDefaultButton.Button1,
                        (MessageBoxOptions)0x40000);  // MB_TOPMOST
                    Environment.Exit(0);
                }

                return String.Empty;
            }
        }


        void CreateDesctopIcon()
        {
            object shDesktop = (object)"Desktop";
            WshShell shell = new WshShell();
            string shortcutAddress = (string)shell.SpecialFolders.Item(ref shDesktop) + "\\Localcoin Wallet " + this.readVersion() + ".lnk";
            IWshShortcut shortcut = (IWshShortcut)shell.CreateShortcut(shortcutAddress);            
            shortcut.TargetPath = System.Reflection.Assembly.GetExecutingAssembly().Location;
            shortcut.Save();
        }

        void LaunchHost()
        {
            try
            {
                Process process = new Process();
                process.StartInfo.WorkingDirectory = LaunchHostWorkingDirectory;
                process.StartInfo.FileName = LaunchHostWorkingDirectory + LaunchHostFileName;
                process.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
                process.Start();

                process.PriorityClass = ProcessPriorityClass.AboveNormal;
                process.EnableRaisingEvents = true;
                process.Exited += (object sender, EventArgs e) => Environment.Exit(0);

                process.WaitForExit(60000);
            }
            catch (Exception)
            {
                MessageBox.Show(
                        LaunchHostWorkingDirectory + LaunchHostFileName + " not found!",
                        "ERROR",
                        MessageBoxButtons.OK,
                        MessageBoxIcon.None,
                        MessageBoxDefaultButton.Button1,
                        (MessageBoxOptions)0x40000);  // MB_TOPMOST
                Environment.Exit(0);
            }
        }
    }
}
