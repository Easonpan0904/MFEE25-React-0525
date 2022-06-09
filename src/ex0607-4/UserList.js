import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // 向 server 獲取資料(get)
  const fetchUser = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    // const data = await response.json();
    console.log(response.data);
    setUsers(response.data);
  };

  // 自動3秒後關起載入動畫
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  useEffect(() => {
    // 開啟載入指示動畫
    setLoading(true);
    fetchUser();
  }, []);

  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden"></span>
        </div>
        <div class="spinner-grow text-secondary" role="status">
          <span class="visually-hidden"></span>
        </div>
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden"></span>
        </div>
      </div>
    </>
  );

  const userTable = (
    <>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );

  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="w-50">
          <h1 className="text-center">User List</h1>
          {loading ? spinner : userTable}
        </div>
      </div>
    </>
  );
}

export default UserList;
