import React from "react";

const IngridientList = (props) => {

    const MapIndri = props.ingridientName.map((name, i) => (
        <li className="ingridient_name" key={i}>
          {name}
        </li>
      ));
    
      const MapAmount = props.ingridientAmount.map((name, i) => (
        <li className="ingridient_amount" key={i}>
          {name}
        </li>
      ));

  return (
    <div>
      <h3>
        Ingridients :
        <div className="ingridients">
          <ul className="ingridient_name_container">{MapAmount}</ul>
          <ul className="ingridient_name_container">{MapIndri}</ul>
        </div>
        
      </h3>
    </div>
  );
};

export default IngridientList;
