import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function List() {
  const [productInList, setProductsInList] = useState([]);

  const fetchProducts = async () => {
    let res = await fetch('/products');
    let data = await res.json();
    console.log(data);
    setProductsInList(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>商品列表(Node)</h1>
      <ul>
        {productInList.map((v, i) => {
          return (
            <li key={v.id}>
              <Link to={'/product-node-detail/' + v.id}>
                {v.name} / {v.price}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
