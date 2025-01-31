import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, removeStock }) {
  const mappedStocks = portfolio.map(stock => <Stock key={stock.id} {...stock} handleClick={removeStock} />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {mappedStocks}
    </div>
  );
}

export default PortfolioContainer;
