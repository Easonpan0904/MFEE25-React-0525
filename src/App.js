// import UserList from './ex0609-6/UserList';
// import ReactBS from './ex0614-1/ReactBS';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useState } from 'react';

import About from './pages/About';
import Detail from './pages/ProductInReact/Detail';
import DetailNode from './pages/ProductInNode/Detail';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Product from './pages/Product';
import List from './pages/ProductInReact/List';
import ListNode from './pages/ProductInNode/List';
import Login from './pages/Login';
import User from './pages/User';

function App() {
  let [auth, setAuth] = useState(false);

  return (
    <Router>
      <Link to="/">首頁</Link>
      <br />
      <Link to="/about">關於我們</Link>
      <br />
      <Link to="/login">會員登入</Link>
      <br />
      {/* <Link to="/product-list">商品列表</Link> */}
      <Link to="/product-node-list">商品列表</Link>
      <hr />
      <Switch>
        <Route path="/about">
          <About auth={auth} />
        </Route>
        <Route path="/product-detail/:productId">
          <Detail />
        </Route>
        <Route path="/product-list">
          <List />
        </Route>
        <Route path="/product-node-detail/:productId">
          <DetailNode />
        </Route>
        <Route path="/product-node-list">
          <ListNode />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/login">
          <Login auth={auth} setAuth={setAuth} />
        </Route>
        <Route exact path="/">
          <Home auth={auth} />
        </Route>
        <Route exact path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
