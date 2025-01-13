const recipeTemplate = document.querySelector("[recipe-data-template]");
const breakfastRecipeContainer = document.querySelector(
  "[breakfast-recipe-data-container]"
);
const dessertRecipeContainer = document.querySelector(
  "[dessert-recipe-data-container]"
);
const dinnerRecipeContainer = document.querySelector(
  "[dinner-recipe-data-container]"
);
const lunchRecipeContainer = document.querySelector(
  "[lunch-recipe-data-container]"
);
const searchInput = document.querySelector("[recipe-search]");

let filteredRecipes = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  filteredRecipes.forEach((recipe) => {
    const isVisible = recipe.name.toLowerCase().includes(value);
    recipe.element.classList.toggle("d-none", !isVisible);
  });
});

if (breakfastRecipeContainer) {
  fetch("../../assets/data/breakfast.json")
    .then((res) => res.json())
    .then((data) => {
      filteredRecipes = data.map((recipe) => {
        const cardRecipe = recipeTemplate.content.cloneNode(true).children[0];

        const recipeUrl = cardRecipe.querySelector("[recipe-url]");
        const recipeImage = cardRecipe.querySelector("[recipe-img]");
        const recipeName = cardRecipe.querySelector("[recipe-name]");

        recipeUrl.href = recipe.url;
        recipeName.textContent = recipe.name;
        recipeImage.src = recipe.imgUrl;
        recipeImage.alt = recipe.imgAlt;

        breakfastRecipeContainer.append(cardRecipe);
        return {
          name: recipe.name,
          element: cardRecipe,
        };
      });
    });
} else if (dessertRecipeContainer) {
  fetch("../../assets/data/dessert.json")
    .then((res) => res.json())
    .then((data) => {
      filteredRecipes = data.map((recipe) => {
        const cardRecipe = recipeTemplate.content.cloneNode(true).children[0];

        const recipeUrl = cardRecipe.querySelector("[recipe-url]");
        const recipeImage = cardRecipe.querySelector("[recipe-img]");
        const recipeName = cardRecipe.querySelector("[recipe-name]");

        recipeUrl.href = recipe.url;
        recipeName.textContent = recipe.name;
        recipeImage.src = recipe.imgUrl;
        recipeImage.alt = recipe.imgAlt;

        dessertRecipeContainer.append(cardRecipe);
        return {
          name: recipe.name,
          element: cardRecipe,
        };
      });
    });
} else if (lunchRecipeContainer) {
  fetch("../../assets/data/lunch.json")
    .then((res) => res.json())
    .then((data) => {
      filteredRecipes = data.map((recipe) => {
        const cardRecipe = recipeTemplate.content.cloneNode(true).children[0];

        const recipeUrl = cardRecipe.querySelector("[recipe-url]");
        const recipeImage = cardRecipe.querySelector("[recipe-img]");
        const recipeName = cardRecipe.querySelector("[recipe-name]");

        recipeUrl.href = recipe.url;
        recipeName.textContent = recipe.name;
        recipeImage.src = recipe.imgUrl;
        recipeImage.alt = recipe.imgAlt;

        lunchRecipeContainer.append(cardRecipe);
        return {
          name: recipe.name,
          element: cardRecipe,
        };
      });
    });
} else if (dinnerRecipeContainer) {
  fetch("../../assets/data/dinner.json")
    .then((res) => res.json())
    .then((data) => {
      filteredRecipes = data.map((recipe) => {
        const cardRecipe = recipeTemplate.content.cloneNode(true).children[0];

        const recipeUrl = cardRecipe.querySelector("[recipe-url]");
        const recipeImage = cardRecipe.querySelector("[recipe-img]");
        const recipeName = cardRecipe.querySelector("[recipe-name]");

        recipeUrl.href = recipe.url;
        recipeName.textContent = recipe.name;
        recipeImage.src = recipe.imgUrl;
        recipeImage.alt = recipe.imgAlt;

        dinnerRecipeContainer.append(cardRecipe);
        return {
          name: recipe.name,
          element: cardRecipe,
        };
      });
    });
}
