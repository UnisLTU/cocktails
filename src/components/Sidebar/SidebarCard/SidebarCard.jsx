import React from 'react'
import styles from './SidebarCard.module.css'
import deleteFromHistory from '../../../utils/deleteFromHistory'
import loadFromHistory from '../../../utils/loadFromHistory'

const SidebarCard = ({ strDrink, idDrink, setData, data, strDrinkThumb }) => (
    <div className={styles.sidebarCard}>
        <div data-testid='sidebar-drink' className={styles.options}>
            <button
                type='button'
                onClick={() => setData(deleteFromHistory(data, idDrink))}
                className={styles.buttonDelete}
            >
                Delete
            </button>
            <button
                type='button'
                onClick={() => setData(loadFromHistory(data, idDrink))}
                className={styles.buttonLoad}
            >
                Load
            </button>
        </div>
        <img className={styles.smallThumb} src={strDrinkThumb} alt={strDrink} />
        <div className={styles.drinkName}>{strDrink}</div>
    </div>
)

export default SidebarCard
