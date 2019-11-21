var menu = document.getElementById("menu");
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");

nav1.style.top = "-5%";
nav2.style.top = "-5%";
nav3.style.top = "-5%";

nav1.innerHTML = "Capture";
nav2.innerHTML = "Perform";
nav3.innerHTML = "Digital";
b1.innerHTML = "Book Appointment";
b2.innerHTML = "Studio Recording";
b3.innerHTML = "Capture Live Performance";


menu.style.transform = "rotate(0deg)";
menu.onclick = showNav;

function showNav() {
  if (menu.style.transform == "rotate(0deg)") {
    menu.style.transform = "rotate(-90deg)";
    nav1.style.top = "2.5%";
    nav2.style.top = "2.5%";
    nav3.style.top = "2.5%";

  } else {
    menu.style.transform = "rotate(0deg)";
    nav1.style.top = "-5%";
    nav2.style.top = "-5%";
    nav3.style.top = "-5%";

  }
}
