var play = function(){
  var liAlives = Board.getCells();
  Board.updateCells(liAlives);
};

var init = function() {
  Game.board5 = document.getElementById('b5');
  Game.board5.disabled = true;
  Game.board10 = document.getElementById('b10');
  Game.board10.disabled = false;
  Game.board15 = document.getElementById('b15');
  Game.board15.disabled = false;
  Game.init();
  Game.start();
};

var stop = function() {
 Game.stopfunc();
};

var board5 = function() {
  Game.board5();
};

var board10 = function() {
  Game.board10();
};

var board15 = function() {
  Game.board15();
};

var reset = function() {
  Game.init();
  Game.start();
  Game.play.disabled = false;
  Game.stop.disabled = true;
};

var load = function() {
  Game.loadfunc();
};

var save = function() {
  Game.savefunc();
};
window.onload = init;
