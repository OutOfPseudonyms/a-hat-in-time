function VideoGame(videoGameTitle, releaseDate, developer, playstyle) {
  this.vGTitle = videoGameTitle;
  this.releaseyear = releaseDate;
  this.dv = developer;
  this.plystle = playstyle;
  videoGameList.push(this);
}

VideoGame.prototype.startGame = function() {
  return "You are booting up " + this.vGTitle + ".";
}

VideoGame.prototype.crash = function() {
  return this.vGTitle + " has crashed.";
}

Developer.prototype.diss = function() {
  return this.dvName + " sucks.";
}

function Developer(developerName, developerCountry) {
  this.dvName = developerName;
  this.dvCountry = developerCountry;
}

function Playstyle(gameGenre, gameMode) {
  this.genre = gameGenre;
  this.modes = gameMode;
}

// User Interface Logic

let videoGameList = [];

let aHatInTime = new VideoGame("A Hat In Time", 2017, new Developer("Gears for Breakfast", "Denmark"), new Playstyle("Platform, action-adventure", "Single-player, multiplayer"));

let kingdomHearts = new VideoGame("Kingdom Hearts", 2002, new Developer("Square", "Japan"), new Playstyle("Action-roleplaying", "Single-player"));

let cyberpunk2077 = new VideoGame("CyberPunk 2077", 2020, new Developer("CD Project Red", "Poland"), new Playstyle("mfkfe", "Single-player"));

for (let index = 0; index < videoGameList.length; index += 1) {
  console.log(videoGameList[index].startGame())
}

for (let index = 0; index < videoGameList.length; index += 1) {
  console.log(videoGameList[index].dv.diss())
}

// console.log(videoGameList);
// console.log(videoGameList[1].vGTitle);
// console.log(videoGameList[0].dv);
// console.log(videoGameList[2].dv.dvName);
// console.log(videoGameList[0].dv.dvName);
// console.log(videoGameList[1].plystle.mode);
// console.log(videoGameList[2].startGame());
// console.log(videoGameList[2].crash());
// console.log(videoGameList[2].dv.diss());

// create a loop that will go through the entire videoGameList array and call startGame() on each game in the array
// once you have that working add diss()

// index is 1
// is 1 less than or equal to 10? - true
// "do something" is run
// add 1 to index
// is 2 less than or equal to 10? - true
// "do something" is run
// add 1 to index
// is 3 less than or equal to 10? - true
// "do something" is run
// add 1 to index
// is 4 less than or equal to 10? - true
// "do something" is run
// add 1 to index
// is 5 less than or equal to 10? - true
// "do something" is run
// add 1 to index
// is 6 less than or equal to 10? - true
// "do something" is run
// add 1 to index
// .......
// It will run over and over until index is not <= 10