import React from 'react';
import './App.css';
import { Section } from 'react-bulma-components';
import Home from "./Components/Home";
import { Route } from 'react-router-dom';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home}/>
      <Route path="/zips" render={(renderProps) => <Search  url="zips" /> } />
    </div>
  );
}

export default App;
