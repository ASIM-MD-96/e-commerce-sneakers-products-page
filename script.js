"use strict";

const lightBox = document.querySelector(".light__section");
const slide = document.querySelectorAll(".slide");
const thumbs = document.querySelectorAll(".thumb");
const lightNext = document.querySelector(".light__next");
const lightPrevious = document.querySelector(".light__previous");
const closeBtn = document.querySelector(".closebtn");
const addToCartBtn = document.querySelector(".add__cart__btn");
const body = document.querySelector("body");

let current = 0;
function showSlide(index) {
  slide.forEach((slide) => slide.classList.add("hidden"));
  slide[index].classList.remove("hidden");
  body.classList.add("overflow-y-hidden");
  thumbs.forEach((t) => {
    t.classList.remove("active");
  });
  thumbs[index].classList.add("active");
}

thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    current = index;
    showSlide(current);
  });
});

lightNext.addEventListener("click", function () {
  current++;
  if (current >= slide.length) current = 0;

  showSlide(current);
});

lightPrevious.addEventListener("click", function () {
  current--;
  if (current < 0) current = slide.length - 1;
  showSlide(current);
});

closeBtn.addEventListener("click", function () {
  lightBox.classList.add("open");
});

//////////////////////////////////////////////////////

const sliders = document.querySelector(".slider");
const slideEl = document.querySelectorAll(".slide__mobile");
const next = document.querySelector(".nextbtn");
const previous = document.querySelector(".previousbtn");

let currentSlide = 0;
let maxSlide = slideEl.length;

function slideMobile() {
  slideEl.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - currentSlide)}%)`),
  );
}

slideEl.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
next.addEventListener("click", function () {
  currentSlide++;
  if (currentSlide >= maxSlide) {
    currentSlide = 0;
  }
  slideMobile();
});

previous.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = maxSlide - 1;
  }
  slideMobile();
});

////////////////////////////////////////////////////////////////////////
// next.addEventListener("click", function () {
//   currentSlide++;
//   if (currentSlide >= slideEl.length) {
//     currentSlide = 0;
//   }
//   sliders.style.transform = `translateX(-${currentSlide * 100}%)`;
// });

// previous.addEventListener("click", function () {
//   currentSlide--;
//   if (currentSlide < 0) {
//     currentSlide = slideEl.length - 1;
//   }
//   sliders.style.transform = `translateX(-${currentSlide * 100}%)`;
// });
//////////////////////////////////////////////////////////////////////

const cartSection = document.querySelector(".cart__section");
const fillCart = document.querySelector(".fill__cart");
const emptyCart = document.querySelector(".empty__cart");
const price = document.querySelector(".cart-price");
const cartCount = document.querySelector(".cart__count");
const cartCountEl = document.querySelector(".cart-count");
const totalPrice = document.querySelector(".total");
const count = document.querySelector(".count");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const deleteIcon = document.querySelector(".delete__icon");
const cartIcon = document.querySelector(".cartIcon");

cartCount.classList.add("hidden");

let counter = 0;
addToCartBtn.addEventListener("click", () => {
  cartSection.classList.remove("hidden");
  if (counter === 0) {
    fillCart.classList.add("hidden");
    emptyCart.classList.remove("hidden");
  } else {
    fillCart.classList.remove("hidden");
    emptyCart.classList.add("hidden");
    cartCount.classList.remove("hidden");
  }
  updateTotal();
});

plus.addEventListener("click", () => {
  counter++;
  count.textContent = counter;
  cartCount.textContent = counter;
  cartCountEl.textContent = counter;
  updateTotal();
});

minus.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    count.textContent = counter;
    cartCount.textContent = counter;
    cartCountEl.textContent = counter;
    updateTotal();
  }
});

cartIcon.addEventListener("click", function () {
  cartSection.classList.toggle("hidden");
  if (counter === 0) {
    emptyCart.classList.remove("hidden");
    fillCart.classList.add("hidden");
  }
});

deleteIcon.addEventListener("click", function () {
  fillCart.classList.add("hidden");
  emptyCart.classList.remove("hidden");
  cartCount.classList.add("hidden");
  cartCount.textContent = 0;
  count.textContent = 0;
});

let currentPrice = 125;

function updateTotal() {
  const total = counter * currentPrice;
  totalPrice.textContent = `$${total.toFixed(2)}`;
}

const sliderEl = document.querySelectorAll(".slides");
const thumbnailsImg = document.querySelectorAll(".thumbnails img");

function showSlideEl(index) {
  sliderEl.forEach((slide) => slide.classList.add("hidden"));
  sliderEl[index].classList.remove("hidden");

  thumbnailsImg.forEach((t) => t.classList.remove("active"));
  thumbnailsImg[index].classList.add("active", "cursor-pointer");
}

thumbnailsImg.forEach((t, i) => {
  t.addEventListener("click", () => {
    showSlideEl(i);
  });
});

sliderEl.forEach((slide) => {
  slide.addEventListener("click", function () {
    lightBox.classList.remove("open");
    cartSection.classList.add("hidden");
  });
});

const menu = document.querySelector(".menu__icon");
const close = document.querySelector(".close__svg");
const menuContent = document.querySelector(".menu__content");

const menuOpen = () => {
  menuContent.classList.remove("hidden");
};
const menuClose = () => {
  menuContent.classList.add("hidden");
};

menu.addEventListener("click", menuOpen);
close.addEventListener("click", menuClose);

//////////////////////////////////////////////////////////

const nav = document.querySelector(".nav__links");

function handleHover(e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav__links").querySelectorAll(".nav__link");
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
}

nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));
