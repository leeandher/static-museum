function attachVersionDock() {
  const dock = document.createElement("div");
  dock.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 4px 8px;
    z-index: 9999;
    display: flex;
    gap: 8px;
    border: 3px solid transparent;
  `;

  const links = [
    { text: "v3", url: "https://v3.leander.xyz", version: "v3" },
    { text: "v2", url: "https://v2.leander.xyz", version: "v2" },
    { text: "v1", url: "https://v1.leander.xyz", version: "v1" },
    { text: "v0", url: "https://v0.leander.xyz", version: "v0" },
  ];

  const version = document
    .querySelector("[data-leander-xyz-version]")
    .getAttribute("data-leander-xyz-version");

  const linkElements = links.map((link) => {
    const linkElement = document.createElement("a");
    linkElement.style.cssText = `
      font-weight: bold;
      text-decoration: none;
      padding: 0 12px;
      transition: all 0.2s;
      font-size: 18px;
    `;
    if (version === link.version) {
      linkElement.style.textDecoration = "underline";
      linkElement.style.textDecorationThickness = "2px";
    }
    linkElement.href = link.url;
    linkElement.textContent = link.text;

    dock.appendChild(linkElement);
    return linkElement;
  });

  if (version === "v0") {
    dock.style.borderColor = "rgb(77, 204, 176)";
    dock.style.backgroundColor = "rgb(206, 244, 235)";
    linkElements.forEach((linkElement) => {
      linkElement.style.color = "rgb(6, 16, 14)";
    });
  }

  if (version === "v1") {
    dock.style.animation = "rainbow 5s linear infinite";
    dock.style.borderColor = "rgb(77, 204, 176)";
    dock.style.backgroundColor = "rgb(13,13,13)";
    dock.style.borderRadius = "4px";
    dock.style.color = "rgb(253, 253, 253)";
    linkElements.forEach((linkElement) => {
      linkElement.addEventListener("mouseover", () => {
        linkElement.style.color = "rgb(77, 204, 176)";
      });
      linkElement.addEventListener("mouseout", () => {
        linkElement.style.color = "rgb(253, 253, 253)";
      });
    });
  }

  if (version === "v2") {
    dock.classList.add("bg-accent");
    dock.style.transform = "skew(-5deg)";
    dock.style.color = "rgb(13,13,13)";
    linkElements.forEach((linkElement) => {
      linkElement.addEventListener("mouseover", () => {
        linkElement.style.backgroundColor = "rgb(253, 253, 253)";
      });
      linkElement.addEventListener("mouseout", () => {
        linkElement.style.backgroundColor = "transparent";
      });
    });
  }

  document.body.appendChild(dock);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", attachVersionDock);
} else {
  attachVersionDock();
}
