const seven     = require("7zip-bin");
const fs        = require("fs");
const path      = require("path");
const rimraf    = require("rimraf");
const { spawn } = require("child_process");

const NODE_DIR_WINDOWS       = __dirname + "/node/windows/";
const NODE_DIR_LINUX         = __dirname + "/node/linux/";
const NODE_DIR_MACOS         = __dirname + "/node/macos/";
const LAUNCHER_DIR_WINDOWS   = __dirname + "/launcher/windows/";
const LAUNCHER_DIR_LINUX     = __dirname + "/launcher/linux/";
const LAUNCHER_DIR_MACOS     = __dirname + "/launcher/macos/";
const WALLET_FILE_PATH       = __dirname + "/build/binaries/wallet";
const PORTABLE_DIR_PATH      = __dirname + "/build/binaries/portable/";
const PORTABLE_ZIP_PATH      = __dirname + "/build/binaries/portable.zip";
const PORTABLE_NODE_DIR_PATH = __dirname + "/build/binaries/portable/node/";

var fromNodeDir = "", fromLauncherDir = "";
switch(process.platform) {
    case "darwin":
        fromNodeDir     = NODE_DIR_MACOS;
        fromLauncherDir = LAUNCHER_DIR_MACOS;
        break;
    case "win32":
        fromNodeDir     = NODE_DIR_WINDOWS;
        fromLauncherDir = LAUNCHER_DIR_WINDOWS;
        break;
    case "linux":
        fromNodeDir     = NODE_DIR_LINUX;
        fromLauncherDir = LAUNCHER_DIR_LINUX;
        break;
}

if (fs.existsSync(PORTABLE_DIR_PATH)) rimraf.sync(PORTABLE_DIR_PATH);
fs.mkdirSync(PORTABLE_DIR_PATH);

copyFileSync(WALLET_FILE_PATH, PORTABLE_DIR_PATH);
copyFolderRecursiveSync(fromNodeDir, PORTABLE_NODE_DIR_PATH);
copyFolderRecursiveSync(fromLauncherDir, PORTABLE_DIR_PATH);

if (fs.existsSync(PORTABLE_ZIP_PATH))
    fs.unlinkSync(PORTABLE_ZIP_PATH);
zipFolder(PORTABLE_DIR_PATH + "*", PORTABLE_ZIP_PATH);

console.log("portable.zip has been created");















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