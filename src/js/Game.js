import { setInterval } from 'core-js';
import GameBoard from './GameBoard';
import Target from './Target';

export default class Game {
    constructor(container) {
        this.container = container;
        this.board = new GameBoard();
        this.target = new Target();
        this.scores = {
            player: 0,
            goblin: 0,
        };
        this.interval = null;
    }

    start() {
        this.board.insertToDOM(this.container);
        this.board.boardEl.addEventListener('click', this.clickEvent.bind(this));
        this.interval = setInterval(() => {
            this.target.drawTarget(this.board.cells[this.generateTargetPosition()]);
            this.miss();
        }, 1000);
    }

    generateTargetPosition() {
        function getRandomIntInclusive(min, max) {
            const start = Math.ceil(min);
            const end = Math.floor(max);
            return Math.floor(Math.random() * (end - start)) + start;
        }
        const indx = getRandomIntInclusive(0, this.board.boardSize);
        return indx;
    }

    clickEvent(event) {
        if (event.target.classList.contains('target-img')) {
            this.hit();
            clearInterval(this.interval);
            this.target.drawTarget(this.board.cells[this.generateTargetPosition()]);
            this.interval = setInterval(() => {
                this.target.drawTarget(this.board.cells[this.generateTargetPosition()]);
                this.miss();
            }, 1000);
        }
    }

    miss() {
        this.scores.goblin += 1;
        this.checkScores();
    }

    hit() {
        this.scores.player += 1;
        this.checkScores();
    }

    checkScores() {
        if (this.scores.player === 5) {
            this.scores.player = 0;
            this.scores.goblin = 0;
            clearInterval(this.interval);
            alert('You WIN!');
        }
        if (this.scores.goblin === 5) {
            this.scores.player = 0;
            this.scores.goblin = 0;
            clearInterval(this.interval);
            alert('Goblin WIN :(');
        }
    }
}
