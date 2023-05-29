import React from 'react'
import styles from './Sidebar.module.css'
import SidebarCard from '../SidebarCard/SidebarCard'

const Sidebar = ({ data, loading, setData }) => {
    const reversedList = data.reverse()
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarTitle}>History menu</div>
            {loading ? (
                <div className={styles.menu} />
            ) : (
                <div className={styles.menu}>
                    {reversedList.map(({ strDrink, idDrink, strDrinkThumb }, index) => (
                        <SidebarCard
                            key={index}
                            strDrink={strDrink}
                            idDrink={idDrink}
                            setData={setData}
                            data={data}
                            strDrinkThumb={strDrinkThumb}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
export default Sidebar
