import { useState } from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';

function Parent() {
  // for childA
  // const [pData, setPData] = useState('parent data');
  // for childB
  const [dataFromChildB, setDataFromChildB] = useState('');
  return (
    <>
      <ChildA dataFromChildB={dataFromChildB} />
      <ChildB setDataFromChildB={setDataFromChildB} />
      <p>來自 ChildB 的資料: {dataFromChildB}</p>
    </>
  );
}

export default Parent;
