import React from 'react';

const Recipe = ({ title, calories, ingredients, image }) => (
    <div className="recipe">
        <img className="recipe__image" src={image} alt={title} />
        <h2 className="recipe__title">{title}</h2>
        <div className="recipe__ingredient-box">
            <h3 className="recipe__ingredient-title">Ingredients :</h3>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="recipe__ingredient-item">{ingredient}</li>
                ))}
            </ul>
        </div>
        <p className="recipe__calorie">{calories.toFixed(3)} cal</p>
    </div>
);

export default Recipe;