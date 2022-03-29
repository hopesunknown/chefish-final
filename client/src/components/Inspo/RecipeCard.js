import React from 'react'

export default function RecipeCard({ recipe }) {
    const { idMeal, strMeal, strCategory, strArea, strMealThumb } = recipe;
        
        return (
            <div className="recipe-card">
                <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="card-image"
                />
                <div className="card-body">
                    <span className="recipe-category">{strArea}</span>
                    <h3 className="meal-title">{strMeal}</h3>
                    <a 
                    href={"https://www.themealdb.com/meal/" + idMeal} 
                    target="_blank"
                    className="instructions-link">Instructions</a>
                </div>
            </div>
        )
    };