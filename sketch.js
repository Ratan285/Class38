var backGroundImage, playerCount, gameState = 0;
var database, form, player, game;
var canvas;

function setup() {
  canvas = createCanvas(400, 400);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}
function draw(){

}