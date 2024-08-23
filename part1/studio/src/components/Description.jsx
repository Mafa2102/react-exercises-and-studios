import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor(){
    let authorLink = "https://www.food.com/recipe/spicy-grilled-fish-329515";
    let authorPhoto = "https://img.sndimg.com/food/image/upload/q_92/v1/food_avatar/40910888/iU1okhKpT8mDgmf85TiC_10152752898655717.jpg";
    let authorName = "Food.com";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
   }

class RecipeDescription extends React.Component {
   render() {
      return(
         <div> 
   <div>
      <h1>Spicy Grilled Fish</h1>
      <p>Simple and delicious dinner recipe!</p>
   </div>
   <RecipeAuthor />
</div>

      )
   }
}


export default RecipeDescription;