// vars
let menu = document.querySelector(".menu");
let burger = document.getElementById("burger");
let burgerSpan1 = document.querySelector('.bar1');
let burgerSpan2 = document.querySelector('.bar2');
let burgerSpan3 = document.querySelector('.bar3');
let bars = [burgerSpan1, burgerSpan2, burgerSpan3]

burger.addEventListener('click', openMenu)

function openMenu(){
	burger.classList.toggle('fix');
	menu.classList.toggle('showmenu');
	for(let bar of bars){
		bar.classList.toggle('change')
	}
}