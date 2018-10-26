<?php

$out = null;
exec("git checkout build/dist/index.html 2>&1", $out);
print_r($out);

$out = null;
exec("git pull origin staging-new-layout 2>&1", $out);
print_r($out);

$content = file_get_contents("build/dist/index.html");
$content = str_replace('<link rel="stylesheet" href="app.css">', '<link rel="stylesheet" href="app.css"><link rel="stylesheet" href="styles/main.css">', $content);
file_put_contents("build/dist/index.html", $content);
