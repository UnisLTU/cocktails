import React from 'react'
import styles from './IndridientList.module.css'

const IngridientList = ({ strMeasure, strIngredient }) => {
    const mapIndri = strIngredient.map((name, i) => (
        <li className={styles.ingridient_name} key={i}>
            {name}
        </li>
    ))

    const mapAmount = strMeasure.map((name, i) => (
        <li className={styles.ingridient_amount} key={i}>
            {name}
        </li>
    ))

    return (
        <div>
            <h3>
                Ingridients :
                <div className={styles.ingridients}>
                    <ul className={styles.ingridient_name_container}>{mapAmount}</ul>
                    <ul className={styles.ingridient_name_container}>{mapIndri}</ul>
                </div>
            </h3>
        </div>
    )
}

export default IngridientList
