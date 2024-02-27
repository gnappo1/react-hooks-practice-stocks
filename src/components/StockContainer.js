import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handlePortfolio }) {
  const stockList = stocks.map((stock) => (<Stock {...stock} onClick={handlePortfolio} key={stock.id} actionNumber={1} />) )

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
