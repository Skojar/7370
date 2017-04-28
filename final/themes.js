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
			$( '#navigation' ).load( "./apocalypse_world.html #nav" ); //load navigation	
			$( '#citation').load( "./apocalypse_world.html #cite"); //load citation info			
			changestylesheet("apocalypse.css");
			break;
		case "dungeon_world":
			//dungeon world
			document.title = "Dungeon World GM Helper";
			changestylesheet("dungeon.css");
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
			document.title = "Monster of the Week Keeper Helper";
			changestylesheet("monster.css");			
			break;
		case "uncharted_worlds":
			//the sprawl
			document.title = "Uncharted Worlds GM Helper";
			$( '#navigation' ).load( "./uncharted_worlds.html #nav" ); //load navigation	
			$( '#citation').load( "./uncharted_worlds.html #cite"); //load citation info				
			changestylesheet("uncharted.css");	
			break;
		default:
			//blank
	}
	$( '#pagetitle' ).html(document.title);
}

//-->
