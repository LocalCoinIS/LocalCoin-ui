using LocalcoinHost.Components;
using System;

namespace LocalcoinHost.Actions {
    public class ExistsRowsInConfigAction
    {
        public const string ACTION_NAME = "/ExistsRowsInConfigAction";

        Node node;

        public ExistsRowsInConfigAction(Node node) { this.node = node; }

        public bool IsExists(dynamic lines) {
            string configContent = node.ReadConfig();
            bool isExists = true;
            foreach (string line in lines)
                if (!line.Contains(line))
                    isExists = false;

            return isExists;
        }
    }
}
