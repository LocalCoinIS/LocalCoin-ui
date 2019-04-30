using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace LocalcoinHost.Components
{
    public abstract class ProcessControll {
        public bool killByOlPid = false;
        private Process process = null;
        
        public virtual string Arguments        { get { return null; } }
        public virtual string WorkingDirectory { get { return null; } }
        public virtual string FileName         { get { return null; } }

        public string PidFileName {
            get => Directory.GetCurrentDirectory() + "/" + this.GetType().Name + ".pid";
        }

        public void Stop() {
            if (this.process == null) return;

            try {
                this.process.Kill();
                this.ClearPid();
            } catch (Exception ex) { }

            this.process = null;
        }

        private void WritePid(int pid) {
            this.ClearPid();
            using (StreamWriter writer = System.IO.File.CreateText(PidFileName))
                writer.Write(pid);
        }

        private void ClearPid() {
            if(File.Exists(PidFileName)) File.Delete(PidFileName);
        }

        private void tryKillByPid() {
            if (!File.Exists(PidFileName)) return;

            int pid = -1;
            if (!int.TryParse(System.IO.File.ReadAllText(PidFileName), out pid)) return;
            if (pid < 1) return;

            Process oldProcess = Process.GetProcessById(pid);
            oldProcess.Kill();
            Console.WriteLine("Kill old " + oldProcess.ProcessName + ", pid: " + pid);
            this.ClearPid();
        }

        public int Start() {
            if(this.killByOlPid) this.tryKillByPid();
            if (this.process != null) this.Stop();

            this.process = Process.Start(new ProcessStartInfo() {
                WorkingDirectory = this.WorkingDirectory,
                FileName         = this.WorkingDirectory + this.FileName,
                UseShellExecute  = true,
                Arguments        = this.Arguments
            });
            
            try {
                this.WritePid(this.process.Id);
                return this.process.Id;
            } catch (Exception ex) { }

            return -1;
        }
    }
}
