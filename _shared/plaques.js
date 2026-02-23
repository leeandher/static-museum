function attachPlaque() {
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
    v2: {
      title: "v2",
      date: "2019",
      description:
        "I was so SO proud of this version. When I published it I remember trying to show it off absolute everywhere. All the pages had a vibe, and I remember sketching out the idea, I adored the way it shifted colours. I even added an easter egg! 🥚",
    },
    v2_about: {
      title: "All About [Someone Else]",
      date: "2019",
      description:
        "Oh god It's actually hard for me to re-read these details, why did I talk like that. It's got such a voice, lmao. And an FAQs section! I'm sure I was struggling to fit space to make this page earn it's place in the sidebar. I also think I stole '🔥 picks' from Syntax' treats thing.",
    },
    v2_projects: {
      title: "Projects.Why",
      date: "2019",
      description:
        "Just so incredibly impractical as a page, but I thought framer motion was the coolest thing. I remember barely even understanding what I'd built but it did kinda work, so I shipped it. I wish I'd centered the project photos, but it has a certain amateur charm.",
    },
    v2_blog: {
      title: "MyBlog.md",
      date: "2019",
      description:
        "It feels mandatory for people building their first personal sites to include a blog, even if they never really have a plan for what they're gonna talk about. I kind of admire that, it's just kindled by a burning passion to share something -- regardless of quality (in my case) lol.",
    },
    v2_notes: {
      title: "Taking Note",
      date: "2019",
      description:
        "If you peek at the code here, I remember being oh-so-proud of the fact that every one of these note pages are powered by simple markdown files. Like not even with frontmatter, just a README.md for the directory pages. All that work, for what are now, EXTREMELY outdated notes.",
    },
    v2_contact: {
      title: "(Don't) Reach Out",
      date: "2019",
      description:
        "One of those things that honestly might be kinda dated today, people usually just link their social media now. That said, I had an email automation to tag and format these responses, and I remember being so excited to see them! It almost felt like receiving hand written letters 💌.",
    },
    v2_resume: {
      title: "Hire Me",
      date: "2019",
      description:
        "A pretty massive improvement over v1. I remember specifically trying to make it mobile friendly because I figured hiring managers must just be that busy. I also remember thinking that paper resumes had to only be a page, but my own site can scroll forever, so why not include literally everything in excrutiating detail.",
    },
    v2_404: {
      title: "404",
      date: "2019",
      description:
        "Okay like all things considered, I know this site is such heavy coder-boy CS kid energy but I still think this 404 page has a bit of charm.",
    },
    "catch-of-the-day": {
      title: "Catch of the Day",
      date: "2018",
      description:
        "From my first course (and time) using React, in all it's class-based component, lifecycle method glory. Literally all crimes these days, but still a perfectly functional weird fish market.",
      sourceSite: "https://v2.leander.xyz/projects/catch-of-the-day/",
    },
    bgcg: {
      title: "B.G.C.G.",
      date: "2018",
      description:
        "I know most people say, 'oh I just got bored of studying' and then showcase some gorgeous hand-drawn realistic pencil sketch of their bay window, but this is the shit that I did. I'm glad I got screenshots of the origin story, it somewhat insulates me from the 'rawr xd' cringe of it all.",
      sourceSite:
        "https://v2.leander.xyz/projects/best-grilled-cheese-generator/",
    },
    conway: {
      title: "Conway's Game of Life",
      date: "2018",
      description:
        "Still pretty fascinating to watch, it's mesmerizing, the vibrant colours, design library and silly caption. I still vaguely recall watching the first few runs when I just got the code wired up and feeling a wave of pride. I also love that the 'dark mode' just inverts all colours on the page, big brain move.",
      sourceSite: "https://v2.leander.xyz/projects/conway/",
    },
    delicious: {
      title: "Now That's Delicious!",
      date: "2018",
      description:
        "From a Node course way back when. There's still something that personally appeals to me whenever I see a well-used gradient. I also adore the idea of small purpose built sites, and even though this one is artificial, the idea of building a personal review store is kinda cute. Name is pretty bad though.",
      sourceSite: "https://v2.leander.xyz/projects/now-thats-delicious/",
    },
    reduxstagram: {
      title: "Reduxstagram",
      date: "2018",
      description:
        "Interestingly enough, this site is from a course originally sponsored by Sentry long before I ever worked there. It was one of the first times I'd heard of it, and seeing a familiar name in job listings definitely played a role in my applying. Also, remember when instagram actually did look like this?",
      sourceSite: "https://v2.leander.xyz/projects/reduxstagram/",
    },
    fyi: {
      title: "lgr.fyi",
      date: "2019",
      description:
        "All because I splurged and bought a domain (which I have since let lapse). I think URL shortening might be one of the best beginner backend projects. It's simple to start, but you can add more and more complexity as you go. I mean I never did, I got cheap and shuttered the whole thing at my first <i>DigitalOcean</i> bill, but someone can.",
      sourceSite: "https://v2.leander.xyz/projects/lgr-fyi/",
    },
    "sick-fits": {
      title: "Sick Fits",
      date: "2019",
      description:
        "The vibe of this course site definitely influenced the aesthetic for v2 of my personal site. It was the last project before I started working on it, and I remember thinking the bold red text background was extremely eye-catching. Skews and high-contrast as well!",
      sourceSite: "https://v2.leander.xyz/projects/sick-fits/",
    },
    "stacker-news": {
      title: "Stacker News",
      date: "2019",
      description:
        "Kinda feels like cosplaying since I've never been someone who reads <i>HackerNews</> (and probably never will). I know that GraphQL was hot at the time, and it just so happened to be the subject of a tutorial I used to put this together. I still think it's crazy that it's near identical to the real one with like 8 lines of CSS.",
      sourceSite: "https://v2.leander.xyz/projects/stacker-news/",
    },
    "md-prevuer": {
      title: "Markdown Previewer",
      date: "2019",
      description:
        "Back when I used to get excited about something new in JavaScript. I had heard so much about Vue, but never tried it and figured it'd be useful to build some experience. A very simple app, but probably one of my most directly useful.",
      sourceSite: "https://v2.leander.xyz/projects/md-prevuer/",
    },
    "space-shooter": {
      title: "Space Shooter",
      date: "2018",
      description:
        "I took an interest to Unity at one point, and was pretty surprised when I found out you can build it for web. Game development has always been something I mean to get around too, and I do remember enjoying this tutorial project. Maybe some day though.",
      sourceSite: "https://v2.leander.xyz/projects/space-shooter/",
    },
  };

  const slug = document.querySelector("[data-sm-plaque-slug]").dataset
    .smPlaqueSlug;
  const plaqueData = allPlaqueData[slug];

  const existingPlaque = document.querySelector("[data-static-museum-plaques]");

  if (!plaqueData) {
    return;
  }

  if (existingPlaque) {
    existingPlaque.remove();
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
    "(prefers-color-scheme: dark)",
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
