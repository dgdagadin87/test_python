<?php

header('Content-Type: text/javascript');
$lsJson = '{"success":true,"message":"Loaded data","data":[{"id":1,"first":"Fred","last":"Flintstone","email":"fred@flintstone.com","date":"03/15/2006","year":"1987"},{"id":2,"first":"Wilma","last":"Flintstone","email":"wilma@flintstone.com","date":"03/15/2006","year":"1987"},{"id":3,"first":"Pebbles","last":"Flintstone","email":"pebbles@flintstone.com","date":"03/15/2006","year":"1987"},{"id":4,"first":"Barney","last":"Rubble","email":"barney@rubble.com","date":"03/15/2006","year":"1987"},{"id":5,"first":"Betty","last":"Rubble","email":"betty@rubble.com","date":"03/15/2006","year":"1987"},{"id":6,"first":"BamBam","last":"Rubble","email":"bambam@rubble.com","date":"03/15/2006","year":"1987"}]}';
echo $lsJson;
exit;

?> 
