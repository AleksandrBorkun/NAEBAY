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
    this.onSearchFieldChanged = this.onSearchFieldChanged.bind(this)
    this.onSelected = this.onSelected.bind(this)
    this.onSearchSubmited = this.onSearchSubmited.bind(this)
    this.hanleFilesChosen = this.hanleFilesChosen.bind(this) 
    this.handleFileRemoveClicked = this.handleFileRemoveClicked.bind(this)
    this.handleFileUploads = this.handleFileUploads.bind(this)
    
    this.state = {
      categories: [] as [],
      currentCategory: 'All',
      products: [] as Product[],
      searchValue: '',
      searchTemp: '',
      filter: 'name',
      addedFiles: [] as File[]
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

  hanleFilesChosen(event){
    let temp = this.state.addedFiles;
    if(event.target.files && event.target.files.length > 0){
      let count = temp.length;
      for(let file of event.target.files){
        console.log(file)
        if(count > 10){
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
  }

  handleFileRemoveClicked(event:File){
    let temp = this.state.addedFiles.filter(item=>{return item !== event});
    this.setState({
      addedFiles: temp
    })
  }

  handleFileUploads(){
    // let filesToUpload = [];
    if(this.state.addedFiles){
      for(let i = 0; i < this.state.addedFiles.length; i++){
        const file = this.state.addedFiles[i] as File
        this.getBase64(file, (result)=>{
          console.log(result)
        })
      }
    }
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
          path = '/'
          exact
          render = {() => <ConsumerHome 
            categories = {this.state.categories}
            onCategotyButtonClicked={this.onCategotyButtonClicked}
            getItems={this.getItems } 
            onSearchSubmited={this.onSearchSubmited}
            onSearchFieldChanged={this.onSearchFieldChanged}
            onSelected={this.onSelected}
            addedFiles = {this.state.addedFiles}
            hanleFilesChosen = {this.hanleFilesChosen}
            handleFileRemoveClicked = {this.handleFileRemoveClicked}
            handleFileUploads = {this.handleFileUploads}
            />} />
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