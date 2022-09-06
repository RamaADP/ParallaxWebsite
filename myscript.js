let text = document.getElementById("text");
let sky = document.getElementById("sky");
let sun = document.getElementById("sun");
let btn = document.getElementById("btn");
let gunung = document.getElementById("gunung");
let bird1 = document.getElementById("bird1");
let bird2 = document.getElementById("bird2");
 window.addEventListener("scroll", function(){
     let value = window.scrollY;

     text.style.top = 50 + value * -0.25 + '%';
     btn.style.marginTop =  20 + value * -0.28 + '%';
     sun.style.top = value * 1 + 'px';
     sun.style.left = value * -1 + 'px';
     sky.style.top = value * 0.6 + 'px';
     bird1.style.left = value * -0.3 + 'px';
     bird2.style.left = value * 1 + 'px';
     gunung.style.top = value * 0.5 + 'px';
  })