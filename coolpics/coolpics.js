const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
   const menu = document.querySelector("#menu-links");
   menu.classList.toggle("hide");
}

function handleResize() {
   const menu = document.querySelector("#menu-links");
   if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
   }
   else {
      menu.classList.add("hide");
   }
}

handleResize();
window.addEventListener("resize", handleResize);