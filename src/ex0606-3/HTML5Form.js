import React, { useState } from 'react';
import MyCheckBox from './components/MyCheckBox';
import MyRadioButton from './components/MyRadioButton';

function HTML5Form() {
  const [userData, setUserData] = useState({
    account: '',
    password: '',
    confirmPassword: '',
    email: '',
    gender: '',
    likeList: [],
  });

  const genderOptions = ['男', '女', '不提供'];
  const fruitOptions = ['西瓜', '芒果', '香蕉'];
  // 紀錄表單驗證，錯誤訊息用
  const [userDataError, setUserDataError] = useState({
    account: '',
    password: '',
    confirmPassword: '',
    email: '',
    gender: '',
    likeList: '',
  });

  const handleChangeForm = (e) => {
    const newErrors =
      e.target.name === 'password' || e.target.name === 'confirmPassword'
        ? {
            ...userDataError,
            password: '',
            confirmPassword: '',
          }
        : {
            ...userDataError,
            [e.target.name]: '',
          };
    setUserDataError(newErrors);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;

    let newValue = value;

    if (type === 'checkbox') {
      // toggle
      // 如果目前這個值在陣列中 -> 移出陣列
      // 反之如果目前這個值"沒在"陣列中 -> 加入陣列
      newValue = userData[name].includes(value)
        ? userData[name].filter((v, i) => {
            return v !== value;
          })
        : [...userData[name], value];
    }

    const newUserData = {
      ...userData,
      [name]: newValue,
    };
    setUserData(newUserData);
  };

  const handleSubmit = (e) => {
    // 擋掉預設送出行為
    e.preventDefault();

    // 得到通過驗證的值
    // 第1種方式: 利用state獲得值
    // 可控元件，立即動態得到值時用
    console.log('state', userData);
    // 第2種方式: 利用formdata
    // 不可控元件用、上傳檔案用、單純的表單用
    // formdata 是利用 name 屬性
    const formData = new FormData(e.target);
    console.log(
      'formData',
      formData.get('account'),
      formData.get('password'),
      formData.get('email'),
      formData.get('gender'),
      formData.getAll('likeList')
    );

    // 做驗證
    if (userData.password !== userData.confirmPassword) {
      // 自訂錯誤訊息
      const newUserDataErrors = {
        ...userDataError,
        password: '密碼與確認密碼輸入值不同',
        confirmPassword: '密碼與確認密碼輸入值不同',
      };
      //
      setUserDataError(newUserDataErrors);

      return;
    }
    // 送到伺服器，例如用fetch
  };

  // 表單用，有不合法的驗證情況出現時觸發
  const handleInvalid = (e) => {
    // 擋住泡泡訊息出現
    e.preventDefault();

    // console.log(e.target.validationMessage);
    const newErrors = {
      ...userDataError,
      [e.target.name]: e.target.validationMessage,
    };

    setUserDataError(newErrors);
  };
  return (
    <>
      <h1>HTML5表單驗證</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        onInvalid={handleInvalid}
        onChange={handleChangeForm}
      >
        <div className="pb-3">
          <label htmlFor="">帳號</label>
          <input
            type="text"
            name="account"
            value={userData.account}
            onChange={handleChange}
            required
          />
          {/* 錯誤訊息呈現 */}
          {userDataError.account}
        </div>
        <div className="pb-3">
          <label htmlFor="">密碼</label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
            minLength={6}
            maxLength={10}
          />
          {/* 目前填入 {userData.password.length} 位數 */}
          {/* 錯誤訊息呈現 */}
          {userDataError.password}
        </div>
        <div className="pb-3">
          <label htmlFor="">確認密碼</label>
          <input
            type="text"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            required
            minLength={6}
            maxLength={10}
          />
          {/* 目前填入 {userData.password.length} 位數 */}
          {/* 錯誤訊息呈現 */}
          {userDataError.confirmPassword}
        </div>
        <div className="pb-3">
          <label htmlFor="">email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          {/* 錯誤訊息呈現 */}
          {userDataError.email}
        </div>
        <div className="pb-3">
          <label htmlFor="">性別</label>
          {genderOptions.map((v, i) => {
            return (
              <MyRadioButton
                key={i}
                name="gender"
                value={v}
                checkedValue={userData.gender}
                setCheckedValue={handleChange}
              />
            );
          })}
        </div>
        <div className="pb-3">
          <label htmlFor="">喜好的水果</label>
          {fruitOptions.map((v, i) => {
            return (
              <MyCheckBox
                key={i}
                name="likeList"
                value={v}
                checked={userData.likeList.includes(v)}
                onChange={handleChange}
              />
            );
          })}
        </div>
        <button type="submit">送出</button>
      </form>
    </>
  );
}

export default HTML5Form;
