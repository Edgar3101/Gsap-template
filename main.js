
let arrays= ['CAVIDEA', '60 años',  'Cámara Venezolana de la Industria de Alimentos'];
var animation = new TimelineMax({ repeat: -1, repeatDelay: 0.6 })
let title= document.querySelector('.title1');

function createlayer(){
	arrays.forEach(value =>{
		let layer= document.createElement('div');
		layer.classList.add('bar')
		layer.innerHTML= value;
		title.appendChild(layer);
	})
}
function animateText(){
	let layers= document.querySelectorAll(".title1 div")
	layers.forEach(function(element, index){
		animation.fromTo(element, {opacity: 0, scale:0}, {scale:1, y:0, opacity:1, repeat:1, yoyo: true, yoyoEase: true, repeatDelay: 1.5});
		gsap.set(".title1", {visibility: 'visible'})
	})
}
createlayer()
animateText()

function myfunction(){
	if ((window.pageYOffset) >= 200){
		gsap.to(".navbar", {duration: 0.5, y: -100});
		

	}if((window.pageYOffset) < 200){
		gsap.to(".navbar", {duration: 0.5, y: +11});
	}
}
function myfunction2(){
	if((window.pageYOffset) >= 300){
		gsap.to('.icon1', {duration: 0.9,  width:500, height: 441, opacity: 1})
	}if((window.pageYOffset) < 100){
		gsap.to('.icon1',{height:0, width:0})
	}

}
function myfunction3(){
	if((window.pageYOffset) >= 850){
		gsap.to('.icon2', {duration: 1,  width:500, height: 441, x:0})
	}if((window.pageYOffset) < 650){
		gsap.to('.icon2',{height:0, width:0, x:500})
	}

}
function myfunction4(){
	if((window.pageYOffset) >= 1100){
		gsap.to('.icon3', {duration: 1,  width:500, height: 441, x:0})
	}if((window.pageYOffset) < 950){
		gsap.to('.icon3',{height:0, width:0, x:-100})
	}


}
window.addEventListener('scroll', myfunction)
window.addEventListener('scroll', myfunction2)
window.addEventListener('scroll', myfunction3)
window.addEventListener('scroll', myfunction4)
