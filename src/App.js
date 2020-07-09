import React from 'react';
import Header from './components/Header';
import {Provider} from 'react-redux';
import Store from './Store';

function App() {
  return (
    <div className="App">
      <Provider Store={Store}>

  <Header/>
      </Provider>
    </div>
  );
}

export default App;
