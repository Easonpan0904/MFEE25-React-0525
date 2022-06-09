import { useState, useEffect } from 'react';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 錯誤訊息用
  const [error, setError] = useState('');

  // 向server獲取資料(get)
  const fetchUser = async () => {
    try {
      const response = await fetch(
        'https://my-json-server123.typicode.com/eyesofkids/json-fake-data/users'
      );
      const data = await response.json();

      // 設定到state
      // 如果不是陣列有可能是錯誤
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        setError('伺服器目前無法回傳資料，請稍後重試');
      }
    } catch (e) {
      //console.error(e)
      setError(e.message);
    }
  };

  // 自動2秒後關起載入動畫
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  // didMount
  useEffect(() => {
    // 開啟載入指示動畫
    setIsLoading(true);

    // 向伺服器要資料
    fetchUser();
  }, []);

  const spinner = (
    <>
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );

  const displayTable = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>生日</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.birth}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  // 有錯誤訊息即呈現錯誤
  const display = error !== '' ? error : displayTable;

  return (
    <>
      <h1>User List</h1>
      {isLoading ? spinner : display}
    </>
  );
}

export default UserList;
