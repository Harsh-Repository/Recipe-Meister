// Icon Component
import React from "react";
// Load Images
import poultry from "../icons/poultry.png";
import vegetarian from "../icons/veg.png";
import vegan from "../icons/vegan.png";
import meat from "../icons/meat.png";
import seafood from "../icons/seafood.png";

const Icon = ({ type }) => {
    const getIconSrc = () => {
      switch (type) {
        case "Vegetarian":
          return vegetarian;
        case "Vegan":
          return vegan;
        case "Poultry":
          return poultry;
        case "Meat":
          return meat;
        case "Seafood":
          return seafood;
        default:
          return null;
      }
    };
  
    const iconSrc = getIconSrc();
  
    if (!iconSrc) {
      return null;
    }
  
    return (<div className="icon">
        <img src={iconSrc} alt={`Dish type: ${type}`} />
        <p>{type}</p>
    </div>);
  };
  
  export default Icon;
