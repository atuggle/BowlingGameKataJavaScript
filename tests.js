var game;
module("Boling game module", {
    setup: function () {
        game = new Game();
    }
});

test("Roll a gutter game", function () {
    for (var i=0; i<20; i++)
        game.roll(0);

    equal(game.calculateScore(), 0, "Gutter game results in a score of 0");
});

test("Roll all ones", function () {
    for (var i = 0; i < 20; i++)
        game.roll(1);

    equal(game.calculateScore(), "20", "Roll all ones results in 20");
});

test("Roll one spare", function () {
    game.rollMultiple(5, 5, 3);
    for (var i = 0; i < 17; i++)
        game.roll(0);

    equal(game.calculateScore(), "16", "Roll one spare: all zeros except the following in order 5, 5, 3 should total 16");
});

test("Roll one strike", function () {
    game.rollMultiple(10, 3, 4);
    game.rollMany(16, 0);

    equal(game.calculateScore(), "24", "Roll one strike: then 3 and 4 followed by all zeros 24");
});

test("Roll perfect game", function () {
    game.rollMany(12, 10);

    equal(game.calculateScore(), "300", "Roll a perfect game");
});