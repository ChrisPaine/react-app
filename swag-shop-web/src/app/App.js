import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Product from '../product/product';

import HttpService from '../services/http-service';

const http = new HttpService();
  
//function App() {

class App extends Component {
  constructor(props) {
    super(props);
    // Bind functions
    this.loadData = this.loadData.bind(this);
  
    this.loadData();
  }

  loadData = () => {
        http.getProducts().then(products => {
          console.log(products);
        }, err => {
          // "You Stink!" if error
        });
  }
  
    
  render() {
  return (
    <div className="containerApp">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to React
        </a>

      </header>
      <div className="container App-main">
        <div className="row">
            <Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="https://images-na.ssl-images-amazon.com/images/I/71UUbn1lwGL._AC_SX425_.jpg"/>
            <Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="https://images-na.ssl-images-amazon.com/images/I/71UUbn1lwGL._AC_SX425_.jpg"/>
            <Product className="col-sm-4" price="4.23" title="Cool Toy Gun" imgUrl="https://images-na.ssl-images-amazon.com/images/I/71UUbn1lwGL._AC_SX425_.jpg"/>
          </div>
        </div>
      </div>
  )
  }
}

export default App;

