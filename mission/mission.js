// Get the select element
const themeSelector = document.querySelector("select");

// Change the theme depending on what has been selected
function changeTheme() {

   // The image at the bottom of the page
   const image = document.querySelector("img");

   if (themeSelector.value === "Dark") {
      document.body.classList.add("dark");
      image.src = "byui-logo_white.png";
   }
   else if (themeSelector.value === "Light") {
      document.body.classList.remove("dark");
      image.src = "byui-logo_blue.webp";
   }

}

// Listen for the theme to be changed
themeSelector.addEventListener('change', changeTheme);