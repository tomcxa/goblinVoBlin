// eslint-disable-next-line no-console
import Game from './Game';

const gameContainer = document.querySelector('.game-container');
const game = new Game(gameContainer);
game.start();
