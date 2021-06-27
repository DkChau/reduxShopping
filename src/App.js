import React from 'react';
import {useEffect} from 'react';
import Home from './Containers/Home'
import {Provider} from 'react-redux';
import Store from './Store/Store';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {

  useEffect(()=>{

  },[])
  
  return (
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
