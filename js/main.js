/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/
let board;
let turn = '🐐';
let win;

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/
function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === '🐐' ? '🍄' : '🐐';
    win = getWinner();
    if(getWinner() == '🐐' || getWinner() == '🍄'){ //Si il y a un gagnant fait la fonction bravo sinon tie
        bravo()
    }
    else{
        tie()
    }
    render();
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    handleTurn() //Pour faire en sorte que au debut du match c'est le tour a quelqun et renitialise les couleurs
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `C'est une egalite!` : win ? `${win} gagne la partie!` : `C'est au tour de ${turn}`;
    };

init();
var link = document.cre

function bravo(){ //si gagnant
    document.getElementById("body").classList.add("Mathieu");//Met RGB
    document.getElementById('footer').classList.remove("Mathieu");//Enleve RGB
}
function tie(){ //si egalite ou pas de gagnant determine
    document.getElementById('body').classList.remove("Mathieu");//Enleve RGB
    document.getElementById('footer').classList.add("Mathieu");//Met RGB
}
