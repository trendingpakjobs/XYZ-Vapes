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
const slider = document.querySelector('.product-grid');
let scrollAmount = 0;
const slideStep = 320; // approx card width + gap
setInterval(() => {
  if(scrollAmount >= slider.scrollWidth - slider.clientWidth){
    scrollAmount = 0;
  } else {
    scrollAmount += slideStep;
  }
  slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
}, 2500); // 2.5 sec per slide
