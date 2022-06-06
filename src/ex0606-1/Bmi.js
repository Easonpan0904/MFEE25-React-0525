import React, { useState } from 'react';

function Bmi(props) {
  const [data, setData] = useState({
    height: 0,
    weight: 0,
  });
  const [bmi, setBmi] = useState(0);

  const handleChange = (e) => {
    const newData = { ...data, [e.target.name]: Number(e.target.value) };

    setData(newData);
  };

  return (
    <>
      <h1>BMI計算</h1>
      <label>身高(公分):</label>
      <input
        type="text"
        name="height"
        value={data.height}
        onChange={handleChange}
      />
      <br />
      <label>體重(公斤):</label>
      <input
        type="text"
        name="weight"
        value={data.weight}
        onChange={handleChange}
      />
      <br />
      <button
        onClick={() => {
          let { height, weight } = data;
          let newBmi = weight / Math.pow(height / 100, 2);
          setBmi(newBmi.toFixed(1));
        }}
      >
        計算
      </button>
      <button
        onClick={() => {
          const newData = { height: 0, weight: 0 };
          setData(newData);
          setBmi(0);
        }}
      >
        清除
      </button>
      <hr />
      <p>你的BMI值為: {bmi > 0 ? bmi : ''}</p>
    </>
  );
}

export default Bmi;
