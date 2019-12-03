import React from 'react'
import styles from './productsTable.module.css'

export function ProductsTable(props){
    return (
        <div className="container">
            <ul className="responsive-table">
                <TableHeader/>
                {props.getItems().map((product, index) => {
                    return <Product key ={index }index={index} product={product}/>
                })}
            </ul>
        </div>
    )
}

//просто шапка таблици
function TableHeader(){
    return (
        <li className={styles.tableHeader}>
            <div className={styles.col + ' ' + styles.colmn1}>Id</div>
            <div className={styles.col + ' ' + styles.colmn2}>Name</div>
            <div className={styles.col + ' ' + styles.colmn3}>Price</div>
            <div className={styles.col + ' ' + styles.colmn4}>Status</div>
        </li>
    )
}

//один елемент таблици (не шапка)
function Product(props){
    return  (
    <li onClick={()=>{console.log(`я нажалась ${props.product.name}`)}}className={styles.tableRow}>
        <div className={styles.col + ' ' + styles.colmn1} data-label="Id">{props.index + 1}</div>
        <div className={styles.col + ' ' + styles.colmn2} data-label="Name">{props.product.name}</div>
        <div className={styles.col + ' ' + styles.colmn3} data-label="Price">{props.product.price}</div>
        <div className={styles.col + ' ' + styles.colmn4} data-label="Status">In Stock</div>
    </li>)
}

interface Product {
    name: string,
    price: string,
    category: string
}