import React, { useRef } from 'react';

function RefsForm() {
  // 使用 Refs 的目的是要做成可重複使用的元件
  const inputElement = useRef(null);
  return (
    <>
      <h1>使用 refs 的表單元素</h1>
      <div className="pb-2">
        <input type="text" className="m-2" ref={inputElement} />
      </div>
      <div className="pb-2">
        <button
          className="btn btn-info m-2"
          onClick={() => {
            inputElement.current.focus();
          }}
        >
          聚焦(focus)
        </button>
        <button
          className="btn btn-info m-2"
          onClick={() => {
            inputElement.current.blur();
          }}
        >
          失焦(blur)
        </button>
        <button
          className="btn btn-info m-2"
          onClick={() => {
            console.log(inputElement.current.value);
          }}
        >
          獲得輸入值
        </button>
      </div>
    </>
  );
}

export default RefsForm;
