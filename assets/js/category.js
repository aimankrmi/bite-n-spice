// list of breakfast recipes
const breakfastData = [
  {
    name: "Sausage Gravy Breakfast Lasagna",
    imgUrl: "../../assets/images/recipe/breakfast/lasagna.png",
    url: "../recipe/lasagna.html",
    imgAlt: "Sausage Gravy Breakfast Lasagna",
  },
  {
    name: "Hash Brown Omellete",
    imgUrl: "../../assets/images/recipe/breakfast/omelet.jpg",
    url: "#",
    imgAlt: "Hash Brown Omellete",
  },
  {
    name: "Oatmeal-Glazed Breakfast Cake",
    imgUrl: "../../assets/images/recipe/breakfast/oatmeal cake.png",
    url: "#",
    imgAlt: "Oatmeal-Glazed Breakfast Cake",
  },

  {
    name: "Burrito",
    imgUrl: "../../assets/images/recipe/breakfast/burito.png",
    url: "#",
    imgAlt: "Burrito",
  },
  {
    name: "Granola Cookies",
    imgUrl: "../../assets/images/recipe/breakfast/breakfast granola.png",
    url: "#",
    imgAlt: "Granola Cookies",
  },
  {
    name: "Sausage Crescent",
    imgUrl: "../../assets/images/recipe/breakfast/sausage crescent.jpg",
    url: "#",
    imgAlt: "Sausage Crescent",
  },
];

// list of dessert recipes
const dessertData = [
  {
    name: "Banana Cream Pudding",
    imgUrl: "../../assets/images/recipe/dessert/banana-cream-pudding.jpg",
    url: "../recipe/banana-pudding.html",
    imgAlt: "Banana Cream Pudding",
  },
  {
    name: "Glazed Mocha Chocolate Chip Cookies",
    imgUrl: "../../assets/images/recipe/dessert/cookies.jpg",
    url: "#",
    imgAlt: "Glazed Mocha Chocolate Chip Cookies",
  },
  {
    name: "Carrot and Pineapple Cake",
    imgUrl: "../../assets/images/recipe/dessert/carrot-pineapple-cake.jpg",
    url: "#",
    imgAlt: "Carrot and Pineapple Cake",
  },
  {
    name: "Crème Brûlée cupcake",
    imgUrl: "../../assets/images/recipe/dessert/creeme-brulee-cupcake.jpg",
    url: "#",
    imgAlt: "Crème Brûlée cupcake",
  },
  {
    name: "Cha Bang Ang",
    imgUrl: "../../assets/images/recipe/dessert/cha-bang-ang.jpg",
    url: "#",
    imgAlt: "Cha Bang Ang",
  },
  {
    name: "Tiramisu Cake",
    imgUrl: "../../assets/images/recipe/dessert/tiramisu-cake.jpg",
    url: "#",
    imgAlt: "Tiramisu Cake",
  },
];

// list of lunch recipes
const lunchData = [
  {
    name: "Lemony Chicken",
    imgUrl: "../../assets/images/recipe/lunch/lemony-chicken.jpg",
    url: "../recipe/lemony.html",
    imgAlt: "Lemony Chicken",
  },
  {
    name: "Buttermilk Chicken",
    imgUrl: "../../assets/images/recipe/lunch/buttermilk-chicken.jpg",
    url: "#",
    imgAlt: "Buttermilk Chicken",
  },
  {
    name: "Chili Rubbed Steak Tacos",
    imgUrl: "../../assets/images/recipe/lunch/steak-tacos.jpg",
    url: "#",
    imgAlt: "Chili Rubbed Steak Tacos",
  },
  {
    name: "Laksa Noodle Soup",
    imgUrl: "../../assets/images/recipe/lunch/laksa.jpg",
    url: "#",
    imgAlt: "Laksa Noodle Soup",
  },
  {
    name: "Chicken Rice",
    imgUrl: "../../assets/images/recipe/lunch/chicken-rice.jpg",
    url: "#",
    imgAlt: "Chicken Rice",
  },
  {
    name: "Vietnamese Roll",
    imgUrl: "../../assets/images/recipe/lunch/viatnamese-roll.jpg",
    url: "#",
    imgAlt: "Vietnamese Roll",
  },
];

// list of dinner recipes
const dinnerData = [
  {
    name: "Spaghetti Aglio e Olio",
    imgUrl: "../../assets/images/recipe/dinner/spaghetti.jpg",
    url: "../recipe/spaghetti.html",
    imgAlt: "Spaghetti Aglio e Olio",
  },
  {
    name: "Teriyaki Chicken and Broccoli",
    imgUrl: "../../assets/images/recipe/dinner/teriyaki-chicken.jpg",
    url: "#",
    imgAlt: "Teriyaki Chicken and Broccoli",
  },
  {
    name: "Chicken Tortilla",
    imgUrl: "../../assets/images/recipe/dinner/chicken-tortilla.jpg",
    url: "#",
    imgAlt: "Chicken Tortilla",
  },
  {
    name: "Chicken Satay with Peanut Sauce",
    imgUrl: "../../assets/images/recipe/dinner/sate-ayam.jpg",
    url: "#",
    imgAlt: "Chicken Satay with Peanut Sauce",
  },
  {
    name: "Lamb Chops with Rosemary Gravy",
    imgUrl: "../../assets/images/recipe/dinner/lamb-chops.jpg",
    url: "#",
    imgAlt: "Lamb Chops with Rosemary Gravy",
  },
  {
    name: "Char Kuey Teow",
    imgUrl: "../../assets/images/recipe/dinner/char-kuew-teow.jpg",
    url: "#",
    imgAlt: "Char Kuey Teow",
  },
];

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
  console.log(value);

  filteredRecipes.forEach((recipe) => {
    const isVisible = recipe.name.toLowerCase().includes(value);
    recipe.element.classList.toggle("d-none", !isVisible);
  });
});

if (breakfastRecipeContainer) {
  filteredRecipes = breakfastData.map((recipe) => {
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
} else if (dessertRecipeContainer) {
  filteredRecipes = dessertData.map((recipe) => {
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
  // });
} else if (lunchRecipeContainer) {
  filteredRecipes = lunchData.map((recipe) => {
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
  // });
} else if (dinnerRecipeContainer) {
  filteredRecipes = dinnerData.map((recipe) => {
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
}
