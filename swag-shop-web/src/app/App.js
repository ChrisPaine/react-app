import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Product from '../product/product';
import WishList from '../wishList/wishlist';

//Services
import HttpService from '../services/http-service';

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);

    //ini array empty, don't want null to ini first
    this.state = {products:[]}; 

    // Bind functions
    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this); // need to bind all functions
    this.loadData();
  }

  loadData = () => {
        var self = this;
        http.getProducts().then(data => {
          self.setState({products: data}) // everytime setState reloads component render()
        }, err => {
          // "You Stink!" if error
        });
  }
  
  productList = () => {
      const list = this.state.products.map((product) => 
        <div className="col-sm-4" key={product._id}> {/*key outer level */}
          <Product title={product.title} price={product.price} imgUrl={product.imgUrl} />
        </div>
      
    );
    return (list);
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
        <div className="container-fluid App-main">
          <div className="row">
              <div className="col-sm-8">
                <div className="row">
                  {this.productList()}
                </div>
              </div>
              <div className="col-sm-4">
                <WishList />
              </div>  
            </div>
        </div>
      </div>
  )
  }
}

export default App;

