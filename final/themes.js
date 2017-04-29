<!--//
//this code handles the theme switcher

function changestylesheet(which){ 
	$( '#theme' ).attr({href : which}); //changes the linked stylesheet 
}	

function changetheme(which){
	switch(which){
		case "dungeon_world":
			//dungeon world
			document.title = "Dungeon World GM Helper";
			$( '#navigation' ).load( "./dungeon_world.html #nav" ); //load navigation	
			$( '#citation' ).load( "./dungeon_world.html #cite"); //load citation info
			$( '#showcite' ).load( "./dungeon_world.html #cite"); //load citation info			
			break;
		case "uncharted_worlds":
			//uncharted worlds
			document.title = "Uncharted Worlds GM Helper";
			$( '#navigation' ).load( "./uncharted_worlds.html #nav" ); //load navigation	
			$( '#citation').load( "./uncharted_worlds.html #cite"); //load citation info	
			$( '#showcite').load( "./uncharted_worlds.html #cite"); //load citation info			
			break;
		case "world_peril":
			//worlds in peril
			document.title = "Worlds in Peril EIC Helper";
			$( '#navigation' ).load( "./worlds_peril.html #nav" ); //load navigation	
			$( '#citation').load( "./worlds_peril.html #cite"); //load citation info	
			$( '#showcite').load( "./worlds_peril.html #cite"); //load citation info			
			break;		
		case "default":
			changestylesheet("default.css");	
			break;			
		case "simple":
			changestylesheet("apocalypse.css");	
			break;
		case "notebook":
			changestylesheet("monster.css");	
			break;				
		case "cosmic":
			changestylesheet("uncharted.css");	
			break;	
		case "cybergrid":
			changestylesheet("sprawl.css");	
			break;							
		default:
			//blank
	}
	$( '#pagetitle' ).html(document.title);
}

//-->
