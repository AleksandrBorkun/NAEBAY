import React from 'react';
import styles from './categories.module.css'
import axios from 'axios';

interface Product{
    name: string,
    price: string,
    category: string
}

export default class CategoriesFilterComponent extends React.Component<any, any>{
    constructor(props) {
        super(props)
        this.filterSelection = this.filterSelection.bind(this)
        this.getItems = this.getItems.bind(this)
        this.SimpleCategory = this.SimpleCategory.bind(this)
        this.state = {
          currentCategory: 'All',
          categories:[],
          products: [] as Product[]
        }
      }

    componentDidMount() {
        axios.get('/items').then(resp => {
            this.setState({products : resp.data})
        })    
        axios.get('/categories').then(resp => {
            this.setState({categories : resp.data})
        })
    }      

    filterSelection(item){
        this.setState({
            currentCategory : item,
        })
        console.log(item)
    }

    SimpleCategory(props){
        return (<button className={styles.btn} onClick = {() => this.filterSelection(props.category)}>{props.category}</button>)
    }

    render() { 
        return (
            <>
                <div id="myBtnContainer">
                    {this.state.categories.map((item, i) =>{
                    console.log(`shown ${item} - ${i}`);
                    return <this.SimpleCategory key={i} category={item}/>
                    })}
                </div>
                <div className={styles.container}>
                    {this.getItems(this.state.currentCategory).map((item, i) =>{
                    return <p key={i}>{item.name} - {item.price} $</p>
                    })}
                </div>
            </>
        );
    }

    getItems(category): Product[] {
        if (!category || category === 'All') {
            return this.state.products || [] as Product[];
        } else {
            return this.state.products.filter(item => item.category === category)
        }
    }
}