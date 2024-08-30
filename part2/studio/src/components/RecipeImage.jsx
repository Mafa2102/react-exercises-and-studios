import recipeData from "./recipe.json"
import './styling.css'

function RecipeImage() {
  const recipeImage = recipeData.map(recipe => {
    return <img key={recipe.name} src={recipe.recipeImage} alt={recipe.name} className="recipeImage"/>
  });
   return <div>{recipeData}</div>;
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 