console.log("4");

var play = function(){
  var liAlives = Board.getCells();
  Board.updateCells(liAlives);
}

var init = function() {
  Game.init();
  Game.start();
}

var stop = function() {
Game.stopfunc(); 
}
window.onload = init;
