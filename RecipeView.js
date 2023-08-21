import React, { useEffect, useState } from "react";
import Icon from "./Icon";

const RecipeView = ({ recipeId, onClose }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`/api/recipe.id/${recipeId}`);
        const data = await response.json();
        setRecipe(data.recipe);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="recipe-detail">
        <h2>LET'S COOK <button onClick={onClose} className="btn small-btn">X</button></h2>
        <img src={recipe.recipeImg} className="recipe-img"/>
        <h1 className="recipe-title">{recipe.title}</h1>
        <Icon type={recipe.dishType} />
        <p className="recipe-desc">{recipe.description}</p>
        <div className="keywords">
            {recipe.keywords.map((keyword) => (
            <div key={keyword.id} className="keyword">{keyword.label} </div>
            ))}
        </div>
        <div className="recipe-ingredients">
            <h3>INGREDIENTS</h3>
            <div>{recipe.ingredients.map((ingredient) => (<li key={ingredient.id}>{ingredient.label}</li>))}</div>

        </div>
        <div className="recipe-instructions">
            <h3>INSTRUCTIONS</h3>
            <p>{recipe.instructions}</p>
        </div>
      
      {/* Display other recipe details here */}
      
    </div>
  );
};

export default RecipeView;
