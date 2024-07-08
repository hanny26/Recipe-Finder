import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipe-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="recipe-card bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-xl"
        >
          <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
