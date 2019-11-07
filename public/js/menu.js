const navActive= ()=>{
	let burger = document.querySelector('.burger');
	let nav = document.querySelector('.nav-links');
	let lis = document.querySelectorAll('.nav-links li');
	//cick to show nav
	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');
		//add animation for li
		lis.forEach( (li,index) =>{
			if(li.style.animation){
				li.style.animation='';
			}else{
			li.style.animation = `navliFade 1s ease ${index/7+0.2}s forwards`;					
			}
		});
		//change burger when click
		burger.classList.toggle('toggle');
	});		
}
navActive();

// //chiều dài cả trang
// let documentHeight=document.documentElement.scrollHeight;		
// //chiều cao của màn hình trình duyệt		
// let innerHeight=window.innerHeight;	

//them animation cho nav li
window.addEventListener('scroll',()=>{
		//do dai document da doc duoc
		let scrolled=window.scrollY;
		let nav=document.querySelector('nav');
		nav.classList.add('scrolled-header');
		if(scrolled<625){
			nav.classList.remove('scrolled-header');
		}
})

//carousel
$('.header .h-right').owlCarousel({
	animateIn:'rollIn',
	animateOut:'rollOut',
	items:1,
	loop:true,
	autoplay:true,
	margin:1,
	smartSpeed:500
});



