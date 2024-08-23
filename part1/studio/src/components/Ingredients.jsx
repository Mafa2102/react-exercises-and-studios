import React from 'react';
import styles from './Ingredients.module.css';

export default function ReceipeIngredients(){
    let ingredients = ["24 oz catfish fillets", "1/4 cup lemon juice", "1/4 cup vegetable oil", "2 tbsp ginger", "6 garlic cloves"]

    return (
        <div>
   <h3>Recipe Ingredients</h3>
   <ul className = {styles.ingredientList}>
      <li>{ingredients[0]}</li>
      <li>{ingredients[1]}</li>
      <li>{ingredients[2]}</li>
      <li>{ingredients[3]}</li>
      <li>{ingredients[4]}</li>
   </ul>
</div>
     );
   }