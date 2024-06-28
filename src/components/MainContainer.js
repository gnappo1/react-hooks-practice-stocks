import { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
import toast from 'react-hot-toast';

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically")

  useEffect(() => {
    (() => {
      fetch("http://localhost:3001/stocks")
      .then(resp => resp.json())
      .then(setStocks)
      .catch(err => toast.error(`${err.name}: ${err.message}`))
    })()
  }, [])

  const handleBuy = (stockObj) => {
    const foundStock = myStocks.find(stock => stock.id === stockObj.id)
    if (!foundStock) {
      setMyStocks(current => [...current, stockObj])
    }
  }

  const handleSell = (stockObj) => {
    setMyStocks(current => current.filter(stock => stock.id !== stockObj.id))
  }

  const setSortCriterion = (value) => setSortBy(value)

  return (
    <div>
      <SearchBar sortBy={sortBy} setSortCriterion={setSortCriterion} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handleBuy={handleBuy} sortBy={sortBy} />
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} handleSell={handleSell}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
