<!--//
//this code handles the dice roller

function rolldie(sides,count){ //simple dice roller
	if(!count) var count = 1;
	var total = 0;
	for(var i = 0; i < count; i++){
		total += Math.floor( Math.random() * sides ) + 1;
	}
	return total;
}	

function basicroll(){ //the standard 2d6 roll most commonly used
	var first = rolldie(6,1);
	var second = rolldie(6,1);
	showresult( "<p><b>2d6:</b> " + first + " + " + second + " = " + (first + second) + "</p>" );
}

function otherroll(sides) { //all the other individual dice rolls
	var result = rolldie(sides,1);
	showresult( "<p><b>1d" + sides + ":</b> " + result + "</p>" );
}	

function showresult(what){
	$( '#rollerresults' ).append( what ); // adds result to div content
	$( '#rollerresults' ).animate({ scrollTop: $( '#rollerresults' )[0].scrollHeight}, 1000); //scrolls down
}

//-->