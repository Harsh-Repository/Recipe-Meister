import React, { useState, useEffect, useReducer } from "react";
import RecipeCard from "./components/RecipeCard";
import AddRecipeView from "./components/AddRecipe";
import RecipeView from "./components/Recipe";
import Input from "./components/Input";

const initialState = {
  showUI: "home-view",
  recipes: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_RECIPES":
      return { ...state, recipes: action.payload };
    case "SHOW_ADD_RECIPE":
      return { ...state, showUI: "add-recipe-view" };
    case "SHOW_RECIPE":
      return { ...state, showUI: "recipe-view", selectedRecipeId: action.payload };
    case "SHOW_HOME":
      return { ...state, showUI: "home-view" };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { showUI, recipes, selectedRecipeId } = state;
  const [searchInput, setSearchInput] = useState(""); 

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("/api/recipes");
      const data = await response.json();
      dispatch({ type: "SET_RECIPES", payload: data });
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="App recipe-meister">
      {showUI === "home-view" && (
        <div>
          <h1>Recipe Meister</h1>
          <div id="controls">
            <Input
              type="text"
              name="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="FIND RECIPES"
            />
            <button onClick={() => dispatch({ type: "SHOW_ADD_RECIPE" })} className="btn btn-black">Add a Recipe</button>
          </div>
          
          <div id="home-view">
            {recipes
              .filter((recipe) =>
                recipe.title.toLowerCase().includes(searchInput.toLowerCase())
              )
              .map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={() => dispatch({ type: "SHOW_RECIPE", payload: recipe.id })}
                />
              ))}
          </div>
        </div>
      )}

      {showUI === "add-recipe-view" && (
        <AddRecipeView
          onAdd={(recipe) => {
            dispatch({ type: "SET_RECIPES", payload: [...recipes, recipe] });
            dispatch({ type: "SHOW_HOME" });
          }}
        />
      )}

      {showUI === "recipe-view" && (
        <RecipeView
          recipeId={selectedRecipeId}
          onClose={() => dispatch({ type: "SHOW_HOME" })}
        />
      )}
    </div>
  );
};

export default App;
