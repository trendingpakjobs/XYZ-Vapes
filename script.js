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

