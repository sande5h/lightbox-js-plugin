/*
Plugin Name : Sandy lightBox
Plugin Version : 0.5.9
Plugin Author : Sandesh Bhusal
*/

//function to include html popup
function includePopup() {
  let html =
    '<div id="i-popup"><span class="close" onClick="closePopup()"><img id="n-pop"src="./btn/close.png" alt="" ;"></span><img id="left-arrow"src="./btn/left-arrow.png"alt="logo"><img id="right-arrow" src="./btn/right-arrow.png"alt="logo"><img id="main-pop-image" src="/images/1.jpg" alt="logo" ></div>';

  let popdiv = document.createElement("div");
  popdiv.innerHTML = html;
  

  document.body.insertBefore(popdiv, document.body.firstChild); // adding as first div
}

//global declare
let img;
var current;

// to init plugin
function imagePopupInit(target) {
  img = document.getElementsByClassName(target);

  //iterating through images
  for (var i = 0; i < img.length; i++) {
    img[i].style.cursor = "pointer";

    img[i].addEventListener("click", function () {
      document.getElementById("main-pop-image").src = this.src;
      document.getElementById("i-popup").style.display = "block";
      checkArrow();
    });
  }

  includePopup();

  //work to perform on click event
  document.getElementById("right-arrow").addEventListener("click", function () {
    next();
  });
  document.getElementById("left-arrow").addEventListener("click", function () {
    prev();
  });
}

//function to close the popup
function closePopup() {
  document.getElementById("main-pop-image").src = "";
  document.getElementById("i-popup").style.display = "none";
}

//function to get current image number or array number
function getCurrentImage() {
  for (var i = 0; i < img.length; i++) {
    if (img[i].src == document.getElementById("main-pop-image").src) {
      current = i;
    }
  }
}

//function to assign next image to main pop image
function next() {
  getCurrentImage();
  current++;
  document.getElementById("main-pop-image").src = img[current].src;
  checkArrow();
}

//function to assign previous image to main pop image
function prev() {
  getCurrentImage();
  current--;
  document.getElementById("main-pop-image").src = img[current].src;
  checkArrow();
}

/*
for visibility of the next and prevous arrow

for example : 
If the current image is first image then the prev arrow will be hidden and so on.

*/

function checkArrow() {
  getCurrentImage();
  if (current == "0") {
    document.getElementById("left-arrow").style.display = "none";
    document.getElementById("right-arrow").style.display = "block";
  } else if (current == img.length - 1) {
    document.getElementById("right-arrow").style.display = "none";
    document.getElementById("left-arrow").style.display = "block";
  } else {
    document.getElementById("right-arrow").style.display = "block";
    document.getElementById("left-arrow").style.display = "block";
  }
}
