<!-- //core Javascript for final project:

$(document).ready(function(){
    	$( '#cancel' ).click(function(){ //if you click the cancel div, it and the show div are hidden.
		$( '#cancel' ).css({"display":"none"});
		$( '#show' ).css({"display":"none"});
		$( '#showsmall' ).css({"display":"none"});	    
	});
	$( '#navigation' ).load( "./default.html #nav" ); //load the default navigation with the page.
	setTimeout(onRepeat, 3000); //provide initial move advice 3 seconds after page loads.
});

sfHover = function() { //this is taken straight from http://www.htmldog.com/articles/suckerfish/dropdowns/ it makes dropdowns work.
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
	$( '#showquote' ).load(what); //load the content specified by the onclick into the show div, then
	//make the cancel and show divs visible
	$( '#cancel' ).css({"display":"block"});
	$( '#show' ).css({"display":"block"});	
}
function showitsmall(what){ //the same as above, but using a different destination div.
	$( '#showsmall' ).load(what); 
	$( '#cancel' ).css({"display":"block"});
	$( '#showsmall' ).css({"display":"block"});	
}

//-->
