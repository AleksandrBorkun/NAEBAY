import React from 'react';

export default function FormFieldsSet(props) {
    return (
        <fieldset>
        <legend className={props.className}>{props.legend}</legend>
            {props.formFields.map(formField => {
                return formField
            })}
        </fieldset>)
}