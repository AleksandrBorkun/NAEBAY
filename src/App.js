import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js';
import CategoriesFilterComponent from './components/category/categories';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <SearchForm/> */}
      <div>
      {isAuthenticated() ? <Logout/> : <Login/>}</div>
    <div>
      <CategoriesFilterComponent/>
    </div>
    </div>
  );
}

function isAuthenticated(){
  return false;
}

function Logout(){
  return (<button>Logout</button>)
}

function Login(){
  return (<button>Login</button>)
}

export default App;
