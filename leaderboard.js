var gameInfo = function(){
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ]
}

// YOUR CODE HERE
function team(name, rank, wins, losses) {
  this.name = name;
  this.rank = rank;
  this.wins = wins;
  this.losses = losses;
}

var teamName = function(array){
 var teams = [];
 var uniqueTeams = [];
 for (i = 0; i < array.length; i++) {
   teams.push(array[i].home_team);
   teams.push(array[i].away_team);
 }
 for ( var i in teams ){
   if( uniqueTeams.indexOf(teams[i]) === -1){
     uniqueTeams.push(teams[i]);
   }
 }
 teams = [];
 for (i = 0; i < uniqueTeams.length; i++) {
   teams.push(new team(name = uniqueTeams[i]));
 }
 console.log(teams);
};

var teamObjects = teamName(gameInfo());

console.log(teamObjects);
