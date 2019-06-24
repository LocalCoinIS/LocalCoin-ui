using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace LocalcoinHost.Components
{
    public class Platform
    {
        public static string Name {
            get {
                if (System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(OSPlatform.Windows))
                    return OSPlatform.Windows.ToString().ToLower();

                if (System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
                    return OSPlatform.Linux.ToString().ToLower();

                if (System.Runtime.InteropServices.RuntimeInformation.IsOSPlatform(OSPlatform.OSX))
                    return OSPlatform.OSX.ToString().ToLower();

                return null;
            }
        }
    }
}
