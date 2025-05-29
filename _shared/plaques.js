function attachDock() {
  if (document.querySelector("[data-static-museum-plaques]")) {
    return;
  }
  const plaque = document.createElement("div");
  plaque.setAttribute("data-static-museum-plaques", "");
  plaque.style.cssText = `
    font-family: Helvetica, Arial, sans-serif;
    position: fixed;
    bottom: 20px;
    left: 20px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    transition: all 0.2s;
    border: 1px solid transparent;
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

  const plaqueTitleContainer = document.createElement("div");
  plaqueTitleContainer.style.cssText = `
    display: flex;
    gap: 4px;
    align-items: flex-end;
    font-size: 18px;
    font-style: italic;
    line-height: 1.5;
  `;
  plaque.appendChild(plaqueTitleContainer);

  const plaqueTitle = document.createElement("p");
  plaqueTitle.textContent = '"A Real Website"';
  plaqueTitle.style.cssText = `
    font-weight: bold;
  `;
  plaqueTitleContainer.appendChild(plaqueTitle);

  const plaqueDate = document.createElement("div");
  plaqueDate.textContent = ", c.1998";
  plaqueTitleContainer.appendChild(plaqueDate);

  const plaqueContent = document.createElement("p");
  plaqueContent.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.";
  plaqueContent.style.cssText = `
    font-size: 16px;
    line-height: 1.4;
  `;
  plaque.appendChild(plaqueContent);

  let isToggleHidden = false;
  const toggle = document.createElement("button");
  toggle.setAttribute("aria-label", "Hide static-museum plaque");
  toggle.textContent = "×";
  toggle.style.cssText = `
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    border-left: 1px solid;
    border-color: inherit;
    background: ${prefersDarkMode ? "#124f47" : "#fbf2ca"};
    border: none;
    font-size: 20px;
    width: 30px;
    cursor: pointer;
    padding: 4px 8px;
    color: inherit;
  `;
  plaque.appendChild(toggle);

  let isHidden = false;
  toggle.addEventListener("click", () => {
    isHidden = !isHidden;
    const currentText = `${isHidden ? "Show" : "Hide"} static-museum plaque`;
    plaque.style.transform = isHidden
      ? "translateX(calc(-100% + 10px))"
      : "translateX(0)";
    toggle.setAttribute("aria-label", currentText);
    toggle.title = currentText;
    toggle.textContent = isHidden ? "⋮" : "×";
  });

  document.body.appendChild(plaque);
}

attachDock();
