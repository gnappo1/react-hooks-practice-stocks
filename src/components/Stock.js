import { useState } from "react";

function Stock({ ticker, name, price, handleClick, id, type }) {

  return (
    <div onClick={() => handleClick({ ticker, name, price, type, id })}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
