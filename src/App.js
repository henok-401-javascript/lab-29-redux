import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {Provider} from 'react-redux';
import store from './Store';
import Products from './components/Products';
import Category from './components/Categories';
 import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import './style/style.scss';

function App() {
  return (
    <div className="App">
  <Header/>
      <Container maxWidth="sm">
      <Card>
      <Provider store={store}>
  <Category/>
  <Products/>
      </Provider>
      </Card>
      </Container>
  <Footer/>
    </div>
  );
}

export default App;
