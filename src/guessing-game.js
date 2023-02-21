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
        this.temp = Math.floor((this.min + (this.max - this.min) / 2));
//        console.log(this.temp);
        return this.temp
    }

    lower() {
        this.max = this.temp - 1;
//        console.log(this.max);
    }

    greater() {
        this.min = this.temp + 1;
//        console.log(this.min);
    }
}

module.exports = GuessingGame;
