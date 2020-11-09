
let menu = document.querySelector(".menu");
let burger = document.querySelector("#burger");
let burgerSpan1 = document.querySelector('bar1');
let burgerSpan2 = document.querySelector('bar2');
let burgerSpan3 = document.querySelector('bar3');
let slide = document.querySelector('.s1');
let slides = document.querySelector('.slides');


burger.onclick = function openMenu(){
    menu.classList.toggle('showmenu');
    burgerSpan1.classList.toggle('change');
    burgerSpan2.classList.toggle('change');
    burgerSpan3.classList.toggle('change');
    burger.classList.toggle('fix');
}


let cliXdown = 0;
let cliXup = 0;

slides.addEventListener('mousedown', function(event){
   cliXdown = event.clientX;
})
slides.addEventListener('mouseup', function(event){
  cliXup = event.clientX;
  if (cliXup < cliXdown) {
    slide.style.marginLeft -= 33 + '%';
  } 
  else if (cliXup > cliXdown) {
    slide.style.marginLeft += 33 + '%';
  } 
})



