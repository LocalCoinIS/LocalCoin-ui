using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace LocalcoinHost.Components
{
    public abstract class ProcessControll {
        public Startup startup;
        public Process process = null;
        
        public virtual string Arguments        { get { return null; } }
        public virtual string WorkingDirectory { get { return null; } }
        public virtual string FileName         { get { return null; } }
        public virtual string Title            { get { return null; } }

        public string RunningAppFileName { get => Startup.BASE_DIR + "/" + this.GetType().Name + ".running"; }
        
        protected void WriteNameFile(string name) {
            this.ClearNameFile();
            using (StreamWriter writer = System.IO.File.CreateText(RunningAppFileName))
                writer.Write(name);
        }

        public void ClearNameFile() {
            if(File.Exists(RunningAppFileName)) File.Delete(RunningAppFileName);
        }

        public void TryKillByName() {
            if (!File.Exists(RunningAppFileName)) return;

            string name = System.IO.File.ReadAllText(RunningAppFileName);
            if (name == "") return;
            
            foreach (var process in Process.GetProcessesByName(name))
            {
                process.Kill();
                this.ClearNameFile();
                Console.WriteLine("Kill old " + process.ProcessName);
            }
        }

        public int Start() {
            this.TryKillByName();

            this.process = Process.Start(new ProcessStartInfo() {
                WorkingDirectory = this.WorkingDirectory,
                FileName         = this.WorkingDirectory + this.FileName,
                UseShellExecute  = true,
                Arguments        = this.Arguments
            });

            this.process.PriorityClass = ProcessPriorityClass.AboveNormal;

            try {
                this.WriteNameFile(Title == null ? this.process.ProcessName : Title);
                return this.process.Id;
            } catch (Exception) { }

            return -1;
        }
    }
}
