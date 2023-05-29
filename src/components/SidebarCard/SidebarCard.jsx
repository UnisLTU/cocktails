import React from 'react'
import styles from './SidebarCard.module.css'

const SidebarCard = ({ strDrink, idDrink, setData, data, strDrinkThumb }) => {
    const deleteFromHistory = (drinkToDelete) => {
        if (data.length > 1)
            setData((prevData) => prevData.filter((drink) => drink.idDrink !== drinkToDelete))
    }

    const loadFromHistory = (drinkToChange) => {
        setData((prevData) => {
            const drinkIndex = prevData.findIndex((drink) => drink.idDrink === drinkToChange)
            if (drinkIndex !== -1) {
                const updatedData = [...prevData]
                const [drinkToMove] = updatedData.splice(drinkIndex, 1)
                updatedData.unshift(drinkToMove)
                return updatedData
            }
            return prevData
        })
    }

    return (
        <div className={styles.sidebarCard}>
            <div className={styles.options}>
                <button
                    type='button'
                    onClick={() => deleteFromHistory(idDrink)}
                    className={styles.buttonDelete}
                >
                    delete
                </button>
                <button
                    type='button'
                    onClick={() => loadFromHistory(idDrink)}
                    className={styles.buttonLoad}
                >
                    load
                </button>
            </div>
            <img className={styles.smallThumb} src={strDrinkThumb} alt={strDrink} />
            <div className={styles.drinkName}>{strDrink}</div>
        </div>
    )
}

export default SidebarCard
