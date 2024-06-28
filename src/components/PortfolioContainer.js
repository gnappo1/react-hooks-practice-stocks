import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks, handleSell }) {

  const mappedStocks = myStocks.map(stock => <Stock key={stock.id} {...stock} handleClick={handleSell } />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {mappedStocks}
    </div>
  );
}

export default PortfolioContainer;
