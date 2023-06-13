import React from 'react'
import styles from './Sidebar.module.css'
import SidebarCard from './SidebarCard/SidebarCard'

const Sidebar = ({ data, setData }) => (
    <div className={styles.sidebar}>
        <div className={styles.sidebarTitle}>History menu</div>
        <div className={styles.menu}>
            {data.map(({ drinkName, drinkId, drinkThumbnail }, i) => (
                <SidebarCard
                    key={`${drinkName + i}`}
                    drinkName={drinkName}
                    drinkId={drinkId}
                    setData={setData}
                    data={data}
                    drinkThumbnail={drinkThumbnail}
                />
            ))}
        </div>
    </div>
)
export default Sidebar
