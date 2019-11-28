import React from 'react';
import './App.css';
import Header from './components/header/header';
import CategoriesFilterComponent from './components/category/categories';

let isLoggedIn = false;

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
  return isLoggedIn;
}

function Logout(){
  return (<button onClick={()=>{isLoggedIn=!isLoggedIn}}>Logout</button>)
}

function Login(){
  return (<button onClick={()=>{isLoggedIn=!isLoggedIn}}>Login</button>)
}

export default App;
