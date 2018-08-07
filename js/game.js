var Game = {
  next: null,
  board: null,
  cells: null,
  play: null,
  stop: null,
  interval: null,
  init: function() {
    Board.createCells();
    Game.board = Board.getBoard();
    Game.cells = Board.getCells();
    Game.next = document.getElementById('next');
    Game.play = document.getElementById('play');
    Game.stop = document.getElementById('stop');
    Game.stop.disabled = true;
  },

  start: function() {
    for (var i = 0; i < Game.cells.length; i++) {
      Game.cells[i].onclick = Cell.toggle;
    }
    Game.next.onclick = Board.nextStep;
    Game.play.onclick = Game.update;
    Game.stop.onclick = Game.stopfunc;
  },

  update: function() {
    Game.interval = setInterval(Board.nextStep,1000);
    Game.play.disabled = true;
    Game.stop.disabled = false;
  },

  stopfunc: function() {
    clearInterval(Game.interval)
    Game.play.disabled = false;
    Game.stop.disabled = true;
  }
};
