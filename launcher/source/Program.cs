using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Threading.Tasks;
using LocalcoinHost.Components;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace LocalcoinHost {
    public class Program {
        public static void Main(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseHttpSys(options =>
                {
                    options.UrlPrefixes.Add(UsedUrl);
                })
                .Build()
                .Run();

        private static string _UsedUrl = "";
        public  static string  UsedUrl { get => _UsedUrl == "" ? _UsedUrl = "http://localhost:" + FreeTcpPort : _UsedUrl; }

        private static int FreeTcpPort {
            get {
                TcpListener l = new TcpListener(IPAddress.Loopback, 0);
                l.Start();
                int port = ((IPEndPoint)l.LocalEndpoint).Port;
                l.Stop();
                return port;
            }
        }
    }
}
