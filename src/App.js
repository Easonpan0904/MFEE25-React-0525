import product from './data/products.json';

function App() {
  // console.log(product);
  let productInfo = product.map((product) => {
    return (
      <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  });

  return (
    <>
      <div className="container">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>名稱</th>
              <th>價格</th>
            </tr>
          </thead>
          <tbody>{productInfo}</tbody>
        </table>
      </div>
    </>
  );
}

export default App;
