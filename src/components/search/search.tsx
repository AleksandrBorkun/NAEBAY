import React from 'react';
import styles from './search.module.css'

function MySearch(props) {
    return (
        <form className="example" onSubmit={props.onSearchSubmited}>
            <input className={styles.mySearch} 
                type="text" 
                placeholder="Search.." 
                name="search" 
                onChange={props.onSearchFieldChanged}></input>
            <select onChange={props.onSelected}>
                <option value='name'>Имя</option>
                <option value='price'>Цена</option>
            </select>
            <button className={styles.mySearch} type="submit">Искать ...</button>
            <br></br>
            <label>Images</label>
            <input type='file' multiple onChange={props.hanleFilesChosen}/>
            <button onClick = {props.handleFileUploads}>Add File(s)</button>
            {props.addedFiles.map( (image : File, key) =>{
                return <p key = {key}>
                     {image.name} - {image.size}Kb 
                     <button 
                        value={key} 
                        onClick = {() => props.handleFileRemoveClicked(image)}>X</button></p>
            })}
        </form>

    )
}

export default MySearch;
