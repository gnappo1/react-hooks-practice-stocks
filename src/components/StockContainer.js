import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleBuy, sortBy }) {
  
  const sortedStocks = [...stocks].sort((stockOne, stockTwo) => {
    if (sortBy === "Alphabetically") {
      return stockOne.name.toUpperCase().localeCompare(stockTwo.name.toUpperCase())
    } else {
      return stockOne.price - stockTwo.price
    }
  })

  const mappedStocks = sortedStocks.map(stock => <Stock key={stock.id} {...stock} handleClick={handleBuy} />)

  return (
    <div>
      <h2>Stocks</h2>
      {mappedStocks}
    </div>
  );
}

export default StockContainer;
