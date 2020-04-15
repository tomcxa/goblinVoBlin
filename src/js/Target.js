export default class Target {
    constructor() {
        this.targetEl = document.createElement('img');
        this.position = null;

        this.createTarget();
    }

    createTarget() {
        this.targetEl.setAttribute('src', 'img/goblin.png');
        this.targetEl.classList.add('target-img');
    }

    drawTarget(parentEl) {
        if (this.position) {
            this.position.getElementsByClassName('target-img')[0].remove();
        }
        this.position = parentEl;
        parentEl.appendChild(this.targetEl);
    }
}
