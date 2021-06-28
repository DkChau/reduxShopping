import React from 'react';
import {useEffect} from 'react';
import Home from './Containers/Home'
import NavBar from './Containers/NavBar';
import {Provider} from 'react-redux';
import Store from './Store/Store';
import Item from './Containers/Item';
import Cart from './Containers/Cart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemList from './Containers/ItemList';
import Category from './Containers/Category';

function App() {

  useEffect(()=>{
 
  },[])
  
  return (
    <Provider store={Store}>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/shop' component={ItemList}></Route>
          <Route exact path='/item/:id' component={Item}></Route>
          <Route exact path='/cart' component={Cart}></Route>
          <Route exact path='/category/:id' component={Category}></Route>
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
