using LocalcoinHost.Components;

namespace LocalcoinHost.Actions {
    public class ReloadToActivenodeAction {
        public const string ACTION_NAME = "/ReloadToActivenodeAction";
        Node node;

        public ReloadToActivenodeAction(Node node) { this.node = node; }

        public void Reload(string newBodyConfig) {
            this.node.TryKillByName();
            this.node.RewriteConfig(newBodyConfig);
            this.node.Start();
        }
    }
}
