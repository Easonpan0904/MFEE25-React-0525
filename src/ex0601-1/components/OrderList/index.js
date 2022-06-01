import React from 'react';
import ProductItem from './ProductItem';

// const products = [
//   {
//     id: 1,
//     name: '咖啡色 T-shirt',
//     category: 'Shirt',
//     image: 'https://i.imgur.com/1GrakTl.jpg',
//     price: 300,
//   },
//   {
//     id: 2,
//     name: '黑色 T-shirt',
//     category: 'Shirt',
//     image: 'https://i.imgur.com/1GrakTl.jpg',
//     price: 400,
//   },
// ];

function OrderList(props) {
  const { counts, setCounts, products } = props;
  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購單</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              {counts.length}種商品項目
            </div>
          </div>
        </div>
        {products.map((product, i) => {
          const { id, name, category, image, price } = product;

          return (
            <ProductItem
              key={id}
              id={id}
              name={name}
              category={category}
              price={price}
              image={image}
              count={counts[i]}
              setCount={(newCount) => {
                // 1. 從目前的狀態『拷貝』出一個新的變數值(陣列/物件)
                const newCounts = [...counts];
                // 2. 在新的變數值(陣列/物件)上作處理
                newCounts[i] = newCount < 1 ? 1 : newCount;
                // 3. 設定回原本的狀態中
                setCounts(newCounts);
              }}
            />
          );
        })}

        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  );
}

export default OrderList;
