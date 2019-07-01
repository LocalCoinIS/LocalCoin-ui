const FILE_CONTENT = 
    '# Endpoint for P2P node to listen on\n'+
    'p2p-endpoint = 0.0.0.0:11020\n'+
    '\n'+
    '# P2P nodes to connect to on startup (may specify multiple times)\n'+
    '# seed-node = \n'+
    '\n'+
    '# JSON array of P2P nodes to connect to on startup\n'+
    '# seed-nodes = \n'+
    '\n'+
    '# Pairs of [BLOCK_NUM,BLOCK_ID] that should be enforced as checkpoints.\n'+
    '# checkpoint = \n'+
    '\n'+
    '# Endpoint for websocket RPC to listen on\n'+
    'rpc-endpoint = 0.0.0.0:8090\n'+
    '\n'+
    '# Endpoint for TLS websocket RPC to listen on\n'+
    '# rpc-tls-endpoint = \n'+
    '\n'+
    '# The TLS certificate file for this server\n'+
    '# server-pem = \n'+
    '\n'+
    '# Password for this certificate\n'+
    '# server-pem-password = \n'+
    '\n'+
    '# File to read Genesis State from\n'+
    '# genesis-json = \n'+
    '\n'+
    '# Block signing key to use for init witnesses, overrides genesis file\n'+
    '# dbg-init-key = \n'+
    '\n'+
    '# JSON file specifying API permissions\n'+
    '# api-access = \n'+
    '\n'+
    '# Space-separated list of plugins to activate\n'+
    '# plugins = \n'+
    '\n'+
    '# Enable block production, even if the chain is stale.\n'+
    'enable-stale-production = false\n'+
    '\n'+
    '# Percent of witnesses (0-99) that must be participating in order to produce blocks\n'+
    'required-participation = false\n'+
    '\n'+
    '# ID of witness controlled by this node (e.g. "1.6.5", quotes are required, may specify multiple times)\n'+
    '# witness-id = \n'+
    '\n'+
    '# Tuple of [PublicKey, WIF private key] (may specify multiple times)\n'+
    'private-key = ["LLC6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV","5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"]\n'+
    '\n'+
    '# Name of account that is an activenode\n'+
    'activenode-account = {accountName}\n'+
    '\n'+
    '# Tuple of [PublicKey, WIF private key] (for account that will get rewards for being an activenode)\n'+
    'activenode-private-key = ["{publicKey}","{privateKey}"]\n'+
    '\n'+
    '# Tuple of [PublicKey, WIF private key] (may specify multiple times)\n'+
    'debug-private-key = ["LLC6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV","5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3"]\n'+
    '\n'+
    '# Account ID to track history for (may specify multiple times)\n'+
    '# track-account = \n'+
    '\n'+
    '# Keep only those operations in memory that are related to account history tracking\n'+
    'partial-operations = 1\n'+
    '\n'+
    '# Maximum number of operations per account will be kept in memory\n'+
    'max-ops-per-account = 1000\n'+
    '\n'+
    '# Elastic Search database node url\n'+
    '# elasticsearch-node-url = \n'+
    '\n'+
    '# Number of bulk documents to index on replay(5000)\n'+
    '# elasticsearch-bulk-replay = \n'+
    '\n'+
    '# Number of bulk documents to index on a syncronied chain(10)\n'+
    '# elasticsearch-bulk-sync = \n'+
    '\n'+
    '# Log bulk events to database\n'+
    '# elasticsearch-logs = \n'+
    '\n'+
    '# Use visitor to index additional data(slows down the replay)\n'+
    '# elasticsearch-visitor = \n'+
    '\n'+
    '# Track market history by grouping orders into buckets of equal size measured in seconds specified as a JSON array of numbers\n'+
    'bucket-size = [60,300,900,1800,3600,14400,86400]\n'+
    '\n'+
    '# How far back in time to track history for each bucket size, measured in the number of buckets (default: 1000)\n'+
    'history-per-size = 1000\n'+
    '\n'+
    '# Will only store this amount of matched orders for each market in order history for querying, or those meet the other option, which has more data (default: 1000)\n'+
    'max-order-his-records-per-market = 1000\n'+
    '\n'+
    '# Will only store matched orders in last X seconds for each market in order history for querying, or those meet the other option, which has more data (default: 259200 (3 days))\n'+
    'max-order-his-seconds-per-market = 259200\n'+
    '\n'+
    '# RPC endpoint of a trusted validating node (required)\n'+
    '# trusted-node = \n'+
    '\n'+
    '# Block number after which to do a snapshot\n'+
    '# snapshot-at-block = \n'+
    '\n'+
    '# Block time (ISO format) after which to do a snapshot\n'+
    '# snapshot-at-time = \n'+
    '\n'+
    '# Pathname of JSON file where to store the snapshot\n'+
    '# snapshot-to = \n'+
    '\n'+
    '# Elasticsearch node url\n'+
    '# es-objects-elasticsearch-url = \n'+
    '\n'+
    '# Log bulk events to database\n'+
    '# es-objects-logs = \n'+
    '\n'+
    '# Number of bulk documents to index on replay(5000)\n'+
    '# es-objects-bulk-replay = \n'+
    '\n'+
    '# Number of bulk documents to index on a syncronied chain(10)\n'+
    '# es-objects-bulk-sync = \n'+
    '\n'+
    '# Store proposal objects\n'+
    '# es-objects-proposals = \n'+
    '\n'+
    '# Store account objects\n'+
    '# es-objects-accounts = \n'+
    '\n'+
    '# Store asset objects\n'+
    '# es-objects-assets = \n'+
    '\n'+
    '# Store balances objects\n'+
    '# es-objects-balances = \n'+
    '\n'+
    '# Store limit order objects\n'+
    '# es-objects-limit-orders = \n'+
    '\n'+
    '# Store feed data\n'+
    '# es-objects-asset-bitasset = \n'+
    '\n'+
    '# Group orders by percentage increase on price. Specify a JSON array of numbers here, each number is a group, number 1 means 0.01%. \n'+
    'tracked-groups = [10,100]\n'+
    '\n'+
    '# declare an appender named "stderr" that writes messages to the console\n'+
    '[log.console_appender.stderr]\n'+
    'stream=std_error\n'+
    '\n'+
    '# declare an appender named "p2p" that writes messages to p2p.log\n'+
    '[log.file_appender.p2p]\n'+
    '# filename can be absolute or relative to this config file\n'+
    'filename=logs/p2p/p2p.log\n'+
    '# Rotate log every ? minutes, if leave out default to 60\n'+
    'rotation_interval=60\n'+
    '# how long will logs be kept (in days), if leave out default to 7\n'+
    'rotation_limit=7\n'+
    '\n'+
    '# route any messages logged to the default logger to the "stderr" logger we\n'+
    '# declared above, if they are info level are higher\n'+
    '[logger.default]\n'+
    'level=info\n'+
    'appenders=stderr\n'+
    '\n'+
    '# route messages sent to the "p2p" logger to the p2p appender declared above\n'+
    '[logger.p2p]\n'+
    'level=info\n'+
    'appenders=p2p';

const VAR_accountName = "{accountName}";
const VAR_publicKey   = "{publicKey}";
const VAR_privateKey  = "{privateKey}";

class ConfigINI {
    accountName = null;
    publicKey   = null;
    privateKey  = null;
    constructor(_accountName, _publicKey, _privateKey) {
        this.accountName = _accountName;
        this.publicKey   = _publicKey;
        this.privateKey  = _privateKey;
    }

    getMainRows = () => {
        let items = FILE_CONTENT
                        .split('\n')
                        .filter(el => el.indexOf(VAR_accountName) !== -1 ||
                                      el.indexOf(VAR_publicKey)   !== -1 ||
                                      el.indexOf(VAR_privateKey)  !== -1);
        
        for(let i in Object.keys(items))
            items[i] = (items[i] + "")
                .replace(VAR_accountName, this.accountName)
                .replace(VAR_publicKey,   this.publicKey)
                .replace(VAR_privateKey,  this.privateKey);

        return items;
    }
        
    get = () => FILE_CONTENT
                    .replace(VAR_accountName, this.accountName)
                    .replace(VAR_publicKey,   this.publicKey)
                    .replace(VAR_privateKey,  this.privateKey);
}

export default ConfigINI;
