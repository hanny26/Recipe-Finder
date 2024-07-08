// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (query) => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          query,
          apiKey: '4f76f71c8d2d4b6dba84d66c86cf8ff1', // Replace with your API key from Spoonacular
        },
      });
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="app">
      <Header />
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
