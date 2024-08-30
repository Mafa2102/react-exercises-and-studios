import recipeData from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
const recipeAuthor = recipeData.map(recipe => {
  return  <div key={recipe.name}>{recipe.author}</div>
});
const recipeAuthorImage= recipeData.map(recipe => {
  return (
    <div key={recipe.name}>
      <img src={recipe.authorImage} alt={recipe.author}
      className="authorImage" />
    </div>
  )
})
const recipeWebsite = recipeData.map(recipe => {
  return <a key={recipe.name} href={recipe.website}>Website for recipe</a>
})

   return (
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
   );



 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 