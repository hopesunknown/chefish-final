import React from 'react'

export default function RecipeCard({ recipe }) {
    const { idMeal, strMeal, strArea, strMealThumb } = recipe;
        
        return (
            <div className="recipe-card">
                <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="card-image"
                />
                <div className="card-body">
                    <h3 className="meal-title">{strMeal}</h3>
                    <span className="recipe-category">{strArea}
                    </span>
                    <br/><br/><br/>
                    <a 
                    href={"https://www.themealdb.com/meal/" + idMeal} 
                    target="_blank"
                    rel="noreferrer"
                    className="instructions-link">Instructions</a>
                </div>
            </div>
        )
    };