import React from 'react';
import styles from './categories.module.css'

export default class CategoriesFilterComponent extends React.Component<any, any>{
    constructor(props) {
        super(props)
        this.filterSelection = this.filterSelection.bind(this)
        this.getItems = this.getItems.bind(this)
        this.SimpleCategory = this.SimpleCategory.bind(this)
        this.getCategoriesList = this.getCategoriesList.bind(this)
        this.state = {
          currentCategory: 'All',
        }
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
                {this.getCategoriesList().map((item, i) =>{
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

//mocks for backend below
getCategoriesList(){
    return ["All","Cars", "Toys", "Electronics"]
}

getItems(category){        
    const ITEMS = [
    {
        "name": "Tesla",
        "price": 100000,
        "category": "Cars"
    },{
        "name": "Lego",
        "price": 100,
        "category": "Toys"
    },{
        "name": "MacBook",
        "price": 1000,
        "category": "Electronics"
    },
]
    if(!category || category === 'All'){
        return ITEMS;
    } else {
        return ITEMS.filter(item => item.category === category)
    }
}
}