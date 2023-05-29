import React, { useState } from 'react'
import IngridientList from '../IngridientList/IngridientList'
import styles from './Main.module.css'
import Loader from './Loader/Loader'

const Main = ({ data, getDrink, loading, setLoading }) => {
    const [flip, setFlip] = useState(false)

    const {
        strCategory,
        strDrink,
        strDrinkThumb,
        strGlass,
        strIngredient,
        strInstructions,
        strMeasure,
    } = data[0]

    const newDrink = () => {
        getDrink()
        setFlip(false)
        setLoading(true)
        setTimeout(() => setLoading(false), 500)
    }

    return (
        <>
            {' '}
            <div className={styles.main}>
                <div
                    className={[styles.card, flip ? styles.flip : ''].join(' ')}
                    onClick={() => setFlip(!flip)}
                    role='presentation'
                >
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            <div className={styles.front}>
                                <h2 className={styles.drinkName}>{strDrink}</h2>
                                <h3 className={styles.drinkText}>Category: {strCategory}</h3>
                                <img className={styles.thumb} src={strDrinkThumb} alt={strDrink} />
                                <div className={styles.flip2}>Click for recipe</div>
                            </div>
                            <div className={styles.back}>
                                <h3 className={styles.drinkText}>Served in: {strGlass}</h3>
                                <IngridientList
                                    strIngredient={strIngredient}
                                    strMeasure={strMeasure}
                                />
                                Instructions:
                                <p className={styles.instructionText}>{strInstructions}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <button className={styles.newDrinkButton} onClick={newDrink} type='button'>
                Get new drink
            </button>{' '}
        </>
    )
}

export default Main
