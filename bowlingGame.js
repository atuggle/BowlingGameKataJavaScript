function Game() {
    var rolls = new Array();

    this.roll = function roll(pins) {
        rolls.push(pins);
    }

    this.rollMultiple = function rollMultiple() {
        for (var i = 0; i < arguments.length; i++) {
            this.roll(arguments[i]);
        }
    }

    this.rollMany = function rollMany(turns, pins) {
        for (var i = 0; i < turns; i++) {
            this.roll(pins);
        }
    }

    this.calculateScore = function calculateScore() {
        var score = 0;
        var turn = 0;
        for (var frame = 0; frame < 10; frame++) {
            if (isSpare(turn)) {
                score += 10 + rolls[turn + 2];
                turn += 2
            } else if (isStrike(turn)) {
                score += 10 + rolls[turn + 1] + rolls[turn + 2];
                turn += 1
            } else {
                score += rolls[turn] + rolls[turn + 1];
                turn += 2;
            }
        }

        return score;
    }

    function isSpare(turn) {
        return rolls[turn] + rolls[turn + 1] == 10;
    }

    function isStrike(turn) {
        return rolls[turn] == 10;
    }
}