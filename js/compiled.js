// ===============================
// ********* toggle menu *********
// ===============================

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

// close on click
const navbar = document.getElementById("nav");

window.addEventListener("click", function(e) {
  const containerHeight = navContainer.getBoundingClientRect().height;
  console.log(containerHeight)
  if(!navbar.contains(e.target) && containerHeight > 0) {
    navContainer.style.height = 0;
  }
});

// close on scroll 


// ===============================
// ********* fixed nav ***********
// ===============================

window.addEventListener("scroll", function () {
  const containerHeight = navContainer.getBoundingClientRect().height;
if(containerHeight > 0) {
  navContainer.style.height = 0;
}
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
});

// ===============================
// ********* smooth scroll *******
// ===============================

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

// ===============================
// ****** video / preloader ******
// ===============================


const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// // preloader
// const preloader = document.querySelector(".preloader");

// window.addEventListener("load", function() {
//     preloader.classList.add("hide-preloader");
// })



// ===============================
// ********* countdown ***********
// ===============================

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const giveaway = document.querySelector(".deal");
  const deadline = document.querySelector(".deadline");
  const items = document.querySelectorAll(".deadline-format h4");
  
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();
  
  // let futureDate = new Date("December 31, 2021 11:00:00");
  const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  let month = futureDate.getMonth();
  month = months[month];
  const date = futureDate.getDate();
  const weekday = weekdays[futureDate.getDay()];
  
  giveaway.textContent = `offer ends on ${weekday} ${month} ${date} ${year} ${format(
    hours
  )}:${format(minutes)}pm`;
  
  const futureTime = futureDate.getTime();
  
  function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
    const values = [days, hours, minutes, seconds];
  
    items.forEach(function (item, index) {
      item.innerHTML = format(values[index]);
    });
    if (t < 0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">Sorry, This Giveaway Has Expired</h4>`;
    }
  }
  
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  
  let countdown = setInterval(getRemainingTime, 1000);
  
  getRemainingTime();
  

