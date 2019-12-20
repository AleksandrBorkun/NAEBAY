import React from 'react'
import "./App.css";
import Header from "./components/header/header";
import { getProducts, getCategories, addNewProduct } from './components/firebase/database';
import AppContext from './context/AppContext';
import { Route } from 'react-router';
import ConsumerHome from './pages/ConsumerHome';
import DealerHomePage from './pages/DealerHomepage';
import LoginPage from './pages/LoginPage';
import AddProductPage from './pages/AddProduct/AddProductPage';

class App extends React.Component<any, { [key: string]: any }>{
  constructor(props) {
    super(props);
    this.onCategotyButtonClicked = this.onCategotyButtonClicked.bind(this)
    this.getItems = this.getItems.bind(this)
    this.onSearchFieldChanged = this.onSearchFieldChanged.bind(this)
    this.onSelected = this.onSelected.bind(this)
    this.onSearchSubmited = this.onSearchSubmited.bind(this)
    this.onFormFieldChanged = this.onFormFieldChanged.bind(this)
    this.handleFilesChosen = this.handleFilesChosen.bind(this)
    this.handleRemoveClicked = this.handleRemoveClicked.bind(this)
    this.onProductAddSubmited = this.onProductAddSubmited.bind(this)
    this.state = {
      categories: [] as [],
      currentCategory: 'All',
      products: [] as Product[],
      searchValue: '',
      searchTemp: '',
      filter: 'name',
      addedFiles: [] as File[],
      formField: {
        category: 'all',
        paytype: 'paypal'
      },
      binaryFiles: [] as string[]
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
    this.setState({
      filter: event.target.value.toLowerCase()

    })
  }

  onFormFieldChanged(event) {
    let temp = this.state.formField;
    let key = event.target.name;
    temp[key] = event.target.value.toLowerCase();
    this.setState({
      formField: temp
    })
  }

  handleFilesChosen(event) {
    let temp = this.state.addedFiles;
    if (event.target.files && event.target.files.length > 0) {
      let count = temp.length;
      for (let file of event.target.files) {
        if (count > 10) {
          alert('Number of files more than 10')
          break;
        }
        count++;
        temp.push(file)
      }
      this.setState({
        addedFiles: temp
      })
    }
    let binaryTemp = [] as string[]
      for(let i = 0; i < this.state.addedFiles.length; i++){
        const file = this.state.addedFiles[i] as File
        this.getBase64(file, (result : string)=>{
          binaryTemp.push(result)
        })
    }
    this.setState({
      binaryFiles: binaryTemp
    })
}

  handleRemoveClicked(event: File) {
    let temp = this.state.addedFiles.filter(item => { return item !== event });
    this.setState({
      addedFiles: temp
    })

  }

  async onProductAddSubmited(event){
    event.preventDefault();
    if(!this.state.addedFiles){
      alert('Files Should Be Added!!!')
      return;
    }
    addNewProduct({...this.state.formField, image : this.state.binaryFiles}).then(resp => {console.log('Success. Doc Id Is: ' + resp)})
    this.setState({formField: {}})
    document.location.href = '/'
  }


  getBase64(file, cb){
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onload = function(file){
      cb(render.result)
    };
  }

  //выполняеться автоматически. рендерит на экран компоненты
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <div className="App">
          <Header />
          <Route
            path='/'
            exact
            render={() => <ConsumerHome
              categories={this.state.categories}
              onCategotyButtonClicked={this.onCategotyButtonClicked}
              getItems={this.getItems}
              onSearchSubmited={this.onSearchSubmited}
              onSearchFieldChanged={this.onSearchFieldChanged}
              onSelected={this.onSelected} />} />
          <Route
            path='/dealer'
            exact
            render={() => <DealerHomePage />} />
          <Route
            path='/login'
            exact
            render={() => <LoginPage />} />
          <Route
            path='/products/add'
            exact
            render={() => <AddProductPage
              addedFiles={this.state.addedFiles}
              handleFilesChosen={this.handleFilesChosen}
              onFormFieldChanged={this.onFormFieldChanged}
              handleRemoveClicked={this.handleRemoveClicked}
              categories = {this.state.categories}
              onProductAddSubmited = {this.onProductAddSubmited}
            />} />
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