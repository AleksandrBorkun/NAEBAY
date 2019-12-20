import React from 'react';
import styles from './FormStyles.module.css'

export default function(props){
    return (
        <div className={styles.inputBlock}>
        <label className={styles.lbl}> {props.label} </label>
        <select 
            required    
            className = {styles.inputField}
            onChange={props.onChange} 
            name={props.name}>
            <option value="">None</option>
            {props.values.map( (value, key) => {
                return <option key={key} value = {value}>{value}</option>
                    }                
                )}
        </select>
    </div>
    )
}