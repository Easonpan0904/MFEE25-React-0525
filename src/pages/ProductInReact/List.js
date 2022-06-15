import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { product3c } from '../../data/product-3c';

function List() {
  const [productInList, setProductsInList] = useState([]);

  useEffect(() => {
    setProductsInList(product3c);
  }, []);
  return (
    <div>
      <h1>商品列表</h1>
      <ul>
        {productInList.map((v, i) => {
          return (
            <li key={v.id}>
              <Link to={'/product-detail/' + v.id}>
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
