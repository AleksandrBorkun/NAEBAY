import React from 'react'
import "./App.css";
import Header from "./components/header/header";
import { CategoriesFilterComponent } from "./components/category/categories";
import MySearch from "./components/search/search";
import { ProductsTable } from './components/products/productsTable';
import { getProducts, getCategories } from './components/firebase/database';

class App extends React.Component<any, { [key: string]: any }>{
  constructor(props) {
    super(props);
    this.onCategotyButtonClicked = this.onCategotyButtonClicked.bind(this)
    this.getItems = this.getItems.bind(this)
    this.onSearchFieldChanged = this.onSearchFieldChanged.bind(this)
    this.onSelected = this.onSelected.bind(this)
    this.onSearchSubmited = this.onSearchSubmited.bind(this)
    this.state = {
      categories: [] as [],
      currentCategory: 'All',
      products: [] as Product[],
      searchValue: '',
      searchTemp: '',
      filter: 'name',
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
    return this.state.products
      .filter(item => item.category === this.state.currentCategory || this.state.currentCategory === 'All')
      .filter(item => {
        if (this.state.filter === 'name') {
          return item.name.toLowerCase().includes(this.state.searchValue)
        } else {
          return item.price.toLowerCase().includes(this.state.searchValue)
        }
      })

  }


  onSearchFieldChanged(event) {
    console.log("Значение в поиске" + event.target.value);
    this.setState({
      searchTemp: event.target.value.toLowerCase()

    })
  }

  onSearchSubmited(event) {
    event.preventDefault();
    this.setState({
      searchValue: this.state.searchTemp
    })
  }

  onSelected(event) {
    console.log(event.target.value)
    this.setState({
      filter: event.target.value.toLowerCase()

    })
  }

  //выполняеться автоматически. рендерит на экран компоненты
  render() {
    return (
      <div className="App">
        <Header />
        <MySearch
          onSearchSubmited={this.onSearchSubmited}
          onSearchFieldChanged={this.onSearchFieldChanged}
          onSelected={this.onSelected} />

        <CategoriesFilterComponent
          categories={this.state.categories}
          currentCategory={this.state.currentCategory}
          onCategotyButtonClicked={this.onCategotyButtonClicked}
          products={this.state.products}
          getItems={this.getItems} />

        <ProductsTable getItems={this.getItems} />
      </div>
    );
  }
}

export default App;


interface Product {
  name: string,
  price: string,
  category: string
}