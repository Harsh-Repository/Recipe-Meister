import React, { useState } from "react";
import List from "./List";
import InputTags from "./InputTags";
import { v4 as uuidv4 } from "uuid"
import Input from "./Input";

const AddRecipeView = ({ onAdd, onClose }) => {
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    keywords: [],
    instructions: "",
    ingredients: [],
    dishType: "Vegetarian",
    recipeImg: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleAddRecipe = () => {
    if (recipeData.title.trim() === "" || recipeData.ingredients.length === 0) {
      alert("Please fill in the required fields.");
      return;
    }
    const keywordsWithIds = recipeData.keywords.map((keyword) => ({
      id: uuidv4(),
      label: keyword,
    }));
    const ingredientsWithIds = recipeData.ingredients.map((ingredient) => ({
      id: uuidv4(),
      label: ingredient,
    }));
    setRecipeData({
      ...recipeData,
      keywords: keywordsWithIds,
      ingredients: ingredientsWithIds,
    });
    onAdd(recipeData);
  };

  return (
    <>
    <div className="add-recipe">
      <h2>Add a Recipe</h2>
      <label>Title</label>
      <Input
              type="text"
              name="title"
              value={recipeData.description}
              onChange={handleInputChange}
              placeholder="FIND RECIPES"
            />
      {/* <input type="text" name="title" value={recipeData.title} onChange={handleInputChange} /> */}
      <label>Description</label>
      <input type="text" name="description" value={recipeData.description} onChange={handleInputChange} />
      <label>Keywords</label>
      <input type="text" name="keywords" value={recipeData.keywords} onChange={handleInputChange} />
      <label>Type</label>
      <input type="text" name="dishType" value={recipeData.dishType} onChange={handleInputChange} />
      <label>Image Url</label>
      <input type="text" name="recipeImg" value={recipeData.recipeImg} onChange={handleInputChange} />
      <label>Ingredients</label>
      <input type="text" name="ingredients" value={recipeData.ingredients} onChange={handleInputChange} />
      <label>Instructions</label>
      <input type="text" name="instructions" value={recipeData.instructions} onChange={handleInputChange} />

      <button onClick={handleAddRecipe} className="buttons btn small-btn">Save</button>
      <button className="buttons btn btn-black small-btn" onClick={onClose}>Exit</button>
    </div>
    </>
  );
};

export default AddRecipeView;
