import React,{Component} from 'react'
import {createStore} from 'redux'


class App extends Component{
   render() {

    //A reducer function must have two parameters
    //State , Action

    const reducer = (state={},action) => {
      if(action.type == 'a'){
        return{
          ...state,
          A: 'i am a'
        }
      }
      if(action.type == 'b')
      {
        return{
          ...state,
          B : 'i am b'
        }
      }
        return state
    }

    const store = createStore(reducer)

    store.subscribe(()=>{
      console.log(store.getState())
    })

    store.dispatch({type: 'b'})
    store.dispatch({type: 'something'})
    store.dispatch({type: 'a'})
    store.dispatch({type: 'something'})

    return (
      <div className="App">
       
      </div>
    );
   }
}

export default App;
