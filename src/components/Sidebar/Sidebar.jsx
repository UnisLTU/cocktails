import React from 'react'
import styles from './Sidebar.module.css'
import SidebarCard from './SidebarCard/SidebarCard'

const Sidebar = ({ data, setData }) => (
    <div className={styles.sidebar}>
        <div className={styles.sidebarTitle}>History menu</div>
        <div className={styles.menu}>
            {data.map(({ strDrink, idDrink, strDrinkThumb }, i) => (
                <SidebarCard
                    key={`${strDrink + i}`}
                    strDrink={strDrink}
                    idDrink={idDrink}
                    setData={setData}
                    data={data}
                    strDrinkThumb={strDrinkThumb}
                />
            ))}
        </div>
    </div>
)
export default Sidebar
