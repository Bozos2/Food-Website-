"use strict";

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    //Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

// Slider
const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const slideLeft = document.querySelector(".slider__btn--left");
  const slideRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  slideRight.addEventListener("click", nextSlide);
  slideLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//countdown timer

const countdownTimer = function () {
  const DateToCount = new Date("June 6, 2023 20:00:00 ").getTime();
  const TodayDate = new Date().getTime();
  const gap = DateToCount - TodayDate;

  //convert Date to day,hour,minutes,seconds

  const ConvertSeconds = 1000;
  const ConvertMinutes = ConvertSeconds * 60;
  const ConvertHours = ConvertMinutes * 60;
  const ConverDays = ConvertHours * 24;

  //Calculate

  const textDay = Math.floor(gap / ConverDays);
  const textHour = Math.floor((gap % ConverDays) / ConvertHours);
  const textMinutes = Math.floor((gap % ConvertHours) / ConvertMinutes);
  const textSeconds = Math.floor((gap % ConvertMinutes) / ConvertSeconds);

  //Update HTML
  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".minutes").innerHTML = textMinutes;
  document.querySelector(".seconds").innerHTML = textSeconds;
};

setInterval(countdownTimer, 1000);
