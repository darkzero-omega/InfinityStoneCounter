//-- Pseudo Coding --//
//-- A game with 4 crytals and a random result --//
//-- every gem neeeds to have a random number between 1 and 15 --//
//-- a new random number should generate every time we win or lose --//
//-- when clickng any crystal, it should be adding with the previous result --//
//-- Untilit equals the Random Result --//
//-- if it is greater than the Random Reuslt, the weincrement a loss --//
//-- if it IS equal, then we increment a win counter--//

//$(".crystals").empty();

var targetNum;
var winCounter = 0;
var lossCounter = 0;
var resetButton;
var currentCounter;

$(document).ready(function () {

    var result = $("#result");
    var current = $("#current");
    var wins = $("#wins");
    var losses = $("#losses");
    

    function gameStart() {
        targetNum = Math.floor(Math.random() * 99) + 30; // -- hoisting --//
        currentCounter = 0;
        console.log(targetNum);
        //$("#result").html("Target Number: " + targetNum);
        result.text("Target Number: " + targetNum);
        current.text("Current count: " + currentCounter)
        wins.text("Wins: " + winCounter);
        losses.text("Losses:" + lossCounter);

        for (var i = 0; i <= 4; i++) {
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

    function gameReset() {
        var currentCounter = 0;
        result.text("Target Number: " + targetNum);
        current.text("Current count: " + currentCounter)
        targetNum = Math.floor(Math.random() * 99) + 30; // -- hoisting --//
        console.log(targetNum);

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

    
    $(".increaseScore").each(function () {
        var random = Math.floor(Math.random() * 15) + 1;
        $(this).attr("data-random", random);
    })
    
    $(".increaseScore").on("click", function () {
        var num = parseInt($(this).attr("data-random"));
        console.log(num);
        currentCounter += num;
        current.text("Current count: " + currentCounter);
        //console.log(currentCounter);
        if (currentCounter > targetNum) {
            console.log("You Lose!");
            lossCounter++;
            losses.text("Losses:" + lossCounter);
            //gameReset();
            gameStart();
        } else if (currentCounter === targetNum) {
            console.log("You win");
            winCounter++;
            wins.text("Wins: " + winCounter)
            //gameReset();
            gameStart();
        }
        //console.log($(this).attr("data-random"));
        
        //resetButton = document.getElementById("resetButton");
        //resetButton.addEventListener("click")    
    });
    gameStart()
})