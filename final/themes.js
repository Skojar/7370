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
	var keep = $( '#keeptheme' ).is(':checked');
	switch(which){
		case "apocalypse_world":
			//apocalypse world
			document.title = "Apocalypse World MC Helper";
			$( '#navigation' ).load( "./apocalypse_world.html #nav" ); //load navigation	
			$( '#citation').load( "./apocalypse_world.html #cite"); //load citation info			
			if(!keep) changestylesheet("apocalypse.css");
			break;
		case "dungeon_world":
			//dungeon world
			document.title = "Dungeon World GM Helper";
			if(!keep) changestylesheet("dungeon.css");
			$( '#navigation' ).load( "./dungeon_world.html #nav" ); //load navigation	
			$( '#citation').load( "./dungeon_world.html #cite"); //load citation info
			break;
		case "the_sprawl":
			//the sprawl
			document.title = "The Sprawl MC Helper";
			if(!keep) changestylesheet("sprawl.css");
			break;
		case "monster_of_the_week":
			//the sprawl
			document.title = "Monster of the Week Keeper Helper";
			$( '#navigation' ).load( "./monster_week.html #nav" ); //load navigation	
			$( '#citation').load( "./monster_week.html #cite"); //load citation info				
			if(!keep) changestylesheet("monster.css");			
			break;
		case "uncharted_worlds":
			//the sprawl
			document.title = "Uncharted Worlds GM Helper";
			$( '#navigation' ).load( "./uncharted_worlds.html #nav" ); //load navigation	
			$( '#citation').load( "./uncharted_worlds.html #cite"); //load citation info				
			if(!keep) changestylesheet("uncharted.css");	
			break;
		default:
			//blank
	}
	$( '#pagetitle' ).html(document.title);
}

//-->
