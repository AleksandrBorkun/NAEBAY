import React from 'react';

export default function FormInputField(props){
    return (
        <div className={props.className}>
        <label>{props.label}
            <input 
                type={props.type}
                onChange={props.onChange} 
                placeholder = {props.placeholder}
                name={props.name}
                multiple = {props.multiple}
                />
        </label>
    </div>
    )
}