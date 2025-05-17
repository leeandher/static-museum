function arrToList(arr) {
  if (arr.length !== 1) {
    arr[arr.length - 1] = "and " + arr[arr.length - 1];
  }
  return arr.join(", ");
}

var Project = function (
  title,
  date,
  desc,
  languages,
  additional,
  concepts,
  linkUrl
) {
  this.title = title;
  this.date = date;
  this.desc = desc;
  this.languages = languages;
  this.additional = additional;
  this.concepts = concepts;
  this.bg = 'url("../resources/images/projects/' + linkUrl + '.JPG")';
  this.link = linkUrl;
};

function applyProject(proj, order) {
  $("#directory a:nth-child(" + (order + 1) + ")").text(proj.title);
  var projId = "#proj-" + order;
  $(projId + " .proj-title").text(proj.title);
  $(projId + " .live").prop("href", "./" + proj.link);
  $(projId + " .source").prop(
    "href",
    "https://github.com/leeandher/leeandher.github.io/tree/master/projects/" +
      proj.link
  );
  $(projId + " .proj-date").text(proj.date);
  $(projId + " .proj-desc").html(proj.desc);
  $(projId + " .languages").text(arrToList(proj.languages));
  $(projId + " .additional").text(arrToList(proj.additional));
  $(projId + " .concepts").text(arrToList(proj.concepts));
  $(projId + " .proj-bg").css("background-image", proj.bg);
}

var projectArr = [
  new Project(
    "Random Quote Machine",
    "February 04, 2018",
    "Since I'm too awkward to use the real Tinder, I made this re-creation to test out my basic front-end skills. It cycles through lame pick-up lines, silly names, weird locations and some background images to create replica Tinder profiles. You can even see all your matches by checking out the LikeList (the heart in the top left).",
    ["HTML5", "CSS3", "JavaScript"],
    ["Bootstrap 4", "SCSS", "JQuery"],
    ["Design Re-creation"],
    "quotes"
  ),
  new Project(
    "Wikipedia Viewer",
    "February 07, 2018",
    "Even though Wikipedia might be humanities greatest collaborations (excluding Space Jam (1996)), I still think the website itself could use some sprucing up. This viewer app accesses the Wikipedia Query API to display up to 20 results for a cleaner, and more refined viewing experience. Click on any of your search results for even more information!",
    ["HTML5", "CSS3", "JavaScript"],
    ["JSON APIs", "Bootstrap 4", "Haml", "SCSS", "JQuery", "Popper.js"],
    ["String Manipulation", "Live API Call/Response"],
    "wikiview"
  ),
  new Project(
    "Local Weather App",
    "February 10, 2018",
    "Let's be honest, the outdoors is a scary, unforgiving place. If you're like me, you want to know what it's like out there without having to risk a lightning strike, heat stroke, or social interaction. That's why I built this Weather App. It calls upon the OpenWeatherMap API to tell you about that horrible place we call 'outside'. <br /><br /> <b>NOTE:</b> The API is routed through freeCodeCamp.org to avoid authentication, and can sometimes return incorrect data. A couple 'refreshes' usually does the trick.",
    ["HTML5", "CSS3", "JavaScript"],
    ["JSON APIs", "Bootstrap 4", "Haml", "SCSS", "JQuery"],
    ["HTML5 Geolocation", "Data Management"],
    "weather"
  ),
  new Project(
    "Twitch.tv Stream Client",
    "February 15, 2018",
    "Videogame livestreaming is the new hotness. If you want to stay up-to-date with all your favourite streamers, this Twitch.tv client I developed is going to be your best friend. It grabs a bunch of useful information about the streamer's current status (from the Twitch.tv API) and puts it all in one convenient dashboard. Dynamically Add, sort, and filter to your heart's content. GLHF!",
    ["HTML5", "CSS3", "JavaScript"],
    ["Bootstrap 4", "Haml", "SCSS", "JQuery"],
    ["JSON APIs", "AJAX", "Commercial APIs", "Live Response"],
    "liveontwitch"
  ),
  new Project(
    "JavaScript Calculator",
    "March 06, 2018",
    "This web app is the one-stop shop for quick maths. This full-page calculator app runs entirely on my hand-coded JavaScript. It performs linear operations (no PEDMAS) hyper fast and supports numpad/keystroke input as well. It's even responsive on mobile, so you can finally ditch that pocket calculator you lug around everywhere. Why did you have that in the first place?",
    ["HTML5", "CSS3", "JavaScript"],
    ["Bootstrap 4", "Haml", "SCSS", "JQuery"],
    ["Dynamic Mathematics"],
    "calculator"
  ),
  new Project(
    "Pomodoro Clock",
    "March 12, 2018",
    "If you have trouble staying productive, one of the most common recommendations is to try the Pomodoro Technique. You specify break, and work timers to regulate the time you spend on <i>Facebook</i> versus the time you spend with your <i>face in the books</i>. Decide your own times, and click start to see a stylized productivity fuel gauge which depletes and refills in cycles. Finally a way to write that book you keep talking about.",
    ["HTML5", "CSS3", "JavaScript"],
    ["Bootstrap 4", "Haml", "SCSS", "JQuery"],
    ["JS Timing Functions"],
    "fuelgauge"
  ),
  new Project(
    "Simon Game",
    "March 15, 2018",
    "Back in 1978, Milton Bradley distributed this electronic memory game to distract children and give their parents some breathing room. This faithful re-creation of said game, has all the fun features of the original plus my own <i>spin</i> on things (the joke is that one of my features is spin-mode). Turning on your sound helps quite a bit, and if you manage to get to 20, congratulations! Send me a link to a screenshot and I'll comment your name into the source code.",
    ["HTML5", "CSS3", "JavaScript"],
    ["Bootstrap 4", "Haml", "SCSS", "JQuery"],
    ["Array Manipulation", "Web Audio API"],
    "simon"
  ),
  new Project(
    "Tic-Tac-Toe",
    "March 21, 2018",
    "It's time to grab a pal and showdown in the greatest strategy game of 1300 BCE. If you don't have a partner, I've got you covered: AI. This implementation of Tic-Tac-Toe (Naughts and Crosses, if you prefer) allows for both Player vs. Player and Player vs. AI. My AI even has difficulty settings, for you to hone your TTT Skills, however, avoid the 'Impossible' difficulty, unless you want TacTic Bot to show you how Terminator should have ended.",
    ["HTML5", "CSS3", "JavaScript"],
    ["Bootstrap 4", "Haml", "SCSS", "JQuery"],
    ["AI Algorithmic Logic"],
    "tictactoe"
  ),
];

for (var i = 0; i < 8; i++) {
  applyProject(projectArr[i], projectArr.length - 1 - i);
}

$("#directory a").click(function () {
  softScroll(this);
});

$(".fa-chevron-up").click(function () {
  softScroll(this);
});
