import React from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';
import Search from './component/Search';
import Home from './component/Home';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Route exact path="/" render={props => <Search {...props} />} />
      <Route path="/Home" render={props => <Home {...props} />} /></BrowserRouter>
    </div>
  );
}

export default App;
