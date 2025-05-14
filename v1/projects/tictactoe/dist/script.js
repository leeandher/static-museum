//AI data object to be repopulated
var aiData;
//Array to stores data for user settings against AI
var againstAI = [false, 0];
//Initializing the gameBoard to empty
var gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
];
//All gameBoard ID combinations which win
var winningCombos = [
  [0,1,2], [3,4,5],
  [6,7,8], [0,3,6],
  [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

//Constructor for the player objects
function Player(isX, color, name) {
  this.isX = isX;
  this.color = color;
  this.name = name;
}
//Constructor for the AI's data object (mainly used for organization)
function BotData(emptyPos, enemyPos, aiPos) {
  //Stores board empty positions
  this.emptyPos = emptyPos;
  //Stores board enemy positions
  this.enemyPos = enemyPos;
  //Stores board AI positions
  this.aiPos = aiPos;
  //Enables board for next turn
  this.enableBoard = function() {
    return this.emptyPos.forEach(function(x) {
      $('#cell-' + x).removeClass('disabled');
      $('.btn-ingame').prop('disabled', false);
    });
  };
  //Plays selected move
  this.playMove = function(gameBoardId) {
    var currentBot = this; //Used for closure
    var timer = setInterval(function() {
      currentBot.enableBoard();
      $('#cell-' + gameBoardId).click();
      clearInterval(timer);
    }, 1000);  
  };
  //Identifies losing potential (returns lossLocation or false)
  this.checkDefense = function(winningCombo) {
    var copyCombo = winningCombo.slice();
    for (var i=0; i<copyCombo.length; i++) {
      if (gameBoard[copyCombo[i]] == player1.name) {
        copyCombo.splice(i,1);
        i--;
      }
    }
    if (gameBoard[copyCombo[0]] != player2.name && copyCombo.length === 1) return copyCombo[0];
    else return false;
  };
  //Identifies winning location (returns winLocation or true)
  this.checkOffense = function(winningCombo) {
    var copyCombo = winningCombo.slice();
    for (var i=0; i<copyCombo.length; i++) {
      if (gameBoard[copyCombo[i]] == player2.name) {
        copyCombo.splice(i,1);
        i--;
      }
    }
    if (gameBoard[copyCombo[0]] != player1.name && copyCombo.length === 1) return copyCombo[0];
    else return false;
  };
}

//Utility function to create toggle sets
function toggleBtnSet(set, active) {
  $(set).removeClass('enable');
  $(active).addClass('enable');
}

//Toggle switches for PvAI or PvP
$('.btn-versus').click(function() {
  toggleBtnSet('.btn-versus', this);
  switch ($(this).prop('id')) {
    case 'vsAI':
      againstAI[0] = true;
      $('.ifAI').removeClass('d-none');
      $('#pname-1').prop('placeholder', 'Player Name');
      $('#pname-2').prop('placeholder', 'AI Name');
      break;
    case 'vsPlayer':
      againstAI[0] = false;
      $('.ifAI').addClass('d-none');
      $('#pname-1').prop('placeholder', 'Player 1 Name');
      $('#pname-2').prop('placeholder', 'Player 2 Name');
      break;
  }
});
//Toggle switches for AI difficulty if PvAI is selected
$('.btn-difficulty').click(function() {
  toggleBtnSet('.btn-difficulty', this);
  switch ($(this).prop('id')) {
    case 'simpleAI':
      againstAI[1] = 1;
      break;
    case 'moderateAI':
      againstAI[1] = 2;
      break;
    case 'impossibleAI':
      againstAI[1] = 3;
      break;
  }
});
//Toggle switches for X/O character select
$('.btn-char').click(function(){
  if (!$(this).hasClass('enable')) $('.btn-char').toggleClass('enable');
});

//Control function to play an AI turn
function runAITurn() {
  //Analyze board
  getAIData(aiData);
  //Disables all buttons (to prevent player override)
  $('.cell').addClass('disabled');
  //Disable menu buttons
  $('.btn-ingame').prop('disabled', true);
  //Compute next move based on selected difficulty
  switch (againstAI[1]) {
    case 2:
      moderateAITurn(aiData);
      break;
    case 3:
      impossibleAITurn(aiData);
      break;
    default:
      simpleAITurn(aiData);
      break;
  }
}
//Swap and display current player. If PvAI, run the AI turn
function swapCurrPlayer() {
  currPlayer = currPlayer == player1 ? player2 : player1;
  displayCurrPlayer();
  if (againstAI[0] && currPlayer == player2) runAITurn();
}

//Display the current turn (or override text if present)
function displayCurrPlayer(override) {
  $('.display').css('color', currPlayer.color);
  var paddingText = currPlayer.name.slice(-1).toLowerCase()=='s' ? "' turn." : "'s turn.";
  $('.display').text(currPlayer.name + paddingText);
  $('.display').text(override);
}

//Animate and show symbol on board. If PvAI, gather new board state data
function addToGameBoard(boardId) {
  if (currPlayer.isX) {
    $('#cross-' + boardId).addClass('appear');
    $('#cross-' + boardId).css('background-color', currPlayer.color);
  } else {
    $('#nought-' + boardId).addClass('appear');
    $('#nought-' + boardId).css('border-color', currPlayer.color);
  }
  gameBoard[boardId] = currPlayer.name;
}

//Retreive and sort gameBoard data into empty, enemy and ai positions
function getAIData() {
  var emptyPos = []; var enemyPos = []; var aiPos = [];
  for (var i=0; i<gameBoard.length; i++) {
    if (!gameBoard[i].length) emptyPos.push(i);
    else if (gameBoard[i] == player1.name) enemyPos.push(i);
    else aiPos.push(i);
  }
  aiData = new BotData(emptyPos, enemyPos, aiPos);
}

//Complete a simple, random AI turn
function simpleAITurn(data) {
  var randPos = data.emptyPos[Math.floor(Math.random()*data.emptyPos.length)];
  data.playMove(randPos);
}

//Complete a moderate, defensive, but opportunity-observing AI turn
function moderateAITurn(data) {
  var randPos = data.emptyPos[Math.floor(Math.random()*data.emptyPos.length)];
  var defensivePos = -1; var offensivePos = -1;
  console.clear();
  for (var i=0; i<winningCombos.length; i++) {
    //If the human is about to win, identify their needed position
    if (typeof data.checkDefense(winningCombos[i]) == 'number') {
      defensivePos = data.checkDefense(winningCombos[i]);
    }
    //If the AI is about to win, identify its needed positions
    if (typeof data.checkOffense(winningCombos[i]) == 'number') {
      offensivePos = data.checkOffense(winningCombos[i]);
    }
  }
  //Play defensive but if there is an offensive play to win, take it
  var moderateAIMove = defensivePos >= 0 ? defensivePos : randPos;
  moderateAIMove = offensivePos >= 0 ? offensivePos : moderateAIMove;
  data.playMove(moderateAIMove);
}

//Complete a perfect AI turn
function impossibleAITurn(data) {
  //Declaring the Minimax AI Algorithm
  function recursePosCheck(board, player) {
    //Creates a new editable copy of the board
    var newBoard = board.slice();
    //Identifies the other player
    var altPlayer = player==player1 ? player2: player1;
    //Identifies all available spots on the board, populating their locations in availPos
    var availPos = [];
    newBoard.forEach(function(x,i) {if (x == '') availPos.push(i);});
    //Create an empty object: moves
    let moves = {};
    //Loops through every available position
    for (var i=0; i<availPos.length; i++) {
      //Assign the player name to the current i board location
      newBoard[availPos[i]] = player.name;
      //Check for the board's current state
      switch (checkForResult(newBoard, player, false)) {
        //NO RESULT CASE
        case -1:
          //If the new board placement does not cause a win, step into the next board iteration
          //Therefore, if there are 3 spaces left, and a play does not result in a win/tie...
          //...run this function again except with this newBoard (1 less possible space) and the alternate player 
          moves[availPos[i]] = recursePosCheck(newBoard, altPlayer)[1];
          break;
        //DRAW CASE
        case 0:
          //If the move causes a tie, it populate {moves} with {boardLocation: 0} where 0 is the location's 'score'
          moves[availPos[i]] = 0;
          break;
        //WIN CASE
        case 1:
          //If the move causes the player to win, it populates {moves} with {boardLocation: +10} or {boardLocation: -10}
          //If the 'Human' were to win, assign a -10 score
          //If the 'AI' were to win, assign a +10 score
          moves[availPos[i]] = player==player1 ? -10 : 10;
          break;
      }
      //Reset the board for the next location iteration
      newBoard[availPos[i]] = '';
    }
    //Once all the board states have been checked, choose a scoring function (scoreFunc)
    //If the turn was simulated was with the 'AI', maximize the scoring
    //If the turn was simulated was with the 'Human', minimize the scoring
    var scoreFunc = player==player1 ?
      function(a,b) {return Math.min(a,b);} :
      function(a,b) {return Math.max(a,b);};
    //The best score is calculated as per the scoring function
    var bestScore = Object.values(moves).reduce(scoreFunc);
    /*
      How it works:
      
    At every step, it will look for available/game-ending board-states and assign them values: 0 -> tie, +10 -> AI win, -10 -> Human win.
    If this function is run with the 'Human', it will return the bestScore as the LOWEST value, of all possible moves and
    If this function is run with the 'AI', it will return the bestScore as the HIGHEST value, of all possible moves.
    This is to simulate both players playing their ideal perfect rounds.
    
    The issue is that TicTacToe has branching moves. That is what the recursion covers.
    Let's say a game had 3 available spots, 1 of which is an instant win.
    2 are still available, so the function runs with the player on each individually.
    This happens the whole way down until there are no more spots left (draw). 
    
    At any given loop, the algorithm selects the best score to be the one that win's the selected player the game and passes that score up a level,
    however, the player that the score is passed to (up one level) is always the opposite, with the opposite idea of a bestScore!
    That player selects the score that is best for it, (now worst for the opponent) and passed THAT score up.
    
    While that means that a simulated Human, is also choosing the best move for IT to win, and worst for the AI, it doesn't matter!
    This is because the AI is forcasting all this at every turn it makes, 
    meaning it doesn't get passed up any higher, and it always has the final choice for best move, so it always plays perfectly!
    That is to say, if two of these bots played against one another, it would always result in a draw.
    But, since humans are fallable, this AI will only ever win, if it does not tie.
    */
    
    //Create an array of all the best scoring moves
    var bestIndeces = [];
    for (var i=0; i<Object.entries(moves).length; i++) {
      if (Object.entries(moves)[i][1]==bestScore) bestIndeces.push(Object.entries(moves)[i][0]);
    }
    //Randomly select a move from the best move set
    //NOTE: This is an optional, personal touch for a more varied, less algorithmic-feeling game but still unbeatable.
    return [bestIndeces[Math.floor(Math.random()*bestIndeces.length)], bestScore];
  }
  var calculatedPos = recursePosCheck(gameBoard, player2)[0];
  data.playMove(calculatedPos);
}

//Check for a completed game
function checkForResult(board, player, show) {
  for (var i=0; i<winningCombos.length; i++) {
    //Checks if the current player has won
    if (board[winningCombos[i][0]] == player.name &&
        board[winningCombos[i][1]] == player.name &&
        board[winningCombos[i][2]] == player.name) {
      if (show) {
        displayCurrPlayer(currPlayer.name + ' has won!');
        $('.cell').addClass('disabled');
        //Stylize each of the winning cells
        winningCombos[i].forEach(function(x) {
          $('#cell-' + x).css('background-color', player.color);
          $('#cross-' + x).css('background-color', 'rgba(25, 25, 25, 1)');
          $('#nought-' + x).css('border-color', 'rgba(25, 25, 25, 1)');
        });//SEE ABOUT MULTIPLE WIN HIGHLIGHTS LATER ONE
      }
      return 1;
    }
  }
  var cellsUsed = 0;
  board.forEach(function(x) {
    if (x.length>1) cellsUsed++;
  })
  //Checks if the game has tied
  if (cellsUsed == 9) {
    if (show) {
      $('.display').text('draw.');
      $('.display').css('color','rgba(235, 235, 235, 1)');
      $('.cell').addClass('disabled');
    }
    return 0;
  }
  //Continue game otherwise
  return -1;
}

//Apply the settings from the menu/?CHANGE AFTER DEBUGGING
function applyMenuSettings() {
  var color1 = $('#pcolor-1').css('background-color');
  var name1 = againstAI[0] ?  $('#pname-1').val() || 'Human' : $('#pname-1').val() || 'Player 1';
  var isX = $('#pinfo-1 .x-select').hasClass('enable');
  var color2 = $('#pcolor-2').css('background-color');
  var name2 = againstAI[0] ?  $('#pname-2').val() || 'TacTic Bot' : $('#pname-2').val() || 'Player 2';
  player1 = new Player(isX, color1, name1);
  player2 = new Player(!isX, color2, name2);
  currPlayer = player1.isX ? player1 : player2;
  if (againstAI[0] && currPlayer == player2) runAITurn();
  displayCurrPlayer();
}

$('.cell').click(function() {
  var cellId = $(this).prop('id').slice(-1);
  if ($(this).hasClass('disabled')) {return null;}
  else if (!gameBoard[cellId]) {
    addToGameBoard(cellId);
    $(this).addClass('disabled');
    if (checkForResult(gameBoard, currPlayer, true) === -1) swapCurrPlayer();
  }
});

//Keep Tic-Tac-Toe board square
$(window).resize(function() {
  $('.board').height($('.board').width());
});

//Apply custom colours
$('input[type="color"]').change(function() {
  var id = $(this).prev().prop('id').slice(-1);
  console.log('changing');
  $('#pcolor-' + id).css('background-color', $(this).val());
});

//Launch the game
$('form').submit(function(e){
  e.preventDefault();
  applyMenuSettings();
  $('#reset').click();
  $('.menu').addClass('d-none');
  $('.game').removeClass('d-none');
  $('.board').height($('.board').width());
});
//Restart the game
$('#reset').click(function() {
  gameBoard = gameBoard.map(x => '');
  $('.nought, .cross').removeClass('appear');
  $('.cell').removeClass('disabled');
  $('.cell').css('background-color', 'rgba(25, 25, 25, 1)');
  currPlayer = player1.isX ? player1 : player2;
  if (againstAI[0] && currPlayer == player2) runAITurn();
  displayCurrPlayer();
});
//Bring back settings/menu
$('#back').click(function() {
  $('#reset').click();
  $('.menu').removeClass('d-none');
  $('.game').addClass('d-none');
});