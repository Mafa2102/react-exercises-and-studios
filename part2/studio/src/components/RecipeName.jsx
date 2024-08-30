import recipeData from "./recipe.json";
import './styling.css'

function RecipeName() {
  const name = recipeData.map(recipe => {
    return <h1 key={recipe.name}> {recipe.name}</h1>;
  })
  //return recipedata;
  return (
    <div>
      {name}
    </div>);

}

export default RecipeName;

//import return the name of the recipe as a level 1 header