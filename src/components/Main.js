import React, { useState } from "react";
import IngridientList from "./IngridientList";

const Main = (props) => {
const [flip, setFlip] = useState(false);

const newDrink = () => {
    props.getDrinks()
    setFlip(false)
}

  return (
    <>
      {" "}
      <div className="main">
        <div
          className={`card ${flip ? "flip" : ""}`}
          onClick={() => setFlip(!flip)}
        >
          <div className="front">
            <h2>{props.data.strDrink}</h2>
            <h3>Category: {props.data.strCategory}</h3>
            <img src={props.data.strDrinkThumb} alt="" />
          </div>
          <div className="back">
            <h3>Served in : {props.data.strGlass}</h3>
            <IngridientList
              ingridientName={props.ingridientName}
              ingridientAmount={props.ingridientAmount}
            />
            Instructions : <p>{props.data.strInstructions}</p>
          </div>
        </div>
        <button onClick={newDrink}>Get new drink</button>
      </div>
    </>
  );
};

export default Main;
