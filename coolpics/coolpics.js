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

const gallery = document.querySelector('.gallery');
const modal = document.createElement("dialog");

modal.innerHTML = "<img><button class='close-viewer'>X</button>";
document.body.appendChild(modal);

const modalImage = modal.querySelector("img");
const closeButton = modal.querySelector("button");

gallery.addEventListener("click", function(event) {
   const image = event.target.closest('img');
   const src = image.getAttribute("src");
   const baseSrc = src.split("-")[0];
   const fullSrc = baseSrc + "-full.jpeg";
   modalImage.setAttribute('src', fullSrc);
   modal.showModal();
});

closeButton.addEventListener("click", () => modal.close());

modal.addEventListener('click', (event) => {
   if (event.target === modal) {
      modal.close();
   }
});