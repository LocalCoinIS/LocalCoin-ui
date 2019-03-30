import React from "react";
const TEMPLATE_CONFIG_INI = require('other/config.ini.template.json').template;

class NodeControll extends React.Component {
    upNode() {

    }

    downNode() {

    }

    rewriteConfig(user_account, public_key_activenode, priv_key_activenode) {        
        try { 
            var fs = require('fs');
            fs.writeFile('C:/myfile.txt', "test", 'utf-8');
        }
        catch(e) { alert(JSON.stringify(e)); }
    }

//user_account
//public_key_activenode
//priv_key_activenode

// # Name of account that is an activenode
// # activenode-account = 

// # Tuple of [PublicKey, WIF private key] (for account that will get rewards for being an activenode)
// activenode-private-key = ["LLC6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV","5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"]

}

export default NodeControll;
