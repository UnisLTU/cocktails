import React from "react";
import styles from "./IndridientList.module.css"

const IngridientList = (props) => {

    const MapIndri = props.ingridientName.map((name, i) => (
        <li className={styles.ingridient_name} key={i}>
          {name}
        </li>
      ));
    
      const MapAmount = props.ingridientAmount.map((name, i) => (
        <li className={styles.ingridient_amount} key={i}>
          {name}
        </li>
      ));

  return (
    <div>
      <h3>
        Ingridients :
        <div className={styles.ingridients}>
          <ul className={styles.ingridient_name_container}>{MapAmount}</ul>
          <ul className={styles.ingridient_name_container}>{MapIndri}</ul>
        </div>
      </h3>
    </div>
  );
};

export default IngridientList;
