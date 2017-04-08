<!-- //Javascript for mini project 5:
$(document).ready(function(){
    $( 'button.show' ).click(function(){
		$( '#cancel' ).css({"display":"block"});
		$( '#show' ).css({"display":"block"});		
    });
    $( '#cancel' ).click(function(){
		$( '#cancel' ).css({"display":"none"});
		$( '#show' ).css({"display":"none"});				
	});
});

sfHover = function() {
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

function showit(what){
		$( '#show' ).load(what);
		$( '#cancel' ).css({"display":"block"});
		$( '#show' ).css({"display":"block"});			
}

//-->