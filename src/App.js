import React, {useState} from 'react';
import Home from './Containers/Home'
import NavBar from './Containers/NavBar';
import {Provider} from 'react-redux';
import Store from './Store/Store';
import Item from './Containers/Item';
import Cart from './Containers/Cart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemList from './Containers/ItemList';
import Category from './Containers/Category';
import DragDown from './Components/DragDown';
import Loading from './Components/Loading';

function App() {

  const [dragToggle , setDragToggle ] = useState ( false );
  
  const toggleDrag = () => {
    setDragToggle(!dragToggle);
  }

  return (
    <Provider store={Store}>
      <Router>
        <NavBar toggleDrag={toggleDrag}/>
        <DragDown dragToggle={dragToggle} toggleDrag={toggleDrag}/>
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
