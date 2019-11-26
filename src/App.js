import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <SearchForm/> */}
      <div>
      {isAuthenticated() ? <Logout/> : <Login/>}</div>
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
