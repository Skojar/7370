<!--//

//$response = file_get_contents('https://www.behindthename.com/api/random.php?key=re097820&number=1&randomsurname=yes');
//$response = new SimpleXMLElement($response);
//echo trim(preg_replace('#<[^>]+>#', ' ', $response));

function getname(){
var apiname = new XMLHttpRequest();
apiname.open("GET","https://www.behindthename.com/api/random.php?key=re097820&number=1&randomsurname=yes",false);
apiname.send();
var name = apiname.response;
name.replace('#<[^>]+>#', ' ');
console.log(name.trim());
}	

//-->