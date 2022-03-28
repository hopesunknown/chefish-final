import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";
// import './style.css';

export default function Inspo() {
    const [search, setSearch] = useState("");
    const [meal, setMeal] = useState();

    // function searchMeal(evt) {
    //     if(evt.key === "Enter")
    //     {

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => {setMeal(data.meals);setSearch("")})
        }, []);

        console.log(meal);

        function searchMeal(event) {
            if (event.key === "Enter") {

            }
        }

    return (
        <>
            <div className="main-inspo">
                <div className="heading">
                    <h1>Search Recipes</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque tempore unde sed ducimus voluptates illum!</h4>
                </div>
                <div className="searchBox">
                    <input 
                    type="search" className="search-bar" onChange={(e) => setSearch(e.target.value)} 
                    value={search} 
                    onKeyPress={searchMeal}/>
                </div>
                <div className="container">
                   {   
                    (meal === null) ? (<p className="notSearch">Not found</p>) : 
                         (meal.map((res) => {
                             return(
                            <MealItem data={res}/>)}))
                   }
                </div>
            </div>
        </>
    )
}