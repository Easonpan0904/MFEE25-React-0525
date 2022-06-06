import React from 'react';

function MyRadioButton(props) {
  const { name, value, checkedValue, setCheckedValue, ...otherProps } = props;

  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checkedValue === value}
        onChange={setCheckedValue}
        {...otherProps}
      />
      <label>{value}</label>
    </>
  );
}

export default MyRadioButton;
