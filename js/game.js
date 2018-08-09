var Game = {
  next: null,
  board: null,
  cells: null,
  reset: null,
  play: null,
  stop: null,
  interval: null,
  init: function() {
    Board.createCells();
    Board.dynamicBoard();
    Game.board = Board.getBoard();
    Game.cells = Board.getCells();
    Game.next = document.getElementById('next');
    Game.reset = document.getElementById('reset');
    Game.play = document.getElementById('play');
    Game.stop = document.getElementById('stop');
    Game.stop.disabled = true;
    Game.save = document.getElementById("save");
    Game.load = document.getElementById("load");
  },

  start: function() {
    for (var i = 0; i < Game.cells.length; i++) {
      Game.cells[i].onclick = Cell.toggle;
    }
    Game.next.onclick = Board.nextStep;
    Game.play.onclick = Game.update;
    Game.stop.onclick = Game.stopfunc;
    Game.reset.onclick = Game.resete;
    Game.board5.onclick = Game.boardx5;
    Game.board10.onclick = Game.boardx10;
    Game.board15.onclick = Game.boardx15;
    Game.save.onclick = Game.savefunc;
    Game.load.onclick = Game.loadfunc;
  },

  update: function() {
    Game.interval = setInterval(Board.nextStep,1000);
    Game.play.disabled = true;
    Game.stop.disabled = false;
    Game.board5.disabled = false;
    Game.board10.disabled = false;
    Game.board15.disabled = false;
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
    Game.board15.disabled = false;

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
    Game.board15.disabled = false;
  },

  boardx15: function() {
    Board.rows = 15;
    Board.columns = 15;
    Game.init();
    Game.start();
    Game.play.disabled = false;
    Game.stop.disabled = false;
    Game.board5.disabled = false;
    Game.board10.disabled = false;
    Game.board15.disabled = true;
    Game.load.onclick = Game.loadfunc;
    Game.save.onclick = Game.savefunc;
  },
  resete: function() {
    Game.init();
    Game.start();
  },

  savefunc: function()
  {
    if(Game.stop.disabled == true)
    {
      localStorage.setItem("game", document.getElementsByClassName('game')[0].innerHTML);
      localStorage.setItem("columns", Board.columns);
      alert("Game saved.");
    }
    else {
      alert("You cannot save a game that haven't even started.");
    }
  },

  loadfunc: function()
  {
    if(Game.stop.disabled == true)
    {
      if(localStorage.getItem("game") == null)
      {
        alert("Save a game first to load a saved one.");
      }
      else {
        document.getElementsByClassName('game')[0].innerHTML = localStorage.getItem("game");
        Board.columns = localStorage.getItem("columns");
        Board.rows = Board.columns;
        alert("Game loaded.");
      }
    }
  }

};
