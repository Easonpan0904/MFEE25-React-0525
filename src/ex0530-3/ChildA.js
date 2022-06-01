function ChildA(props) {
  // console.log(props);
  // 先解構成變數在做使用，有效減少寫出 props.
  // const { text, fullName } = props;
  const { dataFromChildB } = props;

  return (
    <>
      <h1>childA</h1>
      <p>來自 Parent 的資料: {dataFromChildB}</p>
    </>
  );
}

export default ChildA;
