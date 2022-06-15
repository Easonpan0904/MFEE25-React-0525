import React from 'react';

function About(props) {
  const { auth } = props;
  return (
    <div>
      About
      <p>{auth ? '會員已登入' : '未登入'}</p>
    </div>
  );
}

export default About;
