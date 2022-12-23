import { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [search, setSearch] = useState("Tech")
  const [sortBy, setSortBy] = useState(false)

  useEffect(() => {
  
   const fetchData = async () => {
    try {
      const resp = await fetch("http://localhost:3001/stocks")
      const stockList = await resp.json()
      setStocks(stockList)
    } catch (error) {
      alert(error)
    }
   }
   fetchData()
  }, []);

  const handleAddStock = (stockToAdd) => {
    const maybeFoundStock = portfolio.find(stock => stock.id === stockToAdd.id)
    if (!maybeFoundStock) {
      setPortfolio(currentPortfolio => [...currentPortfolio, stockToAdd])
    }
  }

  const handleRemoveStock = (stockToRemove) => {
    setPortfolio(currentPortfolio => currentPortfolio.filter(stock => stock.id !== stockToRemove.id))
    // setPortfolio(currentPortfolio => [currentPortfolio.slice(0, stockToRemove.id), currentPortfolio.slice(stockToRemove.id + 1)])
  }

  const filteredStocks = stocks.filter(stock => stock.type === search)

  const filteredAndSortedStocks = filteredStocks.sort((stock1, stock2) => {
    if (sortBy && sortBy === "Price") {
      return stock2.price - stock1.price
    } else if (sortBy && sortBy === "Alphabetically") {
      const nameA = stock1.ticker.toUpperCase(); // ignore upper and lowercase
      const nameB = stock2.ticker.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }

      // names must be equal
      return 0;
    } else {
      return 0;
    }
  })

  return (
    <div>
      <SearchBar setSearch={setSearch} setSortBy={setSortBy} sortBy={sortBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredAndSortedStocks} handleAddStock={handleAddStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handleRemoveStock={handleRemoveStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
