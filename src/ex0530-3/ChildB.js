import { useEffect, useState } from 'react';

function ChildB(props) {
  // console.log(props);
  // 先解構成變數在做使用，有效減少寫出 props.
  const { setDataFromChildB } = props;
  const [childBData, setChildBData] = useState('child B data');
  useEffect(() => setDataFromChildB(childBData), []);

  return (
    <>
      <h1>childB</h1>
      {/* <button
        onClick={() => {
          setDataFromChildB(childBData);
        }}
      >
        送資料回Parent
      </button> */}
    </>
  );
}

export default ChildB;
