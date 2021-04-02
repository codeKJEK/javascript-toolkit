// ********* toggle menu *********
const menuBtn = document.querySelector(".toggle-menu");
const navContainer = document.querySelector(".nav-container");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", function () {
  const containerHeight = navContainer.getBoundingClientRect().height;
  const listHeight = navList.getBoundingClientRect().height;
  if (containerHeight === 0) {
    navContainer.style.height = `${listHeight + 2}px`;
      } else {
    navContainer.style.height = 0;
  }
});

// ********* fixed nav *********
const navbar = document.getElementById("nav");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// ********* smooth scroll *********

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = navContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    
    if(!fixedNav) {
        position = position - navHeight;
    }

    if (navHeight > 93) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    navContainer.style.height = 0;
  });
});


const docBody = document.getElementsByTagName("body");

docBody.addEventListener("click", function(e) {
  console.log(e.currentTarget)
}) 