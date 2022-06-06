import React, { useState } from 'react';

function Zipcode() {
  const cities = ['台北市', '桃園市'];
  const townships = [
    ['中正區', '大同區', '中山區'],
    ['中壢區', '平鎮區', '龍潭區'],
  ];
  const zipCode = [
    [100, 103, 104],
    [320, 324, 325],
  ];

  const [cityIndex, setCityIndex] = useState(-1);
  const [townshipIndex, setTownshipIndex] = useState(-1);
  return (
    <>
      <h1>郵遞區號下拉連動表單</h1>
      <select
        value={cityIndex}
        onChange={(e) => {
          setCityIndex(Number(e.target.value));
          setTownshipIndex(-1);
        }}
      >
        <option value="-1">請選擇</option>
        {cities.map((v, i) => {
          return (
            <option key={i} value={i}>
              {v}
            </option>
          );
        })}
      </select>
      <select
        value={townshipIndex}
        onChange={(e) => {
          setTownshipIndex(Number(e.target.value));
        }}
      >
        <option value="-1">請選擇區域</option>
        {cityIndex > -1 &&
          townships[cityIndex].map((v, i) => {
            return (
              <option key={i} value={i}>
                {v}
              </option>
            );
          })}
      </select>
      <p>
        郵遞區號:
        <br />
        {cityIndex > -1 &&
          townshipIndex > -1 &&
          zipCode[cityIndex][townshipIndex]}
      </p>
    </>
  );
}

export default Zipcode;
