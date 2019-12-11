import React from 'react';
import styles from './search.module.css'

function MySearch(props) {
    return (
        <form className="example" onSubmit={props.onSearchSubmited}>
            <input className={styles.mySearch} type="text" placeholder="Search.." name="search"
                onChange={props.onSearchFieldChanged}></input>
            <select onChange={props.onSelected}>
                <option value='name'>Имя</option>
                <option value='price'>Цена</option>

            </select>

            <button className={styles.mySearch} type="submit">Искать ...</button>
        </form>

    )
}

export default MySearch;
