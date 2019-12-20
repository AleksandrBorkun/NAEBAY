import React from 'react';
import FormInputField from '../../components/forms/FormInputField';
import FormSelectField from '../../components/forms/FormSelectField';
import styles from './AddProductPage.module.css'
import FormFieldsSet from '../../components/forms/FormFieldsSet';

export default function (props) {
    return (
        <form className='Add New Product' id='title' onSubmit={props.onProductAddSubmited}>
            <h1 style={styles}>Add New Product!</h1>
            <FormFieldsSet
                legend='Product Details'
                formFields={ // < - - - - cюда впихиваем все элементы которые должны быть в сете через запятую
                    [
                        <FormInputField
                            label='Title*'
                            type='text'
                            onChange={props.onFormFieldChanged}
                            name='name'
                            placeholder='Set Title Here' />,
                        <FormSelectField
                            label='Categories*'
                            onChange={props.onFormFieldChanged}
                            name='categories'
                            values={props.categories} />,
                        <FormInputField
                            label='Description*'
                            type='text'
                            onChange={props.onFormFieldChanged}
                            placeholder='Set Title Here'
                            name='desc' />,
                        <FormInputField
                            label='Price *'
                            type='text'
                            placeholder='set price'
                            name='price'
                            onChange={props.onFormFieldChanged} />,
                        <FormInputField
                            label='Image *'
                            type='file'
                            onChange={props.handleFilesChosen}
                            name='image'
                            multiple={true} />,
                        <AddedFilesList {...props} />
                    ]
                }
            />
            <FormFieldsSet
                legend='Contac Information'
                formFields={[
                    <FormInputField
                        label='Address *'
                        type="text"
                        placeholder="Set Address"
                        name='Address'
                        onChange={props.onFormFieldChanged} />,
                    <FormInputField
                        label='Phone Number'
                        type='text'
                        placeholder="Phone number"
                        name='Phone number'
                        onChange={props.onFormFieldChanged} />,
                    <FormInputField
                        label='The contact person'
                        type='text'
                        placeholder="The contact person"
                        name='The contact person'
                        onChange={props.onFormFieldChanged} />,
                    <FormSelectField
                        label='Payment Type'
                        onChange={props.onFormFieldChanged}
                        name='paytype'
                        values={['PayPal', 'Cash', 'Bank']} />
                ]}
            />
            <button className = {styles.formSubmitBtn} type='submit'>Revise</button>
            <button className = {styles.formSubmitBtn}type='submit'>Save</button>
        </form>
    )
}

function AddedFilesList(props) {
    return <ul className={styles.ul}>
        {props.addedFiles.map((image: File, key) => {
            return (
                <li className={styles.li} key={key}>
                    {image.name} - {image.size}Kb
                    <button className = {styles.removeListItemBtn} type='button' onClick={() => props.handleRemoveClicked(image)}>X</button>
                </li>
            )
        })
        }
    </ul>
}