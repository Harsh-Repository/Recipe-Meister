import React from "react";
import Icon from "./Icon";

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <>
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.recipeImg} className="recipe-img"/>
      <div className="details">
        <h2>{recipe.title}</h2>
        <h3>{recipe.description}</h3>
        <div className="keywords">
            {recipe.keywords.map((keyword) => (
            <div key={keyword.id} className="keyword">{keyword.label} </div>
            ))}
        </div>
      </div>
      <Icon type={recipe.dishType} />
      {/* Display other recipe summary details here */}
    </div>
    </>
  );
};

export default RecipeCard;
