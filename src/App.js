import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Recipe from './components/Recipe';
import Search from './components/Search';
import Spinner from './components/Spinner';

import './style/master.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('hamburger');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const APP_ID = "a5eef6ba";
  const APP_KEY = "074a02c32381ea42decb93b2552059b5";

  useEffect(() => {
    getRecipeData();

    // eslint-disable-next-line
  }, [query]);

  const getRecipeData = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      setRecipes(data.hits);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Sorry! Recipes limit is reached. You can search 4 recipes in a minute.");
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

  const deleteSearchValue = event => {
    event.preventDefault();
    setSearch('');
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
    recipesData = <Spinner />;
  }

  if (error) {
    recipesData = <div className="app__error">{error}</div>;
  }

  return (
    <main className="app">
      <h1 className="app__title">Recipe application</h1>
      <Search
        onChangeHandler={updateSearch}
        onSubmitHandler={getSearch}
        value={search}
        deleteSearchValue={deleteSearchValue}
      />
      <section className="app__recipe">
        {recipesData}
      </section>
    </main>
  );
};

export default App;
