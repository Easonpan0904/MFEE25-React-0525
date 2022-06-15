import React from 'react';

function Home(props) {
  const { auth } = props;

  return (
    <div>
      Home
      <p>{auth ? '會員已登入' : '未登入'}</p>
    </div>
  );
}

export default Home;
