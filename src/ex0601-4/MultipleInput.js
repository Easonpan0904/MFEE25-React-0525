import React, { useState } from 'react';

function MultipleInput() {
  const [userData, setUserData] = useState({
    fullName: 'Eason',
    phone: '0955313167',
  });

  const handleChange = (e) => {
    const newUserData = { ...userData, [e.target.name]: e.target.value };

    setUserData(newUserData);
    console.log(newUserData);
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3">
            <div className="pt-2">
              <label htmlFor="">姓名</label>
              <input
                type="text"
                name="fullName"
                value={userData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="pt-2">
              <label htmlFor="">電話</label>
              <input
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MultipleInput;
