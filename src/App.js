import Header from './components/header.js';
import Footer from './components/footer.js';
import Categories from './components/categories';
import Products from './components/products';
import SimpleCart from './components/simpleCart';
import IndividualProduct from './components/individualProduct';
import CartList from './components/cartList.js';
import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const cart = useSelector(state => state.cart);

  return (
    <div className="App">
      <Router>
        <Header />
        {cart.isOpen && <CartList/>}
        <Categories />
        <Switch>
          <Route exact path='/'>
            <Products />
          </Route>
          <Route path='/cart'>
            <SimpleCart />
          </Route>
          <IndividualProduct exact path='/products/:productID' />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;