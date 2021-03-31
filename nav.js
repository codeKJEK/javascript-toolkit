// ********* toggle menu *********
const menuBtn = document.querySelector(".toggle-menu");
const navContainer = document.querySelector(".nav-container");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", function() {
    const containerHeight = navContainer.getBoundingClientRect().height;
    const listHeight = navList.getBoundingClientRect().height;
    if(containerHeight === 0) {
        navContainer.style.height = `${listHeight}px`;
    } else {
        navContainer.style.height = 0;
    }
});

// ********* fixed nav *********
const navbar = document.getElementById("nav");

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
})