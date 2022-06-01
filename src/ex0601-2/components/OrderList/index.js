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
  const { productsInOrder, setProductsInOrder } = props;
  // console.log(counts);
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
              {productsInOrder.length}種商品項目
            </div>
          </div>
        </div>
        {productsInOrder.map((product, i) => {
          const { id, name, category, image, price, count } = product;

          return (
            <ProductItem
              key={id}
              id={id}
              name={name}
              category={category}
              price={price}
              image={image}
              count={count}
              setCount={(newCount) => {
                // 1. 從目前的狀態『拷貝』出一個新的變數值(陣列/物件)
                // 這裡是做深拷貝對物件中的物件屬性做拷貝
                const newProductsInOrder = productsInOrder.map((value) => {
                  return { ...value };
                });
                // 2. 在新的變數值(陣列/物件)上作處理
                newProductsInOrder[i].count = newCount < 1 ? 1 : newCount;
                // 3. 設定回原本的狀態中
                setProductsInOrder(newProductsInOrder);
              }}
              removeItem={() => {
                // 1. 從目前的狀態『拷貝』出一個新的變數值(陣列/物件)
                const newProductsInOrder = productsInOrder.filter((value) => {
                  return value.id !== id;
                });
                setProductsInOrder(newProductsInOrder);
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
