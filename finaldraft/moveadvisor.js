<!--//
//this code handles the move suggester

function showadvice(what){
	$( '#advisoroutput' ).append( what ); // adds result to div content
	$( '#advisoroutput' ).animate({ scrollTop: $( '#advisoroutput' )[0].scrollHeight}, 1000); //scrolls down
}

function onRepeat(){ //calls for a new suggestion every 20 seconds
	suggest();
	setTimeout(onRepeat,20000);
}	

function suggest(){ //selects a move to suggest
	if(!window.movelist) buildlist(); 	//check to see that array is populated.  if not, make it so.
	var suggestion = window.movelist[Math.floor(Math.random() * window.movelist.length)]; 	//select a random element from the list.
	while( suggestion == window.previoussuggestion ){ //if it's the same as the last one, pick another one.
		suggestion = window.movelist[Math.floor(Math.random() * window.movelist.length)];
	}
	showadvice("<p class=\"suggestion\">" + suggestion + "</p>"); //display the choice
	window.previoussuggestion = suggestion; //remember to compare it to the next choice
}	

function buildlist(){
	//populates an array with move suggestions.
	window.movelist = [
		'<b>Present A Barrier:</b> Trouble En Route',
		'<b>Present A Barrier:</b> Make Them Backtrack',
		'<b>Present A Barrier:</b> More Complicated Than They Thought',
		'<b>Present A Barrier:</b> Worse Than it Seemed',
		'<b>Present A Barrier:</b> They Missed the Obvious',
		'<b>Present A Barrier:</b> Separate Them',
		'<b>Present A Barrier:</b> Capture Someone',
		'<b>Change the Environment:</b> Trouble They Missed Earlier',
		'<b>Change the Environment:</b> They&#39;re Too Late',
		'<b>Change the Environment:</b> The Abyss Gazes Into Them',
		'<b>Change the Environment:</b> Their Answer is in Another Castle',
		'<b>Change the Environment:</b> Suddenly, Something Else',
		'<b>Change the Environment:</b> Reveal an Unwelcome Truth',
		'<b>Change the Environment:</b> Location Move',
		'<b>Change the Environment:</b> Off-Screen Move',
		'<b>Point to a Looming Threat:</b> Grim Portent',
		'<b>Point to a Looming Threat:</b> Show Signs of an Approaching Threat',
		'<b>Point to a Looming Threat:</b> Introduce a New Faction or Type',
		'<b>Snowball on a Previous Move:</b> Monster Move',
		'<b>Snowball on a Previous Move:</b> Danger Move',
		'<b>Present Riches at a Price:</b> Tell Them the Requirements or Consequences and Ask',
		'<b>Present Riches at a Price:</b> Offer an Opportunity, With or Without Cost',
		'<b>Present Riches at a Price:</b> Partial Truth, Disguised as Another Move',
		'<b>Present Riches at a Price:</b> Provide Seductive Misunderstanding',
		'<b>Present Riches at a Price:</b> Put Someone in a Spot',
		'<b>Focus on the Character:</b> Give an Opportunity that Fits Their Choices',
		'<b>Focus on the Character:</b> Show a Downside to Their Choices',
		'<b>Focus on the Character:</b> Use Up Their Resources',
		'<b>Focus on the Character:</b> Deal Damage',
		'<b>Focus on the Character:</b> Turn Their Move Back on Them'
	];
}
//-->