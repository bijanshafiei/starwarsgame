// Global Variables

var characterChosen = false;
var defenderSelected = false;
var currentDefender =false;
var wincount = 0;

// Stores  user's chosen character
var character = [];

// Stores  user's chosen defendter
var defender = [];





// Character Objects

var characters = {
	char1:{
		name: "Darth-Vader",
		healthPoints: 160,
		attack: 8,
		
	},
	char22:{
		name: "Obi-wan",
		healthPoints: 140,
		attack: 6,
		
	},
	char3:{
		name: "Boba-Fett",
		healthPoints: 120,
		attack: 5,
	},
	char4:{
		name: "Luke",
		healthPoints: 100,
		attack: 7,
	}
}

// Main game functions
$(document).ready( function() {

	// Determines which character has been clicked
	$("#vaderCharacter").on("click", function () {

		console.log("Darth Vader is selected")
    

    	characterChosen = true;
		character = characters.char1;
		$("charactersAvailable").hide();
		
		



    });

});