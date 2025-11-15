import recipes from './recipes.mjs'

const rName = document.querySelector(".recipe-name");
const rDescription = document.querySelector(".recipe-description");
const rImage = document.querySelector(".recipe-image");
const rTags = document.querySelector(".tag-container");
const recipe = recipes.at(-1);

rName.textContent = recipe.name;
rDescription.textContent = recipe.description;
rImage.src = recipe.image;
recipe.tags.forEach((tag) => {
    const html = `<p class="recipe-type">${tag}</p>`
    rTags.innerHTML += html;
});
