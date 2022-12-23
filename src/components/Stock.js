
function Stock({stock, handleClick}) {
  const {id, name, price, ticker, type} = stock
  return (
    <div onClick={() => handleClick(stock)}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
