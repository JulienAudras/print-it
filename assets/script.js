// // // // Constantes et variables // // // //

let image = document.getElementById("bannerImg");

let tagLine = document.getElementById("bannerTxt");

let banner = document.getElementById("banner");

const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const slidesLenght = slides.length;

const arrowLeft = document.getElementById("arrowLeft");

const arrowRight = document.getElementById("arrowRight");

// // // // Fonction mise à jour de i// // // //

function update(i) {
  image.src = "./assets/images/slideshow/" + slides[i].image;
  tagLine.innerHTML = slides[i].tagLine;
}
update(0);

let currentSlide = 0;

// // // // Fonction creation des bullets points// // // //

let dotSelected = document.getElementsByClassName("dot_selected");

function createDots() {
  const dots = document.querySelector(".dots");
  for (let i = 0; i < slidesLenght; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("id", i + 1);
    dots.appendChild(dot);
    if (i == 0) {
      dots.children[i].classList.add("dot_selected");
    }
    dot.addEventListener("click", function () {
      currentSlide = i;
      update(currentSlide);
      selectedDot();
    });
  }
}

createDots();

// // // // Fonction de coloration du bullet point correspondant à la slide// // // //

function selectedDot() {
  const dot = document.getElementsByClassName("dot");
  for (let i = 0; i < slidesLenght; i++)
    if (i == currentSlide) {
      dot[i].classList.add("dot_selected");
    } else {
      dot[i].classList.remove("dot_selected");
    }
}

// // // // Flêches droite et gauche // // // //

arrowLeft.addEventListener("click", function () {
  console.log("clic gauche");
  if (currentSlide == 0) {
    currentSlide = slidesLenght - 1;
    update(currentSlide);
  } else {
    currentSlide = currentSlide - 1;
    update(currentSlide);
  }
  selectedDot();
});

arrowRight.addEventListener("click", function () {
  console.log("clic droit");
  if (currentSlide == slidesLenght - 1) {
    currentSlide = 0;
    update(currentSlide);
  } else {
    currentSlide = currentSlide + 1;
    update(currentSlide);
  }
  selectedDot();
});
