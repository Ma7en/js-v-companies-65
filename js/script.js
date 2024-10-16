///////////////////////////////////////////////////////////
// Dark mode

const switchElement = document.querySelector(".switch");
document.addEventListener("DOMContentLoaded", () => {
  switchElement.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});

///////////////////////////////////////////////////////////
// Mobile Navbar
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth Scrolling Animation

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close Mobile Navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-1000px",
  }
);
obs.observe(sectionHeroEl);

// Skills Animation
const sectionSkillEl = document.querySelector(".section-skills");

let section = document.querySelector(".section-skills");
let divs = document.querySelectorAll(".skill .skill-bar div");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop + 100) {
    divs.forEach((div) => {
      div.style.width = div.dataset.width;
    });
  }
};

// Scroll Animation

ScrollReveal().reveal(".hero-img-box", {
  origin: "left",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".hero-text-box", {
  origin: "right",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  reset: true,
});

ScrollReveal().reveal(".subheading", {
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: true,
});

ScrollReveal().reveal(".heading-secondary", {
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: true,
});

ScrollReveal().reveal(".section-description", {
  origin: "bottom",
  distance: "50px",
  duration: 2000,
  reset: true,
});

ScrollReveal().reveal(".service", {
  origin: "left",
  distance: "250px",
  duration: 1000,
  delay: 250,
  reset: true,
});
ScrollReveal().reveal(".service-2", {
  origin: "left",
  distance: "250px",
  delay: 500,
  reset: true,
});
ScrollReveal().reveal(".service-3", {
  origin: "left",
  distance: "250px",
  delay: 750,
  reset: true,
});
ScrollReveal().reveal(".service-4", {
  origin: "left",
  distance: "250px",
  delay: 1000,
  reset: true,
});

ScrollReveal().reveal(".testimonial", {
  origin: "left",
  distance: "250px",
  delay: 500,
  reset: true,
});

ScrollReveal().reveal(".testimonial-2", {
  origin: "left",
  distance: "250px",
  delay: 750,
  reset: true,
});

ScrollReveal().reveal(".testimonial-3", {
  origin: "left",
  distance: "250px",
  delay: 1000,
  reset: true,
});

ScrollReveal().reveal(".portfolio", {
  origin: "left",
  distance: "250px",
  delay: 500,
  reset: true,
});

ScrollReveal().reveal(".portfolio-2", {
  origin: "left",
  distance: "250px",
  delay: 750,
  reset: true,
});

ScrollReveal().reveal(".portfolio-3", {
  origin: "left",
  distance: "250px",
  delay: 1000,
  reset: true,
});

ScrollReveal().reveal(".team", {
  origin: "left",
  distance: "250px",
  duration: 1000,
  duration: 1000,
  duration: 1000,
  duration: 1000,
  delay: 250,
  reset: true,
});
ScrollReveal().reveal(".team-2", {
  origin: "left",
  distance: "250px",
  delay: 500,
  reset: true,
});
ScrollReveal().reveal(".team-3", {
  origin: "left",
  distance: "250px",
  delay: 750,
  reset: true,
});
ScrollReveal().reveal(".team-4", {
  origin: "left",
  distance: "250px",
  delay: 1000,
  reset: true,
});
