<?php

class Picture 
{
	public $filename;
	public $width;
	public $height;
	
}

//reads it's directoy and returns a json file list
$files = array();

foreach (glob("https://github.com/Skojar/7370/*.{jpg,gif,png}", GLOB_BRACE) as $filename) { //runs through list of image files
	$file = new Picture;
	$file->filename = $filename;
	list($width, $height) = getimagesize($filename);
	$file->width = $width;
	$file->height = $height;
	
	$files[] = $file;
}


header('Content-type: application/json');
echo json_encode($files);

?>
