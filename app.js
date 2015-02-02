$(document).on('ready',function(){

var competitors = [];



// Inputing the team names without Dulpicates in the competitors array
$('form').on('submit',function(e){
	e.preventDefault();
	console.log("it's working!");
	var teamname = $('#teamname').val();
	var score = 0;
	function hasDuplicates(){
		var teamname = $('#teamname').val();
		console.log(teamname);
		if (jQuery.inArray(teamname, competitors) === -1){
			competitors.push(teamname);
			$('#teamnames').append('<a class= "list-group-item">' + teamname + ' Score: ' + score + '</a>');
				console.log("poo");
		}
	else { alert("Pick another team name!")};
	}
	hasDuplicates();

});
// ending of the inputing the Team Name functions

// Starting the Game!

$('#startgame').on('click', function(g) {
	g.preventDefault();
	console.log("Game Starts!");
});








});