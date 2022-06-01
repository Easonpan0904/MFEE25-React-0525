import { useState } from 'react';

function Controlled() {
  const [inputText, setInputText] = useState('');
  const [textArea, setTextArea] = useState('');
  // radio single selection
  const [gender, setGender] = useState('');
  const genderOption = ['男', '女', '不提供'];

  // select
  const [select, setSelect] = useState('');
  const selectOption = ['閱讀', '電影', '運動', '音樂'];

  // checkbox
  const [checkbox, setCheckbox] = useState(false);
  // checkbox-group
  const [checkboxGroup, setCheckboxGroup] = useState([]);
  const fruits = ['西瓜', '芒果', '芭樂', '香蕉', '鳳梨'];
  return (
    <>
      <section id="input-text">
        <h1>文字輸入框</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            let newValue = e.target.value;
            setInputText(newValue);
            // console.log(newValue);
          }}
        />
      </section>
      <section id="textarea">
        <h1>文字輸入區域</h1>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
        />
      </section>
      <section id="radio-group">
        <h1>選項按鈕</h1>
        <div className="d-flex">
          {genderOption.map((v, i) => {
            return (
              <div key={i} className="m-2">
                <input
                  type="radio"
                  value={v}
                  checked={gender === v}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                />
                <label htmlFor="">{v}</label>
              </div>
            );
          })}
        </div>
      </section>
      <section id="select-group">
        <h1>下拉選單</h1>
        <label htmlFor="" className="mx-2">
          興趣
        </label>
        <select
          value={select}
          onChange={(e) => {
            setSelect(e.target.value);
          }}
        >
          <option value="">請選擇</option>
          {selectOption.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
        </select>
      </section>
      <section id="checkbox">
        <h1>核取方塊</h1>
        <input
          type="checkbox"
          checked={checkbox}
          onChange={(e) => {
            setCheckbox(e.target.checked);
          }}
        />
      </section>
      <section id="checkbox-group">
        <h1>核取方塊群組</h1>
        <div className="d-flex">
          {fruits.map((value, index) => {
            return (
              <div key={index} className="mx-2">
                <input
                  type="checkbox"
                  value={value}
                  checked={checkboxGroup.includes(value)}
                  onChange={(e) => {
                    if (checkboxGroup.includes(e.target.value)) {
                      const newCheckboxGroup = checkboxGroup.filter((v) => {
                        return v !== e.target.value;
                      });
                      setCheckboxGroup(newCheckboxGroup);
                    } else {
                      const newCheckboxGroup = [
                        ...checkboxGroup,
                        e.target.value,
                      ];
                      setCheckboxGroup(newCheckboxGroup);
                    }
                  }}
                />
                <label htmlFor="">{value}</label>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Controlled;
