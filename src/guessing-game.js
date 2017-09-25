class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.cMin = min;
        this.cMax = max;
    }

    guess() {
        return Math.ceil((this.cMin + this.cMax) / 2);
    }

    lower() {
        this.setRange(this.cMin , Math.ceil((this.cMin + this.cMax) / 2));
    }

    greater() {
        this.setRange(Math.ceil((this.cMin + this.cMax) / 2) , this.cMax);
    }
}

module.exports = GuessingGame;
