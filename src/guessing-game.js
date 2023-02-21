class GuessingGame {
    constructor() {
        this.min;
        this.max;
        this.temp;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
//        if (this.min >= this.max) {
//            return this.min;
//        }
        this.temp = Math.ceil((this.min + (this.max - this.min) / 2));
//        console.log(this.temp);
        return this.temp
    }

    lower() {
        this.max = this.temp;
//        console.log(this.max);
    }

    greater() {
        this.min = this.temp;
//        console.log(this.min);
    }
}

module.exports = GuessingGame;
