<!--//
//this code handles the theme switcher

function changestylesheet(which){ 
	$( '#theme' ).attr({href : which}); //changes the linked stylesheet 
	//$( 'link[rel=stylesheet]' ).attr({href : which}); //changes the linked stylesheet 	
}	

function changetheme(which){
	//change:
	//	page title
	//	theme style sheet
	//	menu bar
	//	citation
	switch(which){
		case "apocalypse_world":
			//apocalypse world
			document.title = "Apocalypse World MC Helper";
			changestylesheet("apocalypse.css");
			break;
		case "dungeon_world":
			//dungeon world
			document.title = "Dungeon World GM Helper";
			changestylesheet("default.css");
			$( '#navigation' ).load( "./dungeon_world.html #nav" ); //load navigation	
			$( '#citation').load( "./dungeon_world.html #cite"); //load citation info
			break;
		case "the_sprawl":
			//the sprawl
			document.title = "The Sprawl MC Helper";
			changestylesheet("sprawl.css");
			break;
		case "monster_of_the_week":
			//the sprawl
			document.title = "Monster of the Week MC Helper";
			changestylesheet("moweek.css");			
			break;
		case "urban_shadows":
			//the sprawl
			document.title = "Urban Shadows MC Helper";
			//changestylesheet("usstyle.css");	
			break;
		default:
			//blank
	}
}

//-->
