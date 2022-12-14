import React, { useState } from "react";
import IngridientList from "./IngridientList";
import styles from "./Main.module.css"

const Main = ({data: {strDrink, strGlass, strDrinkThumb, strInstructions, strCategory}, getDrinks, ingridientName, ingridientAmount}) => {
const [flip, setFlip] = useState(false);


const newDrink = () => {
    getDrinks()
    setFlip(false)
}

  return (
    <>
      {" "}
      <div className={styles.main}>
        <div
          className={[styles.card, flip ? styles.flip : ""].join(' ')}
          onClick={() => setFlip(!flip)}
        >
          <div className={styles.front}>
            <h2>{strDrink}</h2>
            <h3>Category: {strCategory}</h3>
            <img src={strDrinkThumb} alt="" />
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
        </div>
        <button onClick={newDrink}>Get new drink</button>
      </div>
    </>
  );
};

export default Main;
