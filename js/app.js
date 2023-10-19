const images = [
  {
    image: "./img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "./img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "./img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "./img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "./img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const carouselDOMElement = document.querySelector(".carousel");

for (let i = 0; i < images.length; i++) {
  const currentImage = images[i];
  const imgString = `
    <div class="carousel__img relative">
                <img class="img " src="${currentImage.image}">
                <div class="absolute img__description">
                    <h3>${currentImage.title}</h3>
                    <p>${currentImage.text}</p>
                </div>
            </div>
    `;
  carouselDOMElement.innerHTML += imgString;
}

let actualImgIdx = 0;
const carouselImgDOMElements = document.getElementsByClassName("carousel__img");
const firstImageDOMElement = carouselImgDOMElements[actualImgIdx];
firstImageDOMElement.classList.add("active");

const thumbnailImgDomElements = document.getElementsByClassName('col');
const firstThumbnailOpacityDomElement = thumbnailImgDomElements[actualImgIdx];
firstThumbnailOpacityDomElement.classList.add('brightness-1');

const rightArrowDOMElement = document.querySelector(".right-arrow");

rightArrowDOMElement.addEventListener("click", function () {
  const actualImageDOMElement = carouselImgDOMElements[actualImgIdx];
  actualImageDOMElement.classList.remove("active");
  const actualThumbnailOpacityDomElement = thumbnailImgDomElements[actualImgIdx];
  actualThumbnailOpacityDomElement.classList.remove('brightness-1');
 
  // Se sono all'ultimo elemento
  if (actualImgIdx === (carouselImgDOMElements.length - 1)) {
    actualImgIdx = 0;
  } else {
    actualImgIdx++;
  }
  const nextImageDOMElement = carouselImgDOMElements[actualImgIdx];
  nextImageDOMElement.classList.add("active");
  
//   thumbnail
  const nextThumbnailDomElement = thumbnailImgDomElements[actualImgIdx];
  nextThumbnailDomElement.classList.add('brightness-1');
})

const leftArrowDOMElement = document.querySelector(".left-arrow");

leftArrowDOMElement.addEventListener('click', function (){
    const actualImageDOMElement = carouselImgDOMElements[actualImgIdx];
    actualImageDOMElement.classList.remove('active');

    // thumbnail
    const actualThumbnailOpacityDomElement = thumbnailImgDomElements[actualImgIdx];
    actualThumbnailOpacityDomElement.classList.remove('brightness-1');

    // Se sono al primo elemento
    if(actualImgIdx === 0){
        actualImgIdx = (carouselImgDOMElements.length - 1);
    } else {
        actualImgIdx--;
    }
    const prevImageDOMElement = carouselImgDOMElements[actualImgIdx];
    prevImageDOMElement.classList.add("active");

    // thumbnail
    const prevThumbnailDomElement = thumbnailImgDomElements[actualImgIdx];
    prevThumbnailDomElement.classList.add('brightness-1');
})