using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
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
        Node   node   = new Node();
        Wallet wallet = new Wallet() { UsedUrl = Program.UsedUrl };

        public void ConfigureServices(IServiceCollection services) => services.AddCors();

        public Startup() {
            if (!this.CheckFiles()) {
                Console.ForegroundColor = ConsoleColor.Red;                
                Console.Error.WriteLine("\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                Console.Error.WriteLine("           Fix errors and try again".ToUpper());
                Console.Error.WriteLine("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n\n");
                Console.ResetColor();
                return;
            }

            this.OnStart();
            AppDomain.CurrentDomain.ProcessExit += OnExit;
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

            if (File.Exists(this.wallet.FileName)) {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.Error.WriteLine("OK: " + this.wallet.FileName);
            } else {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("FILE NOT FOUND: " + this.wallet.FileName);
                hasError = true;
            }

            Console.ResetColor();
            Console.WriteLine("");

            return !hasError;
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

        private void OnExit(object sender, EventArgs e) {
            try { this.node.TryKillByName();   } catch (Exception) { }
            try { this.wallet.TryKillByName(); } catch (Exception) { }
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env) {
            if (env.IsDevelopment()) app.UseDeveloperExceptionPage();
            
            app.UseCors(builder => builder.AllowAnyOrigin());
            app.Run(async (context) => {
                switch (context.Request.Path) {
                    case ReloadToActivenodeAction.ACTION_NAME:
                        using (StreamReader stream = new StreamReader(context.Request.Body))
                            new ReloadToActivenodeAction(this.node).Reload(stream.ReadToEnd());
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
