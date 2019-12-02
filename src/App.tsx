import React from "react";
import "./App.css";
import Header from "./components/header/header";
import CategoriesFilterComponent from "./components/category/categories";
import MySearch from "./components/search/search";

let isLoggedIn = false;

function App() {
  return (
    <div className="App">
      <Header />
      <MySearch />
      {/* <SearchForm/> */}
      <div>{isAuthenticated() ? <Logout /> : <Login />}</div>
      <div>
        <CategoriesFilterComponent />
      </div>
    </div>
  );
}

function isAuthenticated() {
  return isLoggedIn;
}

function Logout() {
  return (
    <button
      onClick={() => {
        isLoggedIn = !isLoggedIn;
      }}
    >
      Logout
    </button>
  );
}

function Login() {
  return (
    <button
      onClick={() => {
        isLoggedIn = !isLoggedIn;
      }}
    >
      Login
    </button>
  );
}

export default App;
