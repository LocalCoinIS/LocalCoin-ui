<?php
const FILE        = 'app/assets/asset-symbols/symbols.js';
const BEGIN       = '/* coins begin */';
const END         = '/* coins end */';
const TEMPLATE    = 'require("!file-loader?name=asset-symbols/[name].{ext}!./{coinName}.{ext}")';
const DIR_COINS   = 'app/assets/asset-symbols/';
const COIN_PREFIX = 'coin_';

$coins = [];
$content = file_get_contents(FILE);
$begin = explode(BEGIN, $content);
$end = explode(END, $content);

$allImages = scandir(DIR_COINS);
foreach ($allImages as $image) {
    $ext = null;
    if(strpos($image, '.png') > 0) $ext = 'png';
    if(strpos($image, '.svg') > 0) $ext = 'svg';
    if($ext === null) continue;

    $imageName = str_replace(['.png', '.svg'], ['', ''], $image);
    $variable = strtolower($imageName);
    $line = str_replace(['{coinName}', '{ext}'], [$imageName, $ext], TEMPLATE);
    $coins[$variable] = $line;
}

$strArray = 'export const coins = [';
foreach($coins as $coin => $require) {
    $strArray .= "\n\t{";
    $strArray .= "\n\t\tname: \"$coin\",";
    $strArray .= "\n\t\t" . "image: " . $require . ", ";
    $strArray .= "\n\t},";
}
$strArray .= "\n];";

$content = reset($begin) . BEGIN . "\n" .$strArray. "\n".END . end($end);
unlink(FILE);
file_put_contents(FILE, $content);
