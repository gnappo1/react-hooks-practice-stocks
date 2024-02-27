import { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then((resp) => resp.json())
    .then(data => setStocks(data))
    .catch(err => setError(err.message))
  }, []);

  const handlePortfolio = (stockToWorkOn, num) => {
    if (num) {
      const match = portfolio.find(stock => stock.id === stockToWorkOn.id)
      return match ? null : setPortfolio(currentPortfolio => [...currentPortfolio, stockToWorkOn])
    }
    else {
      setPortfolio(currentPortfolio => currentPortfolio.filter(stock => stock.id !== stockToWorkOn.id))
    }
  }

  // const handleDeletePortfolioStock = (stockToRemove) => {
  // }

  return (
    <div>
      {error ? <p>{error}</p> : null}
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handlePortfolio={handlePortfolio}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} handlePortfolio={handlePortfolio} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
