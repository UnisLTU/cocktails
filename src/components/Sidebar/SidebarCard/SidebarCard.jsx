import React from 'react'
import styles from './SidebarCard.module.css'
import deleteFromHistory from '../../../utils/deleteFromHistory'
import loadFromHistory from '../../../utils/loadFromHistory'

const SidebarCard = ({ drinkName, drinkId, setData, data, drinkThumb }) => (
    <div className={styles.sidebarCard}>
        <div data-testid='sidebar-drink' className={styles.options}>
            <button
                type='button'
                onClick={() => setData(deleteFromHistory(data, drinkId))}
                className={styles.buttonDelete}
            >
                Delete
            </button>
            <button
                type='button'
                onClick={() => setData(loadFromHistory(data, drinkId))}
                className={styles.buttonLoad}
            >
                Load
            </button>
        </div>
        <img className={styles.smallThumb} src={drinkThumb} alt={drinkName} />
        <div className={styles.drinkName}>{drinkName}</div>
    </div>
)

export default SidebarCard
