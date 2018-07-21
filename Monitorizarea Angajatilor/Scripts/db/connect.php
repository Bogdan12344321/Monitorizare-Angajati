<?php
define("HOSTNAME","localhost");
define("USERNAME","root");
define("PASSWORD","");
define("DATABASE","angajati");

$dbhandle = new mysqli(HOSTNAME,USERNAME,PASSWORD,DATABASE) or die ("Nu s-a realizat conectarea");
if($dbhandle){
    echo 's-a conectat';
}