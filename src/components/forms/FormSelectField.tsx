import React from 'react';

export default function(props){
    return (
        <div className={props.className}>
        <label> {props.label} </label>
        <select onChange={props.onFormFieldChanged} name={props.name}>
            {props.values.map( (value, key) => {
                return <option key={key} value = {value}>{value}</option>
                    }                
                )}
        </select>
    </div>
    )
}