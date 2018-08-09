var play = function(){
  var liAlives = Board.getCells();
  Board.updateCells(liAlives);
}

var init = function() {
  Game.board5 = document.getElementById('b5');
  Game.board5.disabled = true;
  Game.board10 = document.getElementById('b10');
  Game.board10.disabled = false;
  Game.board20 = document.getElementById('b20');
  Game.board20.disabled = false;
  Game.init();
  Game.start();
}

var stop = function() {
 Game.stopfunc();
}

var board5 = function() {
  Game.board5();
}
var board10 = function() {
  Game.board10();
}
var board20 = function() {
  Game.board20();
}

window.onload = init;
