import React, { Component } from 'react'
import store from './store/index'
import { Provider } from 'react-redux'

import Count from './components/Count'
import Control from './components/Control'

class App extends Component {
  render() {



    return (
      <Provider store={store} >
        <div className="App">
          <h1>Redux JS</h1>
          <Count />
          <Control />
        </div>
      </Provider>
    );
  }
}

export default App
