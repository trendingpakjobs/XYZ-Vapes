// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  if(nav.style.right === "0px"){
    nav.style.right = "-100%";
  } else {
    nav.style.right = "0px";
  }
});

// Explore button redirects to Products page
const exploreBtn = document.querySelector('.explore-btn');
if(exploreBtn){
  exploreBtn.addEventListener('click', () => {
    window.location.href = 'products.html';
  });
}


// Products Animation
const slider = document.querySelector('.product-slider');

let scrollAmount = 0;
let slideStep = 320; // roughly card width + gap
let slideInterval = 2000; // 2 seconds for smooth slide

setInterval(() => {
  if(scrollAmount >= slider.scrollWidth - slider.clientWidth){
    scrollAmount = 0;
  } else {
    scrollAmount += slideStep;
  }
  slider.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}, slideInterval);
