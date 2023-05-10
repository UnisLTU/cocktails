import React, { useState } from 'react'
import IngridientList from '../IngridientList/IngridientList'
import styles from './Main.module.css'
import Loader from '../Main/Loader/Loader'

const Main = ({
    data: { strDrink, strGlass, strDrinkThumb, strInstructions, strCategory },
    getDrinks,
    ingridientName,
    ingridientAmount,
    loading,
    setLoading,
}) => {
    const [flip, setFlip] = useState(false)

    const newDrink = () => {
        getDrinks()
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
                >
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            <div className={styles.front}>
                                <h2>{strDrink}</h2>
                                <h3>Category: {strCategory}</h3>
                                <img src={strDrinkThumb} alt={strDrink} />
                                <div className={styles.flip_}>Click for recipe</div>
                            </div>
                            <div className={styles.back}>
                                <h3>Served in : {strGlass}</h3>
                                <IngridientList
                                    ingridientName={ingridientName}
                                    ingridientAmount={ingridientAmount}
                                />
                                Instructions : <p>{strInstructions}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <button onClick={newDrink}>Get new drink</button>{' '}
        </>
    )
}

export default Main
