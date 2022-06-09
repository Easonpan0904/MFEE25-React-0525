import React, { useEffect, useState } from 'react';

// const init = () => {
//   console.log('state初始化(類似constructor)');
//   return 0;
// };

function FCLifecycle() {
  const [total, setTotal] = useState(0);

  // 模擬 didMount
  // useEffect(() => {
  //   console.log('模擬componentDidMount');
  // }, []);

  // 模擬 didMount+didUpdate
  // 因初始化也算改變，所以 didMount 也會執行
  useEffect(() => {
    console.log('模擬componentDidMount+componentDidUpdate');
  }, [total]); // 相依性陣列: 會放入 state 或 props，當 state/props 有改變時，執行其中程式碼

  // 模擬 willUnmount
  // useEffect(() => {
  //   return () => {
  //     console.log('模擬componentWillUnmount');
  //   };
  // }, []);

  return (
    <>
      {console.log('render')}
      <h1>函式型元件</h1>
      <div className="container">
        <div className="d-flex flex-column align-items-center">
          <div
            onClick={() => {
              setTotal(total + 1);
            }}
          >
            ▲
          </div>
          <h2>{total}</h2>
          <div
            onClick={() => {
              setTotal(total - 1);
            }}
          >
            ▼
          </div>
        </div>
      </div>
    </>
  );
}

export default FCLifecycle;
