function getRandomMeal(e) {
  e.preventDefault();

  const url = "https://www.themealdb.com/api/json/v1/1/random.php";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += '<h2>' + json.meals[0].strMeal + '</h2>';
      results += '<p class = "mealID">Meal ID: ' + json.meals[0].idMeal + '. Recipe from ' + json.meals[0].strSource + '</p>';
      results += '<img src=' + json.meals[0].strMealThumb + '/preview>';
      results += '<h2 class = "ingredientHeader">Ingredients: </h2>';
      results += '<ul>';

      results += '<li class = ingredientList>' + json.meals[0].strIngredient1 + ' - ' + json.meals[0].strMeasure1 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient2 + ' - ' + json.meals[0].strMeasure2 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient3 + ' - ' + json.meals[0].strMeasure3 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient4 + ' - ' + json.meals[0].strMeasure4 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient5 + ' - ' + json.meals[0].strMeasure5 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient6 + ' - ' + json.meals[0].strMeasure6 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient7 + ' - ' + json.meals[0].strMeasure7 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient8 + ' - ' + json.meals[0].strMeasure8 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient9 + ' - ' + json.meals[0].strMeasure9 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient10 + ' - ' + json.meals[0].strMeasure10 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient11 + ' - ' + json.meals[0].strMeasure11 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient12 + ' - ' + json.meals[0].strMeasure12 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient13 + ' - ' + json.meals[0].strMeasure13 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient14 + ' - ' + json.meals[0].strMeasure14 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient15 + ' - ' + json.meals[0].strMeasure15 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient16 + ' - ' + json.meals[0].strMeasure16 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient17 + ' - ' + json.meals[0].strMeasure17 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient18 + ' - ' + json.meals[0].strMeasure18 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient19 + ' - ' + json.meals[0].strMeasure19 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient20 + ' - ' + json.meals[0].strMeasure20 + '</li>';

      let extraIndex = results.search('<li class = ingredientList> -');
      if (extraIndex !== -1)
      {
        results = results.substr(0, extraIndex);
      }

      extraIndex = results.search('<li class = ingredientList>null');
      if (extraIndex !== -1)
      {
        results = results.substr(0, extraIndex);
      }

      results += '</ul>';

      results += '<h2 class = recipeHeader>Recipe Instructions: </h2>';
      results += '<p class = recipe>' + json.meals[0].strInstructions + '</p>';



      document.getElementById("result").innerHTML = results;
    });

}

function getMealByID(e) {
  e.preventDefault();

  const mealID = document.getElementById("MealIDInput").value;
  const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealID;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";

      results += '<h2>' + json.meals[0].strMeal + '</h2>';
      results += '<p class = "mealID">Meal ID: ' + json.meals[0].idMeal + '. Recipe from ' + json.meals[0].strSource + '</p>';
      results += '<img src=' + json.meals[0].strMealThumb + '/preview>';
      results += '<h2 class = "ingredientHeader">Ingredients: </h2>';
      results += '<ul>';

      results += '<li class = ingredientList>' + json.meals[0].strIngredient1 + ' - ' + json.meals[0].strMeasure1 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient2 + ' - ' + json.meals[0].strMeasure2 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient3 + ' - ' + json.meals[0].strMeasure3 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient4 + ' - ' + json.meals[0].strMeasure4 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient5 + ' - ' + json.meals[0].strMeasure5 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient6 + ' - ' + json.meals[0].strMeasure6 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient7 + ' - ' + json.meals[0].strMeasure7 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient8 + ' - ' + json.meals[0].strMeasure8 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient9 + ' - ' + json.meals[0].strMeasure9 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient10 + ' - ' + json.meals[0].strMeasure10 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient11 + ' - ' + json.meals[0].strMeasure11 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient12 + ' - ' + json.meals[0].strMeasure12 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient13 + ' - ' + json.meals[0].strMeasure13 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient14 + ' - ' + json.meals[0].strMeasure14 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient15 + ' - ' + json.meals[0].strMeasure15 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient16 + ' - ' + json.meals[0].strMeasure16 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient17 + ' - ' + json.meals[0].strMeasure17 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient18 + ' - ' + json.meals[0].strMeasure18 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient19 + ' - ' + json.meals[0].strMeasure19 + '</li>';
      results += '<li class = ingredientList>' + json.meals[0].strIngredient20 + ' - ' + json.meals[0].strMeasure20 + '</li>';

      let extraIndex = results.search('<li class = ingredientList> -');
      if (extraIndex !== -1)
      {
        results = results.substr(0, extraIndex);
      }

      extraIndex = results.search('<li class = ingredientList>null');
      if (extraIndex !== -1)
      {
        results = results.substr(0, extraIndex);
      }

      results += '</ul>';

      results += '<h2 class = recipeHeader>Recipe Instructions: </h2>';
      results += '<p class = recipe>' + json.meals[0].strInstructions + '</p>';



      document.getElementById("result").innerHTML = results;
    });

}



function getMealCategories(e) {
  e.preventDefault();

  const url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      for (let i = 0; i < json.categories.length; ++i)
      {
        results += '<h2>' + json.categories[i].strCategory + '</h2>';
        results += '<img src=' + json.categories[i].strCategoryThumb + '>';
        results += '<p class=recipe>' + json.categories[i].strCategoryDescription + '</p>'
      }



      document.getElementById("result").innerHTML = results;
    });

}



document.getElementById('randomMeal').addEventListener('click', getRandomMeal);
document.getElementById('MealIDSubmit').addEventListener('click', getMealByID);
document.getElementById('listCategories').addEventListener('click', getMealCategories);
