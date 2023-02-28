var audio = "on";

//-------------------------------------------
// Settings Popup
//-------------------------------------------

$("#settings").on("click", function () {
  $(".settings").fadeIn(150);
});

$(".close").on("click", function () {
  $(".settings").hide();
});

//-------------------------------------------
// Settings Toggles
//-------------------------------------------

// toggle audio on and off
$(".toggle-slider").on("click", function () {
  // if the toggle slider is clicked and has a class of .on then
  // remove the .on class and turn audio off
  if ($(".toggle-slider").hasClass("on")) {
    $(this).removeClass("on");
    audio = "off";

    // if the toggle slider is clicked and does not have a class of .on then
    // add the .on class and turn audio on
  } else if (!$(".toggle-slider").hasClass("on")) {
    $(this).addClass("on");
    audio = "on";
  }
});

//-------------------------------------------
// Runs
//-------------------------------------------

$(".runs-increase").on("click", function () {
  var runs = $(this).prev(".runs").text();
  runs = parseInt(runs);
  runs = runs + 1;
  $(this).prev(".runs").text(runs);
});

$(".runs-decrease").on("click", function () {
  var runs = $(this).siblings(".runs").text();
  runs = parseInt(runs);
  if (runs > 0) {
    runs = runs - 1;
    $(this).siblings(".runs").text(runs);
  }
});

//-------------------------------------------
// Innings
//-------------------------------------------

$(".inn-increase").on("click", function () {
  var inning = $(this).prev(".inn").children(".inning-count").text();
  inning = parseInt(inning);
  inning = inning + 1;
  $(this).prev(".inn").children(".inning-count").text(inning);
});

$(".inn-decrease").on("click", function () {
  var inning = $(this).siblings(".inn").children(".inning-count").text();

  if (inning > 1) {
    inning = parseInt(inning);
    inning = inning - 1;
  }

  $(this).siblings(".inn").children(".inning-count").text(inning);
});

//-------------------------------------------
// Outs
//-------------------------------------------

$(".outs .out").on("click", function () {
  $(this).addClass("active");

  if ($(this).text() == "3 Outs") {
    $(".outs .out").removeClass("active");
  }
});

//-------------------------------------------
// Bases
//-------------------------------------------

$(".base").on("click", function () {
  $(this).toggleClass("active");
});

//-------------------------------------------
// Dice Rolls
//-------------------------------------------

function die1() {
  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };

  // result roll: determine strike or ball
  die1Result = dice.roll();
  console.log("Die 1 result: " + die1Result);
}

function die2() {
  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };

  // result roll: determine strike or ball
  die2Result = dice.roll();
  console.log("Die 2 result: " + die2Result);
}

function die3() {
  var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };

  // result roll: determine strike or ball
  die3Result = dice.roll();
  console.log("Die 3 result: " + die3Result);
}

function die4() {
  var dice = {
    sides: 10,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  };

  // result roll: determine strike or ball
  die4Result = dice.roll();
  console.log("Die 4 result: " + die4Result);
}

function diceAudio() {
  $(".dice-roll-sound")[0].play();
}

$("#roll").on("click", function () {
  if (audio == "on") {
    // play dice rolling audio
    diceAudio();
  }

  // roll all the dice
  die1();
  die2();
  die3();
  die4();

  // output the results to the dice on the screen

  // clear die 1 html
  $(".die1 p").html("");

  // is the die 1 result 1-3 or 4-6? then show die
  if (die1Result > 0 && die1Result < 4) {
    $(".die1 p").hide().html('<i class="zmdi zmdi-circle-o"></i>').fadeIn();
  } else if (die1Result > 3 && die1Result < 7) {
    $(".die1 p").hide().html('<i class="zmdi zmdi-circle"></i>').fadeIn();
  }

  // reverse die 2 and die 3 if 2 is greater, show die 2 and die 3
  if (die2Result > die3Result) {
    $(".die2 p").hide().text(die3Result).fadeIn();
    $(".die3 p").hide().text(die2Result).fadeIn();
  } else {
    $(".die2 p").hide().text(die2Result).fadeIn();
    $(".die3 p").hide().text(die3Result).fadeIn();
  }

  // show die 4
  $(".die4 p").hide().text(die4Result).fadeIn();

  // check for a 10 on the last die, turn red if 10

  if (die4Result == 10) {
    $(".die4").css({
      "background-color": "red",
      color: "white"
    });
  } else {
    $(".die4").css({
      "background-color": "white",
      color: "black"
    });
  }

  if (
    ($(".die1 i").hasClass("zmdi-circle-o") &&
      die2Result == 1 &&
      die3Result == 2) ||
    ($(".die1 i").hasClass("zmdi-circle-o") &&
      die2Result == 2 &&
      die3Result == 1)
  ) {
    $(".die2, .die3").css({
      "background-color": "#ffd966"
    });
  } else if (
    ($(".die1 i").hasClass("zmdi-circle-o") &&
      die2Result == 3 &&
      die3Result == 6) ||
    ($(".die1 i").hasClass("zmdi-circle-o") &&
      die2Result == 6 &&
      die3Result == 3)
  ) {
    $(".die2, .die3").css({
      "background-color": "#ffd966"
    });
  } else if (
    ($(".die1 i").hasClass("zmdi-circle") &&
      die2Result == 1 &&
      die3Result == 5) ||
    ($(".die1 i").hasClass("zmdi-circle") && die2Result == 5 && die3Result == 1)
  ) {
    $(".die2, .die3").css({
      "background-color": "#ffd966"
    });
  } else if (
    (die2Result == 1 && die3Result == 6) ||
    (die2Result == 6 && die3Result == 1)
  ) {
    $(".die2, .die3").css({
      "background-color": "#ffd966"
    });
  } else if (
    (die2Result == 3 && die3Result == 4) ||
    (die2Result == 4 && die3Result == 3)
  ) {
    $(".die2, .die3").css({
      "background-color": "#ffd966"
    });
  } else if (die2Result == die3Result) {
    $(".die2, .die3").css({
      "background-color": "#ffd966"
    });
  } else {
    $(".die2, .die3").css({
      "background-color": "white",
      color: "black"
    });
  }
});