import React from 'react'
import styles from './IngredientList.module.css'

const IngredientList = ({ ingredientAmount, ingredientName }) => (
    <div>
        <h3>
            Ingredients :
            <div className={styles.ingredients}>
                <ul className={styles.ingredient_name_container}>
                    {ingredientName.map((ingredient, i) => (
                        <li
                            data-testid='ingredient'
                            className={styles.ingredient_name}
                            key={`${ingredient + i}`}
                        >
                            {ingredient}
                        </li>
                    ))}
                </ul>
                <ul className={styles.ingredient_name_container}>
                    {ingredientAmount.map((amount, i) => (
                        <li
                            data-testid='amount'
                            className={styles.ingredient_amount}
                            key={`${amount + i}`}
                        >
                            {amount}
                        </li>
                    ))}
                </ul>
            </div>
        </h3>
    </div>
)

export default IngredientList
