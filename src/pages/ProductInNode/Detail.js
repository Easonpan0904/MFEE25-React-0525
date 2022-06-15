import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { product3c } from '../../data/product-3c';

function Detail() {
  // {
  //   id: '1',
  //   picture: 'https://via.placeholder.com/32',
  //   stock: 5,
  //   name: 'iPhone 12 Pro',
  //   price: 25000,
  //   tags: '蘋果,大螢幕',
  // }
  const [productInDetail, setProductsInDetail] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  });

  const { productId } = useParams();

  const fetchProduct = async () => {
    let res = await fetch('/products/' + productId);
    let data = await res.json();
    console.log(data);
    setProductsInDetail(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <h1>商品詳細頁(Node)</h1>
      <p>商品名稱: {productInDetail.name}</p>
      <p>
        商品圖片: <img src={productInDetail.picture} alt="" />
      </p>
      <p>商品價格: {productInDetail.price}</p>
    </div>
  );
}

export default Detail;
