import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Recipe from './components/Recipe';
import Search from './components/Search';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('chicken');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const APP_ID = "a5eef6ba";
  const APP_KEY = "074a02c32381ea42decb93b2552059b5";

  useEffect(() => {
    getRecipeData();
  }, [query]);

  const getRecipeData = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      setRecipes(data.hits);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Sorry! Recipes limit is reached. You can search 4 recipes in 1 minute");
    }
  };

  const updateSearch = event => {
    setSearch(event.target.value);
  };

  const getSearch = event => {
    event.preventDefault();
    if (search) {
      setQuery(search);
      setSearch('');
    }
  };

  let recipesData = (
    <>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          ingredients={recipe.recipe.ingredientLines}
          image={recipe.recipe.image}
        />
      ))}
    </>
  );

  if (loading && !error) {
    recipesData = <div>loading...</div>;
  }

  if (error) {
    recipesData = <div>{error}</div>;
  }

  return (
    <main>
      <div>
        <Search
          onChangeHandler={updateSearch}
          onSubmitHandler={getSearch}
          value={search}
        />
      </div>
      <section>
        {recipesData}
      </section>
    </main>
  );
};

export default App;
