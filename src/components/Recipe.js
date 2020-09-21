import React from 'react';

const Recipe = ({ title, calories, ingredients, image }) => (
    <div>
        <h2>{title}</h2>
        <p>{calories.toFixed(3)}</p>
        <ol>
            {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
            ))}
        </ol>
        <img src={image} alt={title} />
    </div>
);

export default Recipe;