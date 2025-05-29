const allPlaqueData = {
  v0: {
    title: "A Real Website",
    date: "1998",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
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
    grid-template-columns: 270px 30px;
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
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    line-height: 1.3;
  `;
  plaque.appendChild(plaqueContent);

  const plaqueTitle = document.createElement("div");
  plaqueTitle.innerHTML = `<b>"${plaqueData.title}"</b>, c. ${plaqueData.date}`;
  plaqueTitle.style.cssText = `
    font-size: 20px;
    font-style: italic;
  `;
  plaqueContent.appendChild(plaqueTitle);

  const plaqueDescription = document.createElement("div");
  plaqueDescription.innerHTML = plaqueData.description;
  plaqueDescription.style.cssText = `
    font-size: 16px;
  `;
  plaqueContent.appendChild(plaqueDescription);

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
