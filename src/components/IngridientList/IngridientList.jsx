import React from 'react'
import styles from './IndridientList.module.css'

const IngridientList = ({ strMeasure, strIngredient }) => (
    <div>
        <h3>
            Ingridients :
            <div className={styles.ingridients}>
                <ul className={styles.ingridient_name_container}>
                    {strIngredient.map((ingridient, i) => (
                        <li
                            data-testid='ingridient'
                            className={styles.ingridient_name}
                            key={`${ingridient + i}`}
                        >
                            {ingridient}
                        </li>
                    ))}
                </ul>
                <ul className={styles.ingridient_name_container}>
                    {strMeasure.map((amount, i) => (
                        <li
                            data-testid='amount'
                            className={styles.ingridient_amount}
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

export default IngridientList
