function attachPlaque() {
  // Has to be declared in here to avoid Gatsby issues in v2
  const PLAQUE_DATA = {
    v0: {
      title: "A Structured Joke",
      date: "2018",
      description:
        "It's pretty self-deprecating, but honestly, that was accurate to my humour at the time. I was very proud of the mobile nav hamburger animation; it made its way to v1 as well, and even v2. Originally, the projects section was a placeholder, but I decided to put some old-school projects here, including high-school assignments and my first webpage.",
      sourceLink: "https://codepen.io/leeandher/pen/mXbzde",
    },
    concentration: {
      title: "Concentration",
      date: "2014",
      description:
        "Originally built in <i>Khan Academy</i> for my first CS course in Grade 10 (which I only took because I thought CS meant robotics). I remember choosing the colours because of <i>Portal 2</i>, and the idea for gameplay probably came from <i>Piano Tiles</i> or <i>Tap Tap Revenge</i>, who knows.",
      backLink: "https://v0.leander.xyz/#portfolio",
    },
    inversion: {
      title: "Inversion",
      date: "2015",
      description:
        "I was so proud of the graphics in this one, trying to make explosions and spaceships out of primitive shapes. It's still fun to play, and the style has something to it. There's a bug where you can get over 100% accuracy, but the more I think about it, it might be a feature.",
      backLink: "https://v0.leander.xyz/#portfolio",
    },
    rainbow: {
      title: "Rainbow Roadblock",
      date: "2015",
      description:
        "Pretty simple game, but I remember finding it fun to create this ramping difficulty, and an ending at 150 points. Two control schemes as well; I personally like keyboard more, but mouse is definitely easier. IIRC this did pretty well as a culminating project in Grade 10.",
      backLink: "https://v0.leander.xyz/#portfolio",
    },
    tribute: {
      title: "Build a Tribute Page",
      date: "2018",
      description:
        "So the assignment was to make a tribute page, but I had a colour scheme in mind and so I picked some characters from Hotline Miami. Re-evaluating that decision today, I can see how having a tribute page to violent, creepy characters might make me look, but the CSS is still sweet.",
      backLink: "https://v0.leander.xyz/#portfolio",
      sourceLink: "https://codepen.io/leeandher/pen/YYRmYJ",
    },
    v1: {
      title: "It's (a)LIVE",
      date: "2018",
      description:
        "The first time any of my code had been deployed to the internet. Very janky and had many anti-patterns, but it worked. <i>PHPMyAdmin</i>, <i>cPanel</i>, and <i>FileZilla</i> were all new to me, but that's what was available on the webhost I paid for at the time. Pretty cool how much it built up from v0.",
      sourceLink: "http://github.com/leeandher/leander.xyz-v1/",
    },
    v1_projects: {
      title: "Earliest Gallery",
      date: "2018",
      description:
        "All a part of the legacy freeCodeCamp curriculum. As applications, they're totally a mixed bag. Probably not all that useful, but I put a lot of effort into them at the time. I never started the next project until I was proud of the previous. Figuring these out taught me quite a bit of CSS.",
      sourceLink: "https://github.com/leeandher/leander.xyz-v1",
    },
    v1_blog: {
      title: "Dear Diary",
      date: "2018",
      description:
        "Like literally diary entries. At this time in my life, I spent so much time coding, and learning about coding, so the fact that there are even blog posts <i>not</i> about code is a massive success.",
      sourceLink: "https://github.com/leeandher/leander.xyz-v1",
    },
    v1_resume: {
      title: "Accordions",
      date: "2018",
      description:
        "Weird way to display sections of a resume, probably a reason it didn't make it into v2. Having to unfold each section kinda sucks, but I do like the transition. Content-wise, it's a mixed bag, although I'm fairly certain it landed me my first dev job.",
      sourceLink: "https://github.com/leeandher/leander.xyz-v1",
    },
    quotes: {
      title: "tinDirectory",
      date: "2018",
      description:
        "IIRC this was the first real JS project I had done on freeCodeCamp, and it was just supposed to make random quotes appear from some list. I thought I'd do extra credit and have it cycle even more data, like names, locations and backgrounds. All in the theme of <i>Tinder</i>, an app I've never used and never will.",
      backLink: "https://v1.leander.xyz/projects/#proj-7",
      sourceLink: "https://codepen.io/leeandher/pen/WMvzXz",
    },
    wikiview: {
      title: "WikiView",
      date: "2018",
      description:
        "I'm still impressed with the level of free access to the Wikipedia API. It's been ages and this thing still works as I built it, which means all kinds of bugs I never noticed back then are still there. Regardless, I do remember feeling very proud of the UI and animation -- it's still pretty clean.",
      backLink: "https://v1.leander.xyz/projects/#proj-6",
      sourceLink: "https://codepen.io/leeandher/pen/ZrbRda",
    },
    weather: {
      title: "Outside from the Inside",
      date: "2018",
      description:
        "It's super simple, but I still find this one charming with its changing backgrounds and excess information. I can tell I was desperate to add stuff to make it cool rather than just display a number on screen after the user accepts the location request.",
      backLink: "https://v1.leander.xyz/projects/#proj-5",
      sourceLink: "https://codepen.io/leeandher/pen/qxOKGQ",
    },
    liveontwitch: {
      title: "Live on Twitch",
      date: "2018",
      description:
        "So this really doesn't work. There used to be a public passthrough for the entire Twitch API, but now it's limited to a handful of accounts, so adding streamers is hit or miss. It was neat seeing API data about stuff I'm semi-familiar with though.",
      backLink: "https://v1.leander.xyz/projects/#proj-4",
      sourceLink: "https://codepen.io/leeandher/pen/wyKxwG",
    },
    calculator: {
      title: "Calculator",
      date: "2018",
      description:
        "I guess it kinda works, but only to a few decimal places and digits. The one time I tried to use it practically, my numbers were too large. Therefore, I believe to this day, it's never done a calculation with any real-world impact. Also, why is there an off button?",
      backLink: "https://v1.leander.xyz/projects/#proj-3",
      sourceLink: "https://codepen.io/leeandher/pen/yvwVWZ",
    },
    fuelgauge: {
      title: "Productivity Fuel Gauge",
      date: "2018",
      description:
        "A pomodoro timer with a bit of a theme to it. I do actually like the intent behind this design though, it makes it obvious how much 'energy' you have left to spend in a recognizable format. Not really my kind of tool, but it's still got a look.",
      backLink: "https://v1.leander.xyz/projects/#proj-2",
      sourceLink: "https://codepen.io/leeandher/pen/BraBrv",
    },
    simon: {
      title: "Simon Says",
      date: "2018",
      description:
        "Revisiting this to put in the museum, it just appears like a boring Simon Says app to start. Mashing 'Remix' a few times, and then 'Spin', and it's kinda cute. I really like older projects like these because no one asked me to do this weird stuff, it's just the creative result of learning new things and throwing it all together.",
      backLink: "https://v1.leander.xyz/projects/#proj-1",
      sourceLink: "https://codepen.io/leeandher/pen/rdOGYo",
    },
    tictactoe: {
      title: "Tic Tac Toe",
      date: "2018",
      description:
        "Cleaner design than any of my other apps at the time, and to be honest -- still impressive IMO. I know it's just an algorithm, but the <i>Impossible AI</i> actually can't be beaten. The difficulty selections are tangible, the colour picker is a nice touch, and you can even play against a human.",
      backLink: "https://v1.leander.xyz/projects/#proj-0",
      sourceLink: "https://codepen.io/leeandher/pen/PRZzzO",
    },
    v2: {
      title: "Personal Published Portfolio",
      date: "2019",
      description:
        "I put so much effort into this build, and was immensely proud. When I published it, I remember trying to show it off absolutely everywhere that let me add a website to my profile. All the pages have a vibe, there are animations everywhere, and I still like the way it shifts the colour palette across pages. There's even an easter egg at the bottom of the page.",
      sourceLink: "https://github.com/leeandher/leander.xyz/tree/2.0.1",
    },
    v2_about: {
      title: "All About [Someone Else]",
      date: "2019",
      description:
        "Oh god, it's actually hard for me to re-read these details, why did I talk like that. It's got such a voice. And an FAQs section. I'm confident these were added to fill space to make this page earn its place in the nav. I also think I stole 'The 🔥 f' from the <i>Syntax</i> treats thing.",
      sourceLink: "https://github.com/leeandher/leander.xyz/tree/2.0.1",
    },
    v2_projects: {
      title: "Projects.Why",
      date: "2019",
      description:
        "Just so incredibly impractical as a page, but I thought <i>Framer Motion</i> was the coolest thing. I barely understood what I built, but it did kinda work, so I shipped it. I do still wish I'd centered the project header photos, but it has a certain amateur charm.",
      sourceLink: "https://github.com/leeandher/leander.xyz/tree/2.0.1",
    },
    v2_blog: {
      title: "MyBlog.md",
      date: "2019",
      description:
        "It feels mandatory for people building their first personal sites to include a blog, even if they never really have a plan for what they're gonna talk about. I kind of admire that, it's just an urge to share your thoughts with the world -- regardless of quality (in my case).",
      sourceLink: "https://github.com/leeandher/leander.xyz/tree/2.0.1",
    },
    v2_notes: {
      title: "Taking Note",
      date: "2019",
      description:
        "If you peek at the code here, I remember being oh-so-proud of the fact that each note page is powered by a plain markdown file. Like not even with frontmatter. All that work, for what are now <i>extremely</i> outdated notes.",
      sourceLink: "https://github.com/leeandher/leander.xyz/tree/2.0.1",
    },
    v2_contact: {
      title: "(Don't) Reach Out",
      date: "2019",
      description:
        "Do people still have contact pages on websites? I think it's been replaced with social media links, but this has more of a personal touch. I had an email automation to tag and format these responses, and I remember being so excited to see them, like receiving handwritten letters.",
      sourceLink: "https://github.com/leeandher/leander.xyz/tree/2.0.1",
    },
    v2_resume: {
      title: "Hire Me",
      date: "2019",
      description:
        "A pretty massive improvement over v1. I remember specifically trying to make it mobile-friendly because I figured hiring managers would be reviewing packets on their phones. I kept my paper resume to only a page, but I remember allowing myself to dump every excruciating detail onto this page since websites can scroll.",
      sourceLink: "https://github.com/leeandher/leander.xyz/tree/2.0.1",
    },
    v2_404: {
      title: "404",
      date: "2019",
      description:
        "Okay, all things considered, I still kinda like this 404 page. I know this site has such a programmer/techy vibe, and this is another example, but for whatever reason I think it works best here.",
      sourceLink: "https://github.com/leeandher/leander.xyz/tree/2.0.1",
    },
    "catch-of-the-day": {
      title: "Catch of the Day",
      date: "2018",
      description:
        "From my first course (and time) using React, in all its class-based component, lifecycle method glory. Most of what this site uses would be considered crimes against React these days, but it's still a perfectly functional weird fish market.",
      backLink: "https://v2.leander.xyz/projects/catch-of-the-day/",
      sourceLink: "https://github.com/leeandher/catch-of-the-day",
    },
    bgcg: {
      title: "B.G.C.G.",
      date: "2018",
      description:
        "This page was built in a few short hours in between study sessions. I mean look at it, it's obviously a joke, but I'm not quite sure it's ever landed. I'm glad I got screenshots of the origin story, it somewhat insulates me from the 'rawr xd' cringe of it all.",
      backLink:
        "https://v2.leander.xyz/projects/best-grilled-cheese-generator/",
      sourceLink: "https://github.com/leeandher/bgcg",
    },
    conway: {
      title: "Conway's Game of Life",
      date: "2018",
      description:
        "Still pretty fascinating to watch, in a mesmerizing, aquarium kinda way. I enjoy the vibrant colours, the design library and that silly caption thing. I still vaguely recall watching the first few runs when I just got the code wired up and feeling a wave of pride. I also love that the 'dark mode' just inverts all colours on the page (check out the emoji at the bottom), big brain move.",
      backLink: "https://v2.leander.xyz/projects/conway/",
      sourceLink: "https://github.com/leeandher/Conways-Game-of-Life",
    },
    delicious: {
      title: "Now That's Delicious!",
      date: "2018",
      description:
        "From a Node.js course way back when. I'm into the look of a bright gradient over the banner photos, and the colours of the whole thing still pop. I also adore the idea of small purpose-built sites, and even though this one is artificial, the idea of building a personal review store is kinda cute. Name is pretty bad though.",
      backLink: "https://v2.leander.xyz/projects/now-thats-delicious/",
      sourceLink: "https://github.com/leeandher/now-thats-delicious",
    },
    reduxstagram: {
      title: "Reduxstagram",
      date: "2018",
      description:
        "This site is from a course originally sponsored by <i>Sentry</i> long before I ever worked there. It was one of the first times I'd heard of it, and seeing a familiar name in job listings definitely played a role in my applying. Also, remember when <i>Instagram</i> actually looked like this?",
      backLink: "https://v2.leander.xyz/projects/reduxstagram/",
      sourceLink: "https://github.com/leeandher/reduxstagram",
    },
    fyi: {
      title: "lgr.fyi",
      date: "2019",
      description:
        "All because I randomly bought this domain (which I have since let lapse). I think URL shortening might be one of the best beginner backend projects. It's simple to start, but you can add more features and increase complexity as you go. I mean, I never did -- I shuttered the whole thing at my first <i>DigitalOcean</i> bill.",
      backLink: "https://v2.leander.xyz/projects/lgr-fyi/",
      sourceLink: "https://github.com/leeandher/lgr-fyi",
    },
    "sick-fits": {
      title: "Sick Fits",
      date: "2019",
      description:
        "The vibe of this course site definitely influenced the aesthetic for v2 of my personal site. It was the last project before I started working on it, and I remember thinking the bold red text background was extremely eye-catching. Skewed and high-contrast as well.",
      backLink: "https://v2.leander.xyz/projects/sick-fits/",
      sourceLink: "https://github.com/leeandher/sick-fits",
    },
    "stacker-news": {
      title: "Stacker News",
      date: "2019",
      description:
        "Kinda feels like cosplaying since I've never been someone who reads <i>Hacker News</i> (and probably never will). GraphQL was hot at the time, and the tutorial I followed built this clone as a demo of the tool. I still think it's crazy that it's nearly identical to the real one with like 8 lines of CSS.",
      backLink: "https://v2.leander.xyz/projects/stacker-news/",
      sourceLink: "https://github.com/leeandher/stacker-news",
    },
    "md-prevuer": {
      title: "Markdown Previewer",
      date: "2019",
      description:
        "The first project I ever built with Vue. Never really went too deep on it, but I didn't want React to be the only framework I'd seen. It's just a simple app, but probably one of my most directly useful.",
      backLink: "https://v2.leander.xyz/projects/md-prevuer/",
      sourceLink: "https://github.com/leeandher/md-prevuer",
    },
    "space-shooter": {
      title: "Space Shooter",
      date: "2018",
      description:
        "I took an interest in <i>Unity</i> at one point, and was pretty surprised when I found out you can build it for web. Game development has always been something I mean to get around to, and I do remember enjoying this tutorial project. Feels like a huge overlap in my hobbies and interests, but fairly daunting as well.",
      backLink: "https://v2.leander.xyz/projects/space-shooter/",
      sourceLink: "https://github.com/leeandher/unity-tutorials",
    },
  };

  const slug = document.querySelector("[data-sm-plaque-slug]").dataset
    .smPlaqueSlug;
  const plaqueData = PLAQUE_DATA[slug];

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

  const plaqueLinks = document.createElement("div");
  plaqueLinks.style.cssText = `
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    `;
  const plaqueLinkCssText = `
    color: ${prefersDarkMode ? "#f0fdf9" : "#421d06"} !important;
    text-decoration: underline !important;
    font-style: italic !important;
    font-size: 12px !important;
  `;

  if (plaqueData.sourceLink) {
    const sourceLink = document.createElement("a");
    sourceLink.href = plaqueData.sourceLink;
    sourceLink.style.cssText = plaqueLinkCssText;
    sourceLink.textContent = "source code";
    plaqueLinks.appendChild(sourceLink);
  }

  if (plaqueData.backLink) {
    const backLink = document.createElement("a");
    backLink.href = plaqueData.backLink;
    backLink.style.cssText = plaqueLinkCssText;
    backLink.textContent = "back to main site";
    plaqueLinks.appendChild(backLink);
  }

  if (plaqueLinks.childElementCount > 0) {
    plaqueContent.appendChild(plaqueLinks);
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
