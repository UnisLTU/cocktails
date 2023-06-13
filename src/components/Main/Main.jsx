import React, { useState } from 'react'
import IngredientList from '../IngredientList/IngredientList'
import styles from './Main.module.css'
import Loader from '../Loader/Loader'

const Main = ({ data, getDrink, loading }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    const [firstDrink] = data

    const {
        drinkName,
        glassName,
        drinkThumb,
        drinkInstructions,
        categoryName,
        ingredientAmount,
        ingredientName,
    } = firstDrink

    const getNewDrink = () => {
        setIsFlipped(false)
        getDrink()
    }

    return (
        <>
            <div className={styles.main}>
                <div
                    className={[styles.card, isFlipped ? styles.flip : ''].join(' ')}
                    onClick={() => setIsFlipped(!isFlipped)}
                    role='presentation'
                >
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            <div className={styles.front}>
                                <h2 className={styles.drinkName}>{drinkName}</h2>
                                <h3 className={styles.drinkText}>Category: {categoryName}</h3>
                                <img className={styles.thumb} src={drinkThumb} alt={drinkThumb} />
                                <div className={styles.flip2}>Click for recipe</div>
                            </div>
                            <div className={styles.back}>
                                <h3 className={styles.drinkText}>Served in: {glassName}</h3>
                                <IngredientList
                                    ingredientName={ingredientName}
                                    ingredientAmount={ingredientAmount}
                                />
                                Instructions:
                                <p className={styles.instructionText}>{drinkInstructions}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <button className={styles.newDrinkButton} onClick={getNewDrink} type='button'>
                Get new drink
            </button>
        </>
    )
}

export default Main
