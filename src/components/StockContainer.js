import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, addStock, searchInput }) {
  const filteredStocks = stocks.filter(stock => searchInput === "All" || stock.type === searchInput)
  const mappedStocks = filteredStocks.map(stock => <Stock key={stock.id} {...stock} handleClick={addStock} />)


  return (
    <div>
      <h2>Stocks</h2>
      {mappedStocks}
    </div>
  );
}

export default StockContainer;
