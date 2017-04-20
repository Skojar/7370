<!--//
//this code handles the dice roller

function suggest(){ //selects a move to suggest
	showadvice("<p>Here's a suggestion!</p>");
}	
	

function showadvice(what){
	$( '#advisoroutput' ).append( what ); // adds result to div content
	$( '#advisoroutput' ).animate({ scrollTop: $( '#advisoroutput' )[0].scrollHeight}, 1000); //scrolls down
}

function onRepeat(){ //calls for a new suggestion every 20 seconds
	suggest();
	setTimeout(onRepeat,20000);
}	
//-->