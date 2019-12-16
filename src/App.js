import React from 'react';
import './App.css';
import { Section } from 'react-bulma-components';
import Home from "./Components/Home";
import { Route } from 'react-router-dom';
import Search from './Components/Search';
import Add from './Components/Add';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/zips" render={(renderProps) => <Search  url="zips" /> } />
      <Route path="/city" render={(renderProps) => <Search  url="city" /> } />
      <Route path="/all" render={(renderProps) => <Search  url="" /> } />
      <Route path="/add" component={Add} />
    </div>
  );
}

export default App;
