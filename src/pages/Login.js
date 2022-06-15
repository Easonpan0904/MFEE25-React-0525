import React from 'react';
import { useHistory } from 'react-router-dom';

function Login(props) {
  const { auth, setAuth } = props;
  const history = useHistory();
  return (
    <div>
      <h2>Login</h2>
      <p>{auth ? '會員已登入' : '未登入'}</p>
      <button
        onClick={() => {
          const newAuth = !auth;
          setAuth(newAuth);
          // 呈現歡迎或登出
          const msg = newAuth ? '歡迎' : '期待下次光臨';
          alert(msg);

          // 導向關於我們
          history.push('/');
        }}
      >
        {auth ? '登出' : '登入'}
      </button>
    </div>
  );
}

export default Login;
