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

function basicroll(bonus){ //the standard 2d6 roll most commonly used
	if(!bonus) var bonus = 0;
	var first = rolldie(6,1);
	var second = rolldie(6,1);
	var icon = outcome_icon(interpretroll(first + second + bonus));
	var first = showdie("&#x003" + first); //for pip pictures is "&#x" + 2679 + first
	var second = showdie("&#x003" + second);
	showresult( "<p>" + first + " + " + second + showbonus(bonus) + " = " + icon + "</p>" );
}

function showbonus(bonus){
	switch (bonus) {
		case 0:
			out = " + <img src=\"./pluszero.png\" />";
			break;
		case (-3):
			out = " + <img src=\"./minusthree.png\" />"
			break;	
		case (-2):
			out = " + <img src=\"./minustwo.png\" />"
			break;				
		case (-1):
			out = " + <img src=\"./minusone.png\" />"
			break;		
		case 1:
			out = " + <img src=\"./plusone.png\" />"
			break;
		case 2:
			out = " + <img src=\"./plustwo.png\" />"
			break;
		case 3:
			out =  " + <img src=\"./plusthree.png\" />"
			break;
		default:
			out = "<i> +" + bonus + "</i>";
	}
	return out;
}

function interpretroll(total){ //interprets a roll result according to the PbtA system
	if (total > 11) {
		return 'pbta_advanced';
	} else if (total > 9) {
		return 'pbta_success';
	} else if (total < 7) {
		return 'pbta_failure';
	} else {
		return 'pbta_partial';
	}
}

function otherroll(sides) { //all the other individual dice rolls
	var result = rolldie(sides,1);
	showresult( "<p><b>1d" + sides + ":</b> " + result + "</p>" );
}	

function showresult(what){
	$( '#rollresults' ).append( what ); // adds result to div content
	$( '#rollresults' ).animate({ scrollTop: $( '#rollresults' )[0].scrollHeight}, 1000); //scrolls down
}

function showdie(symbol, color){
	if(!color) var color = "black";
	return "<span class=\"result\"><span class=\"symbol\" style=\"color: " + color + ";\">" + symbol + "</span></span>";	
}
function outcome_icon(outcome){
	switch (outcome) {
		case 'pbta_failure': 
			color = "red";
			icon = "&#x2716";
			break;
		case 'pbta_partial':
			color = "grey";
			icon = "&#x2753";
			break;
		case 'pbta_success':
			color = "green";
			icon = "&#x2605";
			break;
		case 'pbta_advanced':
			color = "gold";
			icon = "&#x265b";
			break;
	}
			
	return showdie(icon, color);
}

//-->