
let menu = document.getElementsByClassName("menu")[0];
let burger = document.getElementById("burger");
let burgerSpan1 = document.getElementsByClassName('bar1')[0];
let burgerSpan2 = document.getElementsByClassName('bar2')[0];
let burgerSpan3 = document.getElementsByClassName('bar3')[0];

burger.onclick = function openMenu(){
    menu.classList.toggle('showmenu');
    burgerSpan1.classList.toggle('change');
    burgerSpan2.classList.toggle('change');
    burgerSpan3.classList.toggle('change');
    burger.classList.toggle('fix');
}



