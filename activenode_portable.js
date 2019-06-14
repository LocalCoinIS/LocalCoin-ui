const seven     = require("7zip-bin");
const fs        = require("fs");
const path      = require("path");
const rimraf    = require("rimraf");
const { spawn } = require("child_process");
const versions  = JSON.parse(fs.readFileSync("./version.json", "utf8"));

const NODE_DIR_WINDOWS       = __dirname + "/node/windows/";
const NODE_DIR_LINUX         = __dirname + "/node/linux/";
const NODE_DIR_MACOS         = __dirname + "/node/macos/";
const LAUNCHER_DIR_WINDOWS   = __dirname + "/launcher/source/bin/Release/netcoreapp2.1/win10-x64/publish/";
const LAUNCHER_DIR_LINUX     = __dirname + "/launcher/linux/";
const LAUNCHER_DIR_MACOS     = __dirname + "/launcher/macos/";
const WALLET_FILE_WINDOWS    = __dirname + "/build/binaries/wallet.exe";
const WALLET_FILE_LINUX      = __dirname + "/build/binaries/wallet";
const WALLET_FILE_MACOS      = __dirname + "/build/binaries/wallet";
const PORTABLE_DIR_PATH      = __dirname + "/build/binaries/portable/";
const PORTABLE_DIR_APP_PATH  = __dirname + "/build/binaries/portable/app/";
const PORTABLE_ZIP_PATH      = __dirname + "/build/binaries/";
const PORTABLE_NODE_DIR_PATH = __dirname + "/build/binaries/portable/app/node/";
const STARTER_APP_WINDOWS    = __dirname + "/launcher/starter/windows/source/source/bin/Release/LocalCoin.exe";

var fromNodeDir, fromLauncherDir, fromWalletFile, zipFileName;
switch(process.platform) {
    case "darwin":
        zipFileName     = "Localcoin-Client-" + versions.current_version + "-MacOS.zip";
        fromNodeDir     = NODE_DIR_MACOS;
        fromLauncherDir = LAUNCHER_DIR_MACOS;
        fromWalletFile  = WALLET_FILE_MACOS;
        break;
    case "win32":
        zipFileName     = "Localcoin-Client-" + versions.current_version + "-Windows.zip";
        fromNodeDir     = NODE_DIR_WINDOWS;
        fromLauncherDir = LAUNCHER_DIR_WINDOWS;
        fromWalletFile  = WALLET_FILE_WINDOWS;
        break;
    case "linux":
        zipFileName     = "Localcoin-Client-" + versions.current_version + "-Linux.zip";
        fromNodeDir     = NODE_DIR_LINUX;
        fromLauncherDir = LAUNCHER_DIR_LINUX;
        fromWalletFile  = WALLET_FILE_LINUX;
        break;
}

if (fs.existsSync(PORTABLE_DIR_PATH)) rimraf.sync(PORTABLE_DIR_PATH);
fs.mkdirSync(PORTABLE_DIR_PATH);
fs.writeFileSync(PORTABLE_DIR_PATH + ".version", versions.current_version);

if (fs.existsSync(PORTABLE_DIR_APP_PATH)) rimraf.sync(PORTABLE_DIR_APP_PATH);
fs.mkdirSync(PORTABLE_DIR_APP_PATH);

copyFileSync           (fromWalletFile,  PORTABLE_DIR_APP_PATH);
copyFolderRecursiveSync(fromNodeDir,     PORTABLE_NODE_DIR_PATH);
copyFolderRecursiveSync(fromLauncherDir, PORTABLE_DIR_APP_PATH);

switch(process.platform) {
    case "darwin":
        //.....
        break;
    case "win32":
        copyFileSync(STARTER_APP_WINDOWS, PORTABLE_DIR_PATH);
        break;
    case "linux":
        //.....
        break;
}

if (fs.existsSync(PORTABLE_ZIP_PATH + zipFileName))
    fs.unlinkSync(PORTABLE_ZIP_PATH + zipFileName);
zipFolder(PORTABLE_DIR_PATH + "*", PORTABLE_ZIP_PATH + zipFileName);

console.log(zipFileName + " has been created");















//////////////////////////////////////////////////////////////
function zipFolder(target, toZip) {
    spawn(seven.path7za, ["a", toZip, target]); }
function copyFileSync( source, target ) {
    var targetFile = target;    
    if ( fs.existsSync( target ) )
        if ( fs.lstatSync( target ).isDirectory() )
            targetFile = path.join( target, path.basename( source ) );
    fs.writeFileSync(targetFile, fs.readFileSync(source)); }
function copyFolderRecursiveSync( source, targetFolder ) {
    if ( !fs.existsSync( targetFolder ) ) fs.mkdirSync( targetFolder );
    if ( !fs.lstatSync( source ).isDirectory() ) return;
    var files = fs.readdirSync( source );
    files.forEach( function ( file ) {
        var curSource = path.join( source, file );
        if ( fs.lstatSync( curSource ).isDirectory() ) copyFolderRecursiveSync( source + "/" + file + "/", targetFolder + file + "/");
        else                                           copyFileSync( curSource, targetFolder );
    } ); }
//////////////////////////////////////////////////////////////