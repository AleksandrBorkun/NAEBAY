import React from 'react'
import MySearch from '../components/search/search'
import { CategoriesFilterComponent } from '../components/category/categories'
import { ProductsTable } from '../components/products/productsTable';

export default function ConsumerHome(props){
    return (
    <>
        <MySearch  
            onSearchSubmited={props.onSearchSubmited}
            onSearchFieldChanged={props.onSearchFieldChanged}
            onSelected={props.onSelected}
            addedFiles = {props.addedFiles}
            hanleFilesChosen = {props.hanleFilesChosen}
            handleFileRemoveClicked = {props.handleFileRemoveClicked}
            handleFileUploads = {props.handleFileUploads}/>
        <CategoriesFilterComponent
          categories={props.categories}
          onCategotyButtonClicked={props.onCategotyButtonClicked}/>
        <ProductsTable getItems={props.getItems} />
    </>)
}