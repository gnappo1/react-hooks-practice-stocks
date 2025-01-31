import { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [searchInput, setSearchInput] = useState("All")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("http://localhost:3001/stocks")
        const data = await resp.json()
        setStocks(data)
      } catch (error) {
        alert(error)
      }
    }
    fetchData()
  }, [])

  const addStock = (stockToAdd) => {
    const foundStock = portfolio.find(stock => stock.id === stockToAdd.id)
    if (!foundStock) {
      setPortfolio(prevPortfolio => [...prevPortfolio, stockToAdd])
    }
  }

  const removeStock = (stockToRemove) => {
    setPortfolio(prevPortfolio => prevPortfolio.filter(stock => stock.id !== stockToRemove.id))
  }

  const handleFilterType = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <div>
      <SearchBar searchInput={searchInput} handleFilterType={handleFilterType} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} addStock={addStock} searchInput={searchInput} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} removeStock={removeStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
