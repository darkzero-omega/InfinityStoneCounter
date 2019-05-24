//-- Speudo Coding --//
//-- A game with 4 crytals and a random result --//
//-- every gem neeeds to have a random number between 1 and 15 --//
//-- a new random number should generate every time we win or lose --//
//-- when clickng any crystal, it should be adding with the previous result --//
//-- Untilit equals the Random Result --//
//-- if it is greater than the Random Reuslt, the weincrement a loss --//
//-- if it IS equal, then we increment a win counter--//




var random_result;
var lost = 0;
var win = 0;
var previous = 0;
var resetButton;

var resetAndStart = function () {
    //$(".crystals").empty();
    random_result = Math.floor(Math.random() * 99) + 30; // -- hoisting --//

    console.log(random_result);


    $("#result").html("Target Number: " + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 15) + 1;
        console.log(random);

        var crystals = $("<div>");
        crystals.attr({
            "class": "crystals",
            "data-random": random

        });

        $(".crystals").append(crystals);

    }
}

resetAndStart()

$(".increaseScore").each(function () {
    var random = Math.floor(Math.random() * 15) + 1;
    $(this).attr("data-random", random);
})

$(".increaseScore").on("click", function () {
    var num = parseInt($(this).attr("data-random"));
    previous += num;
    console.log(previous);
    if (previous > random_result) {
        console.log("You Lose!");
        lost--;
        $("#lost").html("Losses:" + lost);
        resetAndStart();
    } else if (previous === random_result) {
        console.log("You Win");

        win++;
        $("#win").html("Wins:" + win);
        resetAndStart();
    }
    console.log($(this).attr("data-random"));

    //resetButton = document.getElementById("resetButton");
    //resetButton.addEventListener("click")


});