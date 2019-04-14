/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying;

init();

var lastDice;

function init (){
scores = [0,0];
roundScores = 0;
activePlayer = 0;
gamePlaying = true;
    
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';
    
    document.querySelector('#name-0').textContent = 'Player 1!';
document.querySelector('#name-1').textContent = 'Player 2!';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}





function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScores = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
    }



document.querySelector('.btn-roll').addEventListener('click', () => {
    if(gamePlaying){
    var dice = Math.floor(Math.random() * 6) +1;
    var diceDOM = document.querySelector('.dice');
    
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    if(lastDice === 6 && dice === 6){
        scores[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
        nextPlayer();
    } else if( dice !== 1){
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
        
    } else {
        nextPlayer();
    }
        lastDice = dice;
    }
    });

document.querySelector('.btn-hold').addEventListener('click', () =>{
    if(gamePlaying){
    scores[activePlayer] += roundScores;
    
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    var input = document.querySelector('.final-score').value;
        var winningScore;
        
    if(input){
        winningScore = input;
    } else {
        winningScore = 20;
    }
        
    if(scores[activePlayer] >= winningScore)
    { document.querySelector('#name-' + activePlayer).textContent = 'Winner!'; 
      document.querySelector('.dice').style.display= 'none';
     document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
     gamePlaying = false;
    } else { 
        nextPlayer(); }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);
    




   /*
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent= '0';
document.getElementById('score-1').textContent= '0';
document.getElementById('current-0').textContent= '0';
document.getElementById('current-1').textContent= '0';
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');*/

//document.querySelector('#current-' + activePlayer).textContent = dice; //set 
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent; //get
//console.log(x);