import React from 'react'

export default function Inspo() {

    const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
});


// get meal list that matches with the ingredients
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            mealList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            mealList.classList.add('notFound');
        }

        mealList.innerHTML = html;
    });
}


// get recipe of the meal
function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}

// create a modal
function mealRecipeModal(meal){
    console.log(meal);
    meal = meal[0];
    let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}
  return (<>
    <div className="container">
    <div className="meal-wrapper">
      <div className="meal-search">
        <h2 className="title">Find Meals For Your Ingredients</h2>

        <div className="meal-search-box">
          <input 
          type="text" class="search-control" placeholder="Enter an ingredient" 
          id ="search-input" />
          <button 
          type="submit" 
          className= "search-btn btn" id="search-btn">
            <i className= "fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className= "meal-result">
        <h2 className= "title">Your Search Results:</h2>
        <div id= "meal">
          <!-- meal item -->
          <!-- <div className= "meal-item">
            <div className= "meal-img">
              <img src="food.jpg" alt="food" />
            </div>
            <div className= "meal-name">
              <h3>Potato Chips</h3>
              <a href = "#" className= "recipe-btn">Get Recipe</a>
            </div>
          </div> -->
          <!-- end of meal item -->
        </div>
      </div>


      <div class = "meal-details">
        <!-- recipe close btn -->
        <button type = "button" class = "btn recipe-close-btn" id = "recipe-close-btn">
          <i class = "fas fa-times"></i>
        </button>

        <!-- meal content -->
        <div class = "meal-details-content">
          <!-- <h2 class = "recipe-title">Meals Name Here</h2>
          <p class = "recipe-category">Category Name</p>
          <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo blanditiis quis accusantium natus! Porro, reiciendis maiores molestiae distinctio veniam ratione ex provident ipsa, soluta suscipit quam eos velit autem iste!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam voluptatibus ad obcaecati magnam, esse numquam nisi ut adipisci in?</p>
          </div>
          <div class = "recipe-meal-img">
            <img src = "food.jpg" alt = "">
          </div>
          <div class = "recipe-link">
            <a href = "#" target = "_blank">Watch Video</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
