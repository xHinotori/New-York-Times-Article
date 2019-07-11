const navScrolled = document.querySelector(".scrolled-nav");
const navDefault = document.querySelector("nav");

function navChange() {
  if (document.documentElement.scrollTop > 900){
    navScrolled.classList.remove("hide-nav");
    navDefault.classList.add("hide-nav");
  } else if (document.documentElement.scrollTop < 900) {
    navScrolled.classList.add("hide-nav");
    navDefault.classList.remove("hide-nav")
  }
}

window.onscroll = function() {navChange()}
