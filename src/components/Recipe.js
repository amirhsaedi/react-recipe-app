import React from 'react';

const Recipe = ({ title, calories, ingredients, image }) => (
    <div className="recipe">
        <h2 className="recipe__title">{title}</h2>
        <p className="recipe__calorie">{calories.toFixed(3)}</p>
        <ol className="recipe__ingredient">
            {ingredients.map((ingredient, index) => (
                <li key={index} className="recipe__ingredient-item">{ingredient}</li>
            ))}
        </ol>
        <img className="recipe__image" src={image} alt={title} />
    </div>
);

export default Recipe;