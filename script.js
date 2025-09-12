window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(
  ".hero-text, .hero img, .section-heading, .project-card, .about-image, .about-text, .contact-info, .contact-form, .footer-col"
).forEach((el) => observer.observe(el));

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const levels = entry.target.querySelectorAll(".skill-level");
        levels.forEach((level) => {
          const width = level.getAttribute("data-width");
          level.style.width = width;
        });
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".skill").forEach((el) => skillObserver.observe(el));

document.querySelectorAll("nav a[href^='#']").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const form = document.querySelector(".contact-form form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent 🚀");
    form.reset();
  });
}

function textanimate(){
    var typed=new Typed('.auto-type',{
        strings:['SHIV','SUNDER','PANDA'],
        typeSpeed:100,
        backSpeed:50,
        startDelay:500,
        backDelay:1000,
        loop:true,
        showCursor:true,
        cursorChar: '|'
    })
}
document.addEventListener("DOMContentLoaded", textanimate);