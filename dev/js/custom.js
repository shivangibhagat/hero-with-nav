// Togglr active classes
function toggleActive() {
  document.getElementById("body").classList.toggle("active");
  document.getElementById("navbar-toggler-icon").classList.toggle("active");
  document.getElementById("navbarToggler").classList.toggle("active");
}

// cursor with circle
let bigBall = document.querySelector(".cursor__ball");
let hoverables = document.querySelectorAll(".hoverable");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < hoverables.length; i++) {
  hoverables[i].addEventListener("mouseenter", onMouseHover);
  hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to(bigBall, 0.4, {
    x: e.pageX - 15,
    y: e.pageY - 15,
  });
}

// Hover an element
function onMouseHover() {
  TweenMax.to(bigBall, 0.3, {
    scale: 3,
  });
}
function onMouseHoverOut() {
  TweenMax.to(bigBall, 0.3, {
    scale: 1,
  });
}
