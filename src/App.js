import React from 'react';
import Header from './components/Header';
import {Provider} from 'react-redux';
import store from './Store';
import Products from './components/Products';
import Category from './components/Categories';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

  <Header/>
  <Category/>
  <Products/>
      </Provider>
    </div>
  );
}

export default App;
