import React from 'react'
import "./App.css";
import Header from "./components/header/header";
import { getProducts, getCategories } from './components/firebase/database';
import AppContext from './context/AppContext';
import { Route } from 'react-router';
import ConsumerHome from './pages/ConsumerHome';
import DealerHomePage from './pages/DealerHomepage';
import LoginPage from './pages/LoginPage';
import AddProductPage from './pages/AddProductPage';

class App extends React.Component<any, { [key: string]: any }>{
  constructor(props) {
    super(props);
    this.onCategotyButtonClicked = this.onCategotyButtonClicked.bind(this)
    this.getItems = this.getItems.bind(this)
    this.state = {
      categories: [] as [],
      currentCategory: 'All',
      products: [] as Product[],
    }
  }

  // выполняеться автоматически при загрузке компонента
  componentDidMount() {
    getProducts().then(resp => {
      this.setState({ products: resp })
    })
    getCategories().then(resp => {
      this.setState({ categories: resp })
    })
  }

  //выполняется при нажатии на кнопку с категорией
  onCategotyButtonClicked(currentCategory) {
    this.setState({
      currentCategory: currentCategory
    })
  }

  getItems(): Product[] {
    if (!this.state.currentCategory || this.state.currentCategory === 'All') {
      return this.state.products || [] as Product[];
    } else {
      return this.state.products.filter(item => item.category === this.state.currentCategory)
    }
  }

  //выполняеться автоматически. рендерит на экран компоненты
  render() {
    return (
      <AppContext.Provider value={this.state}>
      <div className="App">
        <Header />
        <Route
          path = '/'
          exact
          render = {() => <ConsumerHome 
            categories = {this.state.categories}
            onCategotyButtonClicked={this.onCategotyButtonClicked}
            getItems={this.getItems } />} />
          <Route
            path = '/dealer'
            exact
            render = {() => <DealerHomePage/>} />
                      <Route
            path = '/login'
            exact
            render = {() => <LoginPage/>} />
          <Route
            path = '/products/add'
            exact
            render = {()=> <AddProductPage/>}/>
      </div>
      </AppContext.Provider>
    );
  }
}

export default App;


interface Product {
  name: string,
  price: string,
  category: string
}