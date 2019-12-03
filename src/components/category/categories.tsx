import React from 'react';
import styles from './categories.module.css'

export function CategoriesFilterComponent(props) {
    return (
        <div>
            <div className={styles.categoriesContainer}>
                {props.categories.map((item, i) => {
                    return <SimpleCategory
                        category={item}
                        key={i}
                        onCategotyButtonClicked={props.onCategotyButtonClicked} />
                })}
            </div>
        </div>
    );
}

function SimpleCategory(props) {
    return (<button className={styles.simplpeCategory} onClick={() => props.onCategotyButtonClicked(props.category)}>{props.category}</button>)
}