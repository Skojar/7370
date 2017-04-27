<!-- //Javascript for final project:


$(document).ready(function(){
    $( '#cancel' ).click(function(){ //if you click the cancel div, it and the show div are hidden.
		$( '#cancel' ).css({"display":"none"});
		$( '#show' ).css({"display":"none"});				
	});
	$( '#navigation' ).load( "./default.html #nav" ); //load the default navigation
	setTimeout(onRepeat, 3000); //provide move advice every thirty seconds.
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
	console.log($( '#show' ).html().length);
}

//-->
