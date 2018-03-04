const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.7;

// Set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  //Reset opacity
  imgs.forEach(img => (img.style.opacity = 1));

  //change img to click img
  current.src = e.target.src;

  // add fade in class
  current.classList.add("fade-in");

  // remove fadeIn class after .5 seconds
  setTimeout(() => current.classList.remove("fade-in"), 500);

  //change the opacity
  e.target.style.opacity = opacity;
}
