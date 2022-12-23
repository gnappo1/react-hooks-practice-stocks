import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, handleRemoveStock}) {
  const mappedStocks = portfolio.map(stock => <Stock key={stock.id} handleClick={handleRemoveStock} stock={stock} />)

  return (
    <div>
      <h2>My Portfolio</h2>
      {mappedStocks}
    </div>
  );
}

export default PortfolioContainer;
