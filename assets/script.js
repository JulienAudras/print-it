let image = document.getElementById("bannerImg");
console.log ("image : ", image);

let tagLine = document.getElementById("bannerTxt");

let banner = document.getElementById("banner");


// const image1 = document.createElement("img");
// image1.src="./assets/images/slideshow/slide1.jpg";
// image.appendChild(image1);

// const image2 = document.createElement("img");
// image2.src="./assets/images/slideshow/slide2.jpg";
// image.appendChild(image2);

// const image3 = document.createElement("img");
// image3.src="./assets/images/slideshow/slide3.jpg";
// image.appendChild(image3);

// const image4 = document.createElement("img");
// image4.src="./assets/images/slideshow/slide4.png";
// image.appendChild(image4);

// console.log (image4);


// const slides = [
// 	{
// 		image : image1,
// 		tagLine : tagLine.innerHtml = "Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		image : image2,
// 		tagLine : tagLine.innerHtml = "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	
// 	},
// 	{
// 		image : image3,
// 		tagLine :"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		image : image4,
// 		tagLine :"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ]

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const slidesLenght = slides.length;
console.log("Number of slides : ", slidesLenght)


console.log("current slide : ", slides[0]);

const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

function Update(i){
	image.src = "./assets/images/slideshow/" + slides[i].image;
	tagLine.innerHTML = slides[i].tagLine;
	console.log ("image : ", image);
}
console.log(Update);
Update(0);

let currentSlide = 0;
console.log(currentSlide);

let SelectedDot = document.getElementsByClassName("dot_selected");

function dots(){
	const dots = document.querySelector('.dots');
	for (let i = 0; i < slidesLenght; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dot.setAttribute("id", i + 1);
		dots.appendChild(dot);
		console.log("trouver id : ", dot);
		if (i==0){
			dots.children[i].classList.add('dot_selected');
		}	
		dot.addEventListener('click', function(){
		currentSlide = i;
		Update(currentSlide);
		selected();
})
		// else{
		// 	dots.children[i].classList.remove('dot_selected');
		// }
	}
}

console.log('dotLenght', dots.length);
dots();

function selected() {
    const dot = document.getElementsByClassName('dot');
    for (let i = 0; i < slidesLenght; i++) 
	if (i==currentSlide){
        dot[i].classList.add('dot_selected');
    }
	else{
    dot[i].classList.remove('dot_selected');
 }
}


// function dotSelected(){
// 	const dot = document.getElementsByClassName('dot');
// 	// for (let i = 0; i < slidesLenght; i++) {
// 	// 	dot[i].classList.remove('dot_selected');
// 	// }
// 	while 
// 	dot[i].classList.add('dot_selected');
// }






arrowLeft.addEventListener('click', function() {
	console.log('clic gauche');
	if (currentSlide == 0){
		currentSlide = 3;
		Update(currentSlide);
	}
	else{
	currentSlide = currentSlide-1;
	console.log(currentSlide);
	Update(currentSlide);
	}
	selected();
});

arrowRight.addEventListener('click', function() {
	console.log('clic droit');
	if (currentSlide == slidesLenght -1){
		currentSlide = 0;
		Update(currentSlide);
	}
	else{
	currentSlide = currentSlide+1;
	console.log(currentSlide);
	Update(currentSlide);
	}
	selected();
	
	

	// image.src = "./assets/images/slideshow/" + slides[1].image;
	// console.log ("image : ", image);
	
	// tagLine.innerHTML = slides[1].tagLine;

});

// const dot = document.getElementsByClassName("dot");
// // console.log(dot);

// const dotClasses = dot.classList;
// console.log (dotClasses);

// const dotOne = document.getElementById("1");
// dotOne.addEventListener('click', function(){
// 	currentSlide = 0;
// 	Update(currentSlide);
// 	selected();
// })

// const dotTwo = document.getElementById("2");
// dotTwo.addEventListener('click', function(){
// 	currentSlide = 1;
// 	Update(currentSlide);
// 	selected();
// })

// const dotThree = document.getElementById("3");
// dotThree.addEventListener('click', function(){
// 	currentSlide = 2;
// 	Update(currentSlide);
// 	selected();
// })

// const dotFour = document.getElementById("4");
// dotFour.addEventListener('click', function(){
// 	currentSlide = 3;
// 	Update(currentSlide);
// 	selected();
// })


// En cas de fonction asynchrone essayer plutot cette boucle pour targetter id
// dot.addEventListener("click", function (e) {
// 	currentSlide = e.target.id;
// 	update(currentSlide);
//   });




