class GuessingGame {
    constructor() {
        this.goal = null;
        this.minValue = null;
        this.maxValue = null;

    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        return this.goal = Math.ceil((this.minValue + this.maxValue) / 2);
    }

    lower() {
        this.maxValue = this.goal;
    }

    greater() {
        this.minValue = this.goal;
    }
}


module.exports = GuessingGame;
