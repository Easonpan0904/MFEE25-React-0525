import './OrderPage.css';
import OrderList from './components/OrderList';
import Summary from './components/Summary';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: '咖啡色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 300,
  },
  {
    id: 2,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 400,
  },
  {
    id: 3,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 600,
  },
  {
    id: 4,
    name: '黑色 T-shirt',
    category: 'Shirt',
    image: 'https://i.imgur.com/1GrakTl.jpg',
    price: 800,
  },
];

// const initState = (productsArr) => {
//   const state = [];
//   for (let i = 0; i < productsArr.length; i++) {
//     state.push(1);
//   }
//   return state;
// };

// 與上述函式相同功能
// const initState = (productsArr) => Array(productsArr.length).fill(1);

const initState = (productsArr) =>
  productsArr.map((product) => {
    return { ...product, count: 1 };
  });

function OrderPage() {
  const [productsInOrder, setProductsInOrder] = useState(initState(products));

  const totalNumber = () => {
    let sum = 0;
    for (let i = 0; i < productsInOrder.length; i++) {
      sum += productsInOrder[i].count;
    }
    return sum;
  };

  const totalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < productsInOrder.length; i++) {
      totalPrice += productsInOrder[i].count * productsInOrder[i].price;
    }
    return totalPrice;
  };

  return (
    <div className="card">
      <div className="row">
        <OrderList
          productsInOrder={productsInOrder}
          setProductsInOrder={setProductsInOrder}
        />
        <Summary totalNumber={totalNumber()} totalPrice={totalPrice()} />
      </div>
    </div>
  );
}

export default OrderPage;
