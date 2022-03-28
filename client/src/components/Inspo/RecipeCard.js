import React from 'react'

export default function RecipeCard({ recipe }) {
    const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
        
        return (
            <div className="recipe-card">
                <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="card-image"
                />
                <div className="card-body">
                    <span className="recipe-category">{strCategory}</span>
                    <h3>{strMeal}</h3>
                    <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Instructions</a>
                </div>
            </div>
        )
    };