const allPlaqueData = {
  v0: {
    title: "v0: A Structured Joke",
    date: "2018",
    description:
      "Pretty self-deprecating, but that was my humour at the time I suppose. I remember being very proud of the mobile nav hamburger animation, it made its way to v2 as well. This didn't used to have projects, but I decided to put some high-school projects here along with the first webpage I ever authored.",
  },
  concentration: {
    title: "Concentration",
    date: "2014",
    description:
      "Originally built in Khan Academy for my Grade 10 Computer Sciences course, which I only took because I thought it was robotics (but I was mistaken). I remember choosing the colours because of Portal 2, and the idea for gameplay probably came from Piano Tiles or Tap Tap Revenge, idk.",
    sourceSite: "/",
  },
  inversion: {
    title: "Inversion",
    date: "2015",
    description:
      "I was so proud of the graphics in this one, trying to make explosions and space ships out of primitive shapes. It's still fun to play, and the style has something to it. There's a bug where you can get over 100% accuracy, but the more I think about it, it might be a feature.",
    sourceSite: "/",
  },
  rainbow: {
    title: "Rainbow Roadblock",
    date: "2015",
    description:
      "Pretty simple game, but I remember finding it fun to create this ramping difficulty, and an ending at 150 points! Two control schemes as well, I personally like keyboard more but mouse is definitely easier. I remember I got a very good mark for this as my Grade 10 CPT submission.",
    sourceSite: "/",
  },
  tribute: {
    title: "Build a Tribute Page",
    date: "2018",
    description:
      "So the assignment was to make a tribute page, but I had a color scheme in mind and so I picked some characters from Hotline Miami. Re-evaluating that decision today, I can see how having a tribute page to some violent murderous characters from an arcade-y video game might make me look, but the CSS is still cool.",
    sourceSite: "/",
  },
  v1: {
    title: "It's (a)LIVE",
    date: "2018",
    description:
      "The first time any of my code had been deployed to the internet. Very janky and had many anti-patterns, but it worked! PHPMyAdmin, cPanel, and FileZilla were all new to me, but that's what it took on SiteGround at the time. Pretty cool how much it built up from v0.",
  },
  v1_projects: {
    title: "Legacy freeCodeCamp Gallery",
    date: "2018",
    description:
      "All a part of the legacy freeCodeCamp curriculum. As 'apps', they're totally a mixed bag, but do remember that I never started the next project without being proud of the the previous. They're probably a large reason for my comprehension of CSS.",
  },
  v1_blog: {
    title: "Dear Diary",
    date: "2018",
    description:
      "Like literally diary entries. At this time in my life, I spent so much time coding, and learning about coding so the fact that there are even blog posts <i>not</i> about code, is a massive success.",
  },
  v1_resume: {
    title: "Accordions",
    date: "2018",
    description:
      "Weird way to display sections of a resume, probably a reason it didn't make it into v2. Having to unfold each section feels a bit odd by I do like the transition a fair bit! Content-wise, I find it pretty embarrassing, but it did get me my first development job!",
  },
  calculator: {
    title: "Calculator",
    date: "2018",
    description:
      "I guess it kinda works, but only to a few decimal places and it has a limit for the number of digits. I tried to use this one time and my numbers were too large, so I think it's never been used practically ever. Why is there an off button?",
    sourceSite: "/",
  },
  fuelgauge: {
    title: "Productivity Fuel Gauge",
    date: "2018",
    description:
      "A pomodoro timer with a bit of a theme to it. I do actually like the intent behind this design though, it makes it obvious how much 'energy' you have left to spend in a recognizable format. Good job me.",
    sourceSite: "/",
  },
  liveontwitch: {
    title: "Live on Twitch",
    date: "2018",
    description:
      "So this really doesn't work. There used to be a public passthrough for the entire Twitch API, but now it's limited to a handful of accounts so adding streamers is hit or miss. Was very proud of this originally though, first time using real data.",
    sourceSite: "/",
  },
  quotes: {
    title: "TinDirectory",
    date: "2018",
    description:
      "IIRC this was the first real JS project I had done on freeCodeCamp, and it was literally just to make a random quote appear. I thought I'd do extra credit and have it cycle even more data, like names, locations and backgrounds. All in the theme of an tinder, an app I've never used that might have spawned a venture-backed industry eroding the modern relationship.",
    sourceSite: "/",
  },
  simon: {
    title: "Simon Says",
    date: "2018",
    description:
      "Revisiting this to put in the museum, it just appears like a boring Simon Says app to start. Mashing 'Remix' a few times, and then 'Spin', and it's kinda cute. I really like older projects like these because no one asked me to do this weird stuff, it's just the result of 'playing' with 'toys'.",
    sourceSite: "/",
  },
  tictactoe: {
    title: "Tic Tac Toe",
    date: "2018",
    description:
      "Cleaner design than any of my other apps at the time, and to be honest -- still impressive! I know it's just an algorithm, but the bot actually can't be beat! The difficulty selections are tangible, the UI is pleasant and the you can even play against a human.",
    sourceSite: "/",
  },
  weather: {
    title: "Outside from the Inside",
    date: "2018",
    description:
      "It's super simple, but I still find this one charming with its changing backgrounds, and excess information. I can tell I was desperate to be adding stuff to make it cool rather than just display a number on screen after the user 'accepts' the location request.",
    sourceSite: "/",
  },
  wikiview: {
    title: "WikiView",
    date: "2018",
    description:
      "I'm still impressed with the level of free access to the Wikipedia API. It's been ages and this thing still works as I built it, which means all kinds of bugs I never noticed back then. Regardless I do remember feeling very proud of the UI, and that opening animation is pretty clean.",
    sourceSite: "/",
  },
};

function attachPlaque() {
  const slug = document.querySelector("[data-sm-plaque-slug]").dataset
    .smPlaqueSlug;
  const plaqueData = allPlaqueData[slug];

  if (document.querySelector("[data-static-museum-plaques]") || !plaqueData) {
    return;
  }

  const plaque = document.createElement("div");
  plaque.setAttribute("data-static-museum-plaques", "");
  plaque.style.cssText = `
    font-family: Helvetica, Arial, sans-serif;
    position: fixed;
    bottom: 20px;
    left: 20px;
    display: grid;
    grid-template-columns: 330px 30px;
    grid-row-gap: 4px;
    z-index: 9999;
    transition: all 0.2s;
    border: 1px solid transparent;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
`;

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (prefersDarkMode) {
    plaque.style.background = "#042f2c";
    plaque.style.color = "#f0fdf9";
    plaque.style.borderColor = "#f0fdf9";
  } else {
    plaque.style.background = "#fefbec";
    plaque.style.color = "#421d06";
    plaque.style.borderColor = "#421d06";
  }

  const plaqueContent = document.createElement("div");
  plaqueContent.style.cssText = `
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    line-height: 1.3;
    text-align: left;
  `;
  plaque.appendChild(plaqueContent);

  const plaqueTitle = document.createElement("div");
  plaqueTitle.innerHTML = `<b>"${plaqueData.title}"</b>, c. ${plaqueData.date}`;
  plaqueTitle.style.cssText = `
    font-size: 16px;
    font-style: italic;
  `;
  plaqueContent.appendChild(plaqueTitle);

  const plaqueDescription = document.createElement("div");
  plaqueDescription.innerHTML = plaqueData.description;
  plaqueDescription.style.cssText = `
    font-size: 14px;
  `;
  plaqueContent.appendChild(plaqueDescription);

  if (plaqueData.sourceSite) {
    const plaqueSource = document.createElement("a");
    plaqueSource.href = plaqueData.sourceSite;
    plaqueSource.textContent = "back to main site";
    plaqueSource.style.cssText = `
      font-size: 12px;
      align-self: flex-end;
      font-style: italic;
      color: ${prefersDarkMode ? "#f0fdf9" : "#421d06"};
    `;
    plaqueContent.appendChild(plaqueSource);
  }

  let isToggleHidden =
    localStorage.getItem("static-museum-plaque-hidden") === "true";
  const toggle = document.createElement("button");
  plaque.appendChild(toggle);

  function setToggle(newToggleValue) {
    isToggleHidden = newToggleValue;
    localStorage.setItem("static-museum-plaque-hidden", isToggleHidden);
    const currentText = `${
      isToggleHidden ? "Show" : "Hide"
    } static-museum plaque`;
    toggle.setAttribute("aria-label", currentText);
    toggle.title = currentText;
    toggle.textContent = isToggleHidden ? "⋮" : "×";
    plaque.style.transform = isToggleHidden
      ? "translateX(calc(-100% + 10px))"
      : "translateX(0)";
  }

  setToggle(isToggleHidden);

  toggle.style.cssText = `
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    font-size: 20px;
    width: 30px;
    cursor: pointer;
    outline: 0;
    border: none;
    border-left: 1px solid transparent;
    border-color: inherit;
    color: inherit;
    background: ${prefersDarkMode ? "#124f47" : "#fbf2ca"};
  `;

  toggle.addEventListener("click", () => setToggle(!isToggleHidden));

  document.body.appendChild(plaque);
}

attachPlaque();
