//Preset random possibilites
var allInfo = [
  [
    "Are you a loan, because you're gaining my interest.",
    "Are you Little Caesars? Because you're hot and I'm ready.",
    "Have you heard about Pluto? That's messed up, right?",
    "The titanic is my favourite icebreaker.",
    "Are you a beaver? Because dam.",

    "Do you have an ugly boyfriend.\n No? Want one?",
    "If you were a tree, you'd be a good tree.",
    "So I was backpacking across Western Europe...",
    "I have a dog and she licks faces, c'mere.",
    "Girl I put the STD in stud, all I need is U.",

    "What's your highest CP pokemon?",
    "I'm challenger in League of Legends.",
    "Slow night tonight... I guess you'll do.",
    "Good things come in small, unattractive packages.",
    "Are you stairs, because you take my breath away.",

    "I see you got teeth, I like that in a girl.",
    "I'm trash, you should take me out.",
    "On a scale of 1-10, you're a 9 and I'm the one you need.",
    "Are you french? Because maDAMN.",
    "If you were a fruit, you'd be a FINEapple.",

    "My love for you burns with the intensity of a thousand white suns.",
    "I don't like sand. It's coarse and rough and irritating and it gets everywhere.",
    "Hey, this is going to sound really cheesy, but... \n Mozzarella.",
    "Help, I've fallen for you and I can't get up.",
    "Lower your expectations and let's begin.",
  ], //Quotes
  [
    "Chris Rock",
    "Amy Schumer",
    "That Arrogant Little Shit",
    "The Real Spiderman",
    "The Ghost of Christmas Past",

    "Your Lab Partner",
    "Danny Phantom",
    "That One Guy from that One Class",
    "A Mistake Waiting to Happen",
    "The Fake Spiderman",

    "Michael Scott",
    "A Lonely Tree",
    "The Guy on the Bus",
    "Your Future Husband",
    "Real-life Waifu",

    "Your Pal for Grade 6",
    "Drake Bell",
    "Barrack Obama",
    "Tesla Edison",
    "Stevie Wonder",

    "Waddles the Pig",
    "Christian Bale of Hay",
    "Santa Claus",
    "Clifford the Big Red Dog",
    "Ashley Madison",
  ], //Users
  [
    "Candyland",
    "Gotham City",
    "My Mom's House",
    "The Local Elementary School",
    "Kinda far but not too far",

    "Hell's Kitchen",
    "In the Dining Room with the Candlestick",
    "Under the 401",
    "Walmart (Entertainment Section)",
    "The Nearest Hospital",

    "Starbucks",
    "A&W - Home of A&W Root Beer",
    "The American Idol Waiting Room",
    "Atop Mount Everest",
    "Boulevard of Broken Dreams",

    "Bikini Bottom",
    "At the Nickelback concert",
    "Heaven",
    "Find me on SnapMaps",
    "Sensei's Dojo",

    "Chuck E. Cheese",
    "A Hipster Cafe",
    "Washington, M.C.",
    "Home with the Kiddos",
    "In the Men's Room",
  ], //Locations
  [
    "linear-gradient(to right, #1e3c72, #2a5298, #ff7e5f)", //Blue, white, orange
    "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)", //Night sky
    "linear-gradient(45deg, #cb2d3e, #ef473a)", //Red, to light
    "linear-gradient(to bottom, #ff9966, #ff5e62, #4b79a1)", //Sunset, blue sky
    "radial-gradient(circle at center, #fc00ff, #00dbde)", //Rainbow mist

    "linear-gradient(to bottom, #2980b9, #ffffff)", //Blue, white gradient
    "linear-gradient(135deg, #f8b195, #f67280, #c06c84, #6c5b7b, #355c7d)", //Pastel, rainbow
    "linear-gradient(to top, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff)", //Rainbow streaks
    "linear-gradient(to left, #134e5e, #71b280)", //Green
    "linear-gradient(-45deg, #0099f7, #42b883)", //Blue, green

    "linear-gradient(45deg, #e74c3c, #3498db, #ffffff)", //Red, blue, stars
    "linear-gradient(to bottom, #8e0e00, #1f1c18)", //Dark red
    "linear-gradient(to top left, #f7971e, #3498db)", //Yellow, blue
    "radial-gradient(circle at top right, #f9d423, #ff4e50)", //Yellow lens flare
    "linear-gradient(to bottom, #bdc3c7, #2c3e50)", //Sidewalks

    "linear-gradient(to bottom, #232526, #414345)", //Traffic jam
    "linear-gradient(to bottom, #1e3c72, #2a5298)", //City
    "linear-gradient(circle at bottom right, #2980b9, #6dd5fa, #ffffff)", //River
    "linear-gradient(to bottom, #232526, #414345, #000000)", //Dark
    "linear-gradient(70deg, #fc466b, #3f5efb)", //Neon lights

    "linear-gradient(-60deg, #ff758c, #ff7eb3)", //Pink streaks
    "radial-gradient(ellipse at center, #000000, #434343, #000000)", //Space
    "linear-gradient(to bottom, #232526, #414345, #656565)", //Highway
    "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)", //Night sky
    "linear-gradient(to top right, #616161, #9bc5c3)", //Rainy window
  ], //Backgrounds
];
//Constructor for saving current random setup
var saveInfo = function (quote, user, location, bg) {
  this.quote = quote;
  this.user = user;
  this.location = location;
  this.bg = bg;
};
//Initialize array of liked quotes
var liked = [];
//Initialize array of disliked quotes
var deleted = [];

//Generate a random entry from an array
function genRand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
//Generate new quote set
function newQuote() {
  if (allInfo[0].length > 0) {
    //If the user hasn't disliked all preset quotes
    var randInt = Math.ceil(Math.random() * 100);
    $(".default .quote").text(genRand(allInfo[0]));
    $(".default .user").html(
      genRand(allInfo[1]) + "<span>, " + randInt + "</span>"
    );
    $(".default .location").text(genRand(allInfo[2]));
    $(".default .content").css("background-image", genRand(allInfo[3]));
  } else {
    //If the user has disliked all preset quotes
    $(".default .quote").text("I'm all outta suggestions");
    $(".default .user").text("Nothing's good enough for ya huh?");
    $(".default .location").text("Find your own Date, nerd");
    $(".default .content").css("background-image", "");
  }
}

//Action button responses
$(".refresh").on("click", function (e) {
  e.preventDefault();
  newQuote();
});
$(".dislike").on("click", function (e) {
  e.preventDefault();
  if (allInfo[0].length > 0) {
    var index = allInfo[0].indexOf($(".default .quote").text());
    deleted.push(allInfo[0].splice(index, 1)[0]);
    newQuote();
  }
});
$(".like").on("click", function (e) {
  e.preventDefault();
  var currentLike = new saveInfo(
    $(".default .quote").text(),
    $(".default .user").html(),
    $(".default .location").text(),
    $(".default .content").css("background-image")
  );
  liked.push(currentLike);
});
$(".tweet").on("click", function (e) {
  e.preventDefault();
  window.open(
    'https://twitter.com/intent/tweet?hashtags=tinDirectory&text="' +
      $(".default .quote").text() +
      '" - ' +
      $(".default .user").text() +
      " - " +
      $(".default .location").text()
  );
});

//Inital like index to display
var toStart = 0;
//Display like
function dispLike(ind) {
  $(".overlay .quote").text(liked[ind].quote);
  $(".overlay .user").html(liked[ind].user);
  $(".overlay .location").html(liked[ind].location);
  $(".overlay .content").css("background-image", liked[ind].bg);
}
//Toggle overlay
$(".screen-toggle").on("click", function () {
  //Toggle overlay
  $(this).toggleClass("fa-heart fa-times fa-fw");
  $(".overlay").toggleClass("hide");
  if (liked.length > 0) {
    //Display liked profiles if available
    dispLike(toStart);
  }
  if (liked.length < 2) {
    //Don't display navigation buttons if only one like
    $(".select").toggleClass("hide");
  }
});
//Previous liked button control
$(".prev").click(function () {
  toStart--;
  if (toStart <= 0) {
    $(this).addClass("fade");
    $(this).removeClass("show");
    toStart = 0;
  }
  dispLike(toStart);
  $(".next").addClass("show");
  $(".next").removeClass("fade");
});
//Next liked button control
$(".next").click(function () {
  toStart++;
  if (toStart >= liked.length - 1) {
    $(this).addClass("fade");
    $(this).removeClass("show");
    toStart = liked.length - 1;
  }
  dispLike(toStart);
  $(".prev").addClass("show");
  $(".prev").removeClass("fade");
});

//On load, generate a new quote
$(document).ready(function () {
  newQuote();
});
