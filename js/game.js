var Game = {
  next: null,
  board: null,
  cells: null,
  play: null,
  stop: null,
  interval: null,
  init: function() {
    Board.createCells();
    Board.dynamicBoard();
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
    Game.board5.onclick = Game.boardx5;
    Game.board10.onclick = Game.boardx10;
    Game.board20.onclick = Game.boardx20;
  },

  update: function() {
    Game.interval = setInterval(Board.nextStep,1000);
    Game.play.disabled = true;
    Game.stop.disabled = false;
    Game.board5.disabled = false;
    Game.board10.disabled = false;
    Game.board20.disabled = false;
  },

  stopfunc: function() {
    clearInterval(Game.interval)
    Game.play.disabled = false;
    Game.stop.disabled = true;
  },

  boardx5: function() {
    Board.rows = 5;
    Board.columns =5;
    Game.init();
    Game.start();
    Game.play.disabled = false;
    Game.stop.disabled = false;
    Game.board5.disabled = true;
    Game.board10.disabled = false;
    Game.board20.disabled = false;

  },

  boardx10: function() {
    Board.rows = 10;
    Board.columns =10;
    Game.init();
    Game.start();
    Game.play.disabled = false;
    Game.stop.disabled = false;
    Game.board5.disabled = false;
    Game.board10.disabled = true;
    Game.board20.disabled = false;
  },

  boardx20: function() {
    Board.rows = 15;
    Board.columns = 15;
    Game.init();
    Game.start();
    Game.play.disabled = false;
    Game.stop.disabled = false;
    Game.board5.disabled = false;
    Game.board10.disabled = false;
    Game.board20.disabled = true;
  }
};
