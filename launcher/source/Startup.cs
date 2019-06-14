using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using LocalcoinHost.Actions;
using LocalcoinHost.Components;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;

namespace LocalcoinHost {
    public class Startup : IDisposable {
        public static readonly string BASE_DIR = Directory.GetCurrentDirectory();

        Node   node;
        Wallet wallet;

        public void ConfigureServices(IServiceCollection services) => services.AddCors();

        public Startup() {
            this.node = new Node()
            {
                startup = this
            };
            this.wallet = new Wallet()
            {
                startup = this,
                UsedUrl = Program.UsedUrl
            };

            if (!this.CheckFiles()) {
                Console.ForegroundColor = ConsoleColor.Red;                
                Console.Error.WriteLine("\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                Console.Error.WriteLine("           Fix errors and try again".ToUpper());
                Console.Error.WriteLine("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n\n");
                Console.ResetColor();
                return;
            }

            try {
                if (File.Exists(wallet_is_loaded))
                    File.Delete(wallet_is_loaded);
            } catch (Exception) { }

            this.OnStart();
            AppDomain.CurrentDomain.ProcessExit += OnExit;
        }

        string wallet_is_loaded
        {
            get {
                return Startup.BASE_DIR + "/wallet_is_loaded";
            }
        }

        private bool CheckFiles() {
            bool hasError = false;

            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine("Runngin on " + Platform.Name);

            if (File.Exists(this.node.WorkingDirectory + this.node.FileName)) {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.Error.WriteLine("OK: " + this.node.WorkingDirectory + this.node.FileName);
            } else {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("FILE NOT FOUND: " + this.node.WorkingDirectory + this.node.FileName);
                hasError = true;
            }

            if (File.Exists(this.node.ConfigIni)) {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.Error.WriteLine("OK: " + this.node.ConfigIni);
            } else {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("FILE NOT FOUND: " + this.node.ConfigIni);
                hasError = true;
            }

            if (File.Exists(this.wallet.WorkingDirectory + this.wallet.FileName)) {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.Error.WriteLine("OK: " + this.wallet.WorkingDirectory + this.wallet.FileName);
            } else {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("FILE NOT FOUND: " + this.wallet.WorkingDirectory + this.wallet.FileName);
                hasError = true;
            }

            Console.ResetColor();
            Console.WriteLine("");

            return !hasError;
        }

        public void SubscribeExitEventNode()
        {
            this.node.process.EnableRaisingEvents = true;
            this.node.process.Exited += OnAnyProcessExited;
        }

        public void UnsubscribeExitEventNode() {
            this.node.process.EnableRaisingEvents = false;
            this.node.process.Exited -= OnAnyProcessExited;
        }

        public void SubscribeExitEventWallet()
        {
            this.wallet.process.EnableRaisingEvents = true;
            this.wallet.process.Exited += OnAnyProcessExited;
        }

        public void UnsubscribeExitEventWallet()
        {
            this.wallet.process.EnableRaisingEvents = false;
            this.wallet.process.Exited -= OnAnyProcessExited;
        }

        private void OnStart() {
            try {
                this.node.Start();
                this.wallet.Start();
            } catch (Exception ex) {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine(ex.Message);
                Console.ResetColor();
            }
        }

        private void OnAnyProcessExited(object sender, EventArgs e) {
            Environment.Exit(0);
        }

        private void OnExit(object sender, EventArgs e) {
            try { this.node.TryKillByName();   } catch (Exception) { }
            try { this.wallet.TryKillByName(); } catch (Exception) { }
        }

        static string _lastPercentReplayBlock = "";
        public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment()) app.UseDeveloperExceptionPage();
            
            app.UseCors(builder => builder.AllowAnyOrigin());
            app.Run(async (context) => {
                switch (context.Request.Path) {
                    case "/console":
                        var console = string.Join(",", this.node.LastConsoleLines.ToArray());
                        context.Response.WriteAsync(console);
                        break;
                    case "/log":
                        var log = string.Join(",", this.node.ReadLog());
                        context.Response.WriteAsync(log);
                        break;
                    case "/percentreplay":
                        string lastPercentReplayBlock = this.node.GetPercentReplayBlock();
                        if(_lastPercentReplayBlock == lastPercentReplayBlock)
                             context.Response.WriteAsync("");
                        else context.Response.WriteAsync(_lastPercentReplayBlock = lastPercentReplayBlock);
                        break;
                    case ReloadToActivenodeAction.ACTION_NAME:
                        using (StreamReader stream = new StreamReader(context.Request.Body))
                            new ReloadToActivenodeAction(this.node).Reload(stream.ReadToEnd());
                        break;
                    case "/wallet_is_loaded":
                        try { File.Create(wallet_is_loaded); }
                        catch (Exception) { }
                        break;
                    case ExistsRowsInConfigAction.ACTION_NAME:
                        using (StreamReader stream = new StreamReader(context.Request.Body)) {
                            bool response = (new ExistsRowsInConfigAction(this.node))
                                                .IsExists(JsonConvert.DeserializeObject(stream.ReadToEnd()));

                            context.Response.WriteAsync(response.ToString());
                        }
                        break;
                }
            });
        }

        public void Dispose() => this.OnExit(null, null);
    }
}
