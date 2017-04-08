<!-- //Javascript for mini project 5:
$(document).ready(function(){
    $( '#cancel' ).click(function(){ //if you click the cancel div, it and the show div are hidden.
		$( '#cancel' ).css({"display":"none"});
		$( '#show' ).css({"display":"none"});				
	});
});

sfHover = function() { //this is taken straight from http://www.htmldog.com/articles/suckerfish/dropdowns/
	var sfEls = document.getElementById("nav").getElementsByTagName("LI");
	for (var i=0; i<sfEls.length; i++) {
		sfEls[i].onmouseover=function() {
			this.className+=" sfhover";
		}
		sfEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" sfhover\\b"), "");
		}
	}
}
if (window.attachEvent) window.attachEvent("onload", sfHover);

function showit(what){ //this is called by onclick attributes, in this case I think they're all list items.
        $( '#show' ).load(what); //load the content specified by the onclick into the show div, then
	//make the cancel and show divs visible
	$( '#cancel' ).css({"display":"block"});
	$( '#show' ).css({"display":"block"});			
}

function extension(fname){ 
	//I was considering making a list of excluded file extensions to check before loading in showit.
	//I didn't get it done, but I'm saving this in case I want to do it in the final project.
	//it would look something like: 
	//	if(jQuery.inArray( extension(what), ["png","jpg","gif",...] ) {
	//		don't use .load();
	//	} else {
	//		use .load() as normal;
	//	}
	//see http://stackoverflow.com/questions/190852/how-can-i-get-file-extensions-with-javascript
	return fname.substr((~-fname.lastIndexOf(".") >>> 0) + 2);
}
//-->
