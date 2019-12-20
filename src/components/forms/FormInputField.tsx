import React from 'react';
import styles from './FormStyles.module.css'

export default function FormInputField(props){
    return (
        <div className={styles.inputBlock}>
            <label className ={styles.lbl}>{props.label}</label>
            <input className = {styles.inputField}
                type={props.type}
                onChange={props.onChange} 
                placeholder = {props.placeholder}
                name={props.name}
                multiple = {props.multiple}
                accept={props.accept}
                required/>
        </div>
    )
}