import React from 'react';
import styles from './FormStyles.module.css'

export default function(props){
    return (
        <div className={styles.inputBlock}>
        <label className={styles.lbl}> {props.label} </label>
        <select    
            className = {styles.inputField}
            onChange={props.onFormFieldChanged} name={props.name}>
            {props.values.map( (value, key) => {
                return <option key={key} value = {value}>{value}</option>
                    }                
                )}
        </select>
    </div>
    )
}