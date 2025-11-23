import recipes from './recipes.mjs'

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function recipeTemplate(recipe) {
    return `<figure class="recipe">
    <img src="${recipe.image}" alt="Image of ${recipe.name}" />
    <figcaption>
        <ul class="recipe__tags">
            ${tagsTemplate(recipe.tags)}
        </ul>
        <h2><a href="#">${recipe.name}</a></h2>
        <p class="recipe__ratings>
            ${ratingTemplate(recipe.rating)}
        </p>
        <p class="recipe__description">
            ${recipe.description}
        </p>
    </figcaption>
    </figure>`;
}

function tagsTemplate(tags) {
    let html = ``;
    tags.forEach(tag => {
        html += `<li>${tag}</li>`
    });
    return html;
}

function ratingTemplate(rating) {
    let html = `<span
        class="rating"
        role="img"
        aria-label="Rating: ${rating} out of 5 stars"
    >`;

    for (let i = 1; i < 6; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        }
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}

function renderRecipes(recipeList) {
    const container = document.querySelector(".recipe-container");
    container.innerHTML = ``;
    recipeList.forEach(recipe => container.innerHTML += recipeTemplate(recipe));
}

function init() {
    renderRecipes(recipes);
}
init();

function filterRecipes(query) {
    return recipes.filter((recipe) => 
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.tags.find((item) => item.toLowerCase().includes(query.toLowerCase())) ||
        recipe.description.toLowerCase().includes(query.toLowerCase())
    );
}

const input = document.querySelector("#search-bar");
const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    event.preventDefault();
    const query = input.value;
    let recipeList = filterRecipes(query);
    if (query === "") {
        recipeList = recipes;
    }
    renderRecipes(recipeList);
});
