<?php
$response = file_get_contents('https://www.behindthename.com/api/random.php?key=re097820&number=1&randomsurname=yes');
//$response = new SimpleXMLElement($response);
echo trim(preg_replace('#<[^>]+>#', ' ', $response));
?>
