const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();
const navButton = document.querySelector(".nav-toggle");
const LinksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
navButton.addEventListener("click", () => {
  const heightContainer = LinksContainer.getBoundingClientRect().height;
  const LinksHeight = links.getBoundingClientRect().height;
  if (heightContainer === 0) {
    LinksContainer.style.height = `${LinksHeight}px`;
  } else {
    LinksContainer.style.height = 0;
  }
});
const navbar = document.querySelector("nav");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
const scroll = document.querySelectorAll(".scroll-link");
scroll.forEach(function (link) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const container = LinksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + container;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    LinksContainer.style.height = 0;
  });
});
