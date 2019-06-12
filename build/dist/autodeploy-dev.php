<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$out = null;
exec("/usr/bin/git pull origin dev 2>&1", $out);
print_r($out);
