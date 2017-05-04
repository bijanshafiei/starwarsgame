// Global Variables

var characterChosen = false;
var defenderSelected = false;

// Stores  user's chosen character
var character = [];

// Stores  user's chosen defendter
var defender = [];





// Character Objects
var darthVader = {
	hp: 160,
	ap: 8,
}

var obiWanKenobi = {
	hp: 140,
	ap: 6,
}

var bobaFett = {
	hp: 120,
	ap: 5,	
}

var lukeSkywalker = {
	hp: 100,
	ap: 7,
}


// Main game functions
$(document).ready( function() {

	$("#vaderCharacter").on("click", function () {
    alert("Darth Vader is selected");

    });

});