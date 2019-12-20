import React from 'react';
import FormInputField from '../../components/forms/FormInputField';
import FormSelectField from '../../components/forms/FormSelectField';
import styles from './AddProductPage.module.css'

export default function (props) {
    return (
        <div>
        <h1>Add New Product!</h1>
        <form className='Add New Product' id='title' onSubmit = {props.onProductAddSubmited}>
            <fieldset>
                <legend className={styles.legend}>Product Info</legend>
                <FormInputField
                    className={styles.inputBlock}
                    label='Title*'
                    type='text'
                    onChange={props.onFormFieldChanged}
                    name='name'
                    placeholder='Set Title Here' />
                <FormSelectField
                    label='Categories*'
                    className={styles.inputBlock}
                    onChange={props.onFormFieldChanged} 
                    name='categories'
                    values = {props.categories}/>
                <FormInputField
                    label='Description*'
                    className={styles.inputBlock}
                    type='text'
                    onChange={props.onFormFieldChanged}
                    placeholder='Set Title Here'
                    name='desc' />
                <FormInputField
                    className={styles.inputBlock}
                    label='Price *'
                    type='text'
                    placeholder='set price'
                    name='price'
                    onChange={props.onFormFieldChanged} />
                <FormInputField
                    label='Image *'
                    type='file'
                    onChange={props.handleFilesChosen}
                    name='image'
                    multiple={true}
                    className={styles.inputBlock} />
                <div>
                    {props.addedFiles.map((image: File, key) => {
                        return (
                            <p key={key}>
                                {image.name} - {image.size}Kb
                                <button
                                    onClick={() => props.handleRemoveClicked(image)}>+</button>
                            </p>
                        )
                    })
                    }
                </div>
            </fieldset>
            <fieldset>
                <legend className={styles.legend}>Add Contacts</legend>
                <FormInputField
                    label='Address *'
                    type="text"
                    placeholder="Set Address"
                    name='Address'
                    onChange={props.onFormFieldChanged}
                    className={styles.inputBlock} />
                <FormInputField
                    label='Phone Number'
                    type='text'
                    placeholder="Phone number"
                    name='Phone number'
                    onChange={props.onFormFieldChanged} 
                    className={styles.inputBlock}/>
                <FormInputField
                    label='The contact person'
                    type='text'
                    placeholder="The contact person"
                    name='The contact person'
                    onChange={props.onFormFieldChanged}
                    className={styles.inputBlock} />
                <FormSelectField
                    label='Payment Type'
                    onChange={props.onFormFieldChanged} 
                    name='paytype'
                    className={styles.inputBlock}
                    values={['PayPal', 'Cash', 'Bank']}/>
            </fieldset>
            <button type='submit'>Revise</button>
            <button type='submit'>Save</button>
        </form>
        </div>
    )
}