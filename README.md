Deployment rules
============
1. Compile "npm run build"
2. Push your build to dev branch
3. Check test server https://devwallet.localcoin.is, if it's ok merge to live branch, push

Build will be autodeployed to the server. Working by ssh, keep in mind proper chown&chmod.

LocalCoin-UI
=======

This is a light wallet that connects to a LocalCoin API provided by the *witness_node* executable.

It *stores all keys locally* in the browser, *never exposing your keys to anyone* as it signs transactions locally before transmitting them to the API server which then broadcasts them to the blockchain network. The wallet is encrypted with a password of your choosing and encrypted in a browser database.

## Getting started

LocalCoin-UI depends node Node.js, and version 9+ is required.

On Ubuntu and OSX, the easiest way to install Node is to use the [Node Version Manager](https://github.com/creationix/nvm).

To install NVM for Linux/OSX, simply copy paste the following in a terminal:

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
nvm install v9
nvm use v9
```

Once you have Node installed, you can clone the repo:

```
git clone https://github.com/localcoinis/localcoin-ui.git
cd localcoin-ui
```

Before launching the GUI you will need to install the npm packages:

```
npm install
```

## Running the dev server

The dev server uses Express in combination with Webpack.

Once all the packages have been installed you can start the development server by running:

```
npm start
```

Once the compilation is done the GUI will be available in your browser at: `localhost:9000` or `127.0.0.1:9000`. Hot Reloading is enabled so the browser will live update as you edit the source files.


## TODO: Testnet
By default localcoin-ui connects to the live LocalCoin network.
TODO: (switch it to the testnet. To do so, open the UI in a browser, go to Settings, then under Access, select the *Public Testnet Server* in the dropdown menu. You should also change the faucet if you need to create an account, the testnet faucet address is https://testnet.localcoin.is.)

The UI will reload and connect to the testnet, where you can use the faucet to create an account and receive an initial sum of test LLC.

## Production
If you'd like to host your own wallet somewhere, you should create a production build and host it using NGINX or Apache. In order to create a prod bundle, simply run the following command:

```
npm run build
```
This will create a bundle in the /dist folder that can be hosted with the web server of your choice.


### Installable wallets
We use Electron to provide installable wallets, available for Windows, OSX and Linux Debian platforms such as Ubuntu. First, make sure your local python version is 2.7.x, as a dependency requires this.

On Linux you will need to install the following packages to handle icon generation:

`sudo apt-get install --no-install-recommends -y icnsutils graphicsmagick xz-utils`

For building, each architecture has it's own script that you can use to build your native binary:

__Linux__
`npm run package-deb`  
__Windows__
`npm run package-win`  
__Mac__
`npm run package-mac`  

This will compile the UI with some special modifications for use with Electron, generate installable binaries with Electron and copy the result to the root `build/binaries` folder.


## Contributing
Please work off the staging branch (dev) and make pull requests to that branch. The master branch will only be updated for new releases.

If you would like to get involved, we have a [Telegram chatroom](https://t.me/LocalCoinIS) where you can ask questions and get help. You may also join [LocalCoin on Discord](https://discord.gg/vzxSzYN)

## Development process

- Milestones are numbered YYMMDD and refer to the **anticipated release date**.
- Bugs are always worked before enhancements
- Developers should work each issue according to a numbered branch corresponding to the issue `git checkout -b 123`
- If an issue is already claimed (assigned), do not attempt to claim it. Issues claimed by outside developers will indicate an assignment to wmbutler, but will mention the developer's github account in this the comments.
- To claim an issue, simply leave a comment with your request to claim.
- Do not claim an issue if you will be unable to complete it by the date indicated on the Milestone name

## Coding style guideline

Our style guideline is based on 'Airbnb JavaScript Style Guide' (https://github.com/airbnb/javascript), with few exceptions:

- Strings are double quoted
- Additional trailing comma (in arrays and objects declaration) is optional
- 4 spaces tabs
- Spaces inside curly braces are optional

We strongly encourage to use _eslint_ to make sure the code adhere to our style guidelines.
