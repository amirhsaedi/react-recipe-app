import React, { useEffect, useState } from 'react';

const App = () => {
  const [resipe, setResipe] = useState([]);

  useEffect(() => {
    getRecipeData();
  }, []);

  const getRecipeData = async () => {
    const recipeData = await axios.get('');
  };

  return (
    <div>hello react</div>
  );
};

export default App;
