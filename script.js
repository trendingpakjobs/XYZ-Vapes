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

// Smoke Canvas Animation
const canvas = document.createElement('canvas');
canvas.id = "smokeCanvas";
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    radius: Math.random()*50+20,
    speed: Math.random()*0.5+0.1,
    alpha: Math.random()*0.5+0.1
  });
}

function animateSmoke(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    ctx.beginPath();
    let gradient = ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.radius);
    gradient.addColorStop(0, `rgba(200,200,200,${p.alpha})`);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = gradient;
    ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
    ctx.fill();
    p.y -= p.speed;
    if(p.y + p.radius < 0){
      p.y = canvas.height + p.radius;
      p.x = Math.random()*canvas.width;
    }
  });
  requestAnimationFrame(animateSmoke);
}
animateSmoke();

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
