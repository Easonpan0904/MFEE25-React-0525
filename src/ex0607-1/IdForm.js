import React from 'react';

function IdForm() {
  return (
    <>
      <h1>使用 id 的表單元素</h1>
      <div className="pb-2">
        <input type="text" id="my-input" className="m-2" />
      </div>
      <div className="pb-2">
        <button
          onClick={() => {
            document.getElementById('my-input').focus();
          }}
          className="btn btn-info m-2"
        >
          聚焦(focus)
        </button>
        <button
          onClick={() => {
            document.getElementById('my-input').blur();
          }}
          className="btn btn-info m-2"
        >
          失焦(blur)
        </button>
        <button
          onClick={() => {
            const inputValue = document.getElementById('my-input').value;
            console.log(inputValue);
          }}
          className="btn btn-info m-2"
        >
          獲得輸入值
        </button>
      </div>
    </>
  );
}

export default IdForm;
