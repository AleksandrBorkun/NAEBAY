import React from 'react';
import { CategoriesFilterComponent } from '../components/category/categories';

export default function (props) {
    return (


        <form className='Add New Product' id='title'>
            <h1>Add New Product!</h1>
            <hr />

            <div className='validator'>
                <label>Headline
                    <span>*</span>
                    <input type='text' onChange={props.onFormFieldChanged} name='name'></input>
                </label>
            </div>

            <h1 className='Indent'></h1>

            <div className='categories'>
                <label> Categories
                    <span>*</span>
                </label>
                <select onChange={props.onFormFieldChanged} name='categories'>
                    <option value='Car'>Car</option>
                    <option value='Electronic'>Electronic</option>
                    <option value='Other'>Other</option>
                </select>
            </div>

            <h1 className='Indent'></h1>

            <div>
                <label>Description <span>*</span> </label>
                <textarea id='add-description' data-maxtext='9000' onChange={props.onFormFieldChanged}></textarea>
            </div>

            <h1 className='Indent'></h1>

            <div>
                <input type="text" placeholder="Price" name='price' onChange={props.onFormFieldChanged}></input>
                <button type='submit'>Submit</button>
            </div>

            <h1 className='Indent'></h1>

            <div>
                <label>Image</label>
                <input type='file' onChange={props.handleFilesChosen} multiple required />
                {props.addedFiles.map((image: File, key) => {
                    return (
                        <p key={key}>
                            (image.name) - (image.size)Kb
                            <button
                                onClick={() => props.handleRemoveClicked(image)}>+</button>
                        </p>
                    )
                })
                }
            </div>

            <h1>Your contact details</h1>
            <hr />

            <div>
                <label>Location
                    <input type="text" placeholder="Location" name='Location' onChange={props.onFormFieldChanged}></input>
                </label>
            </div>

            <h1 className='Indent'></h1>

            <div>
                <label>Phone number
                    <input type='text' placeholder="Phone number" name='Phone number' onChange={props.onFormFieldChanged}></input>
                </label>
            </div>

            <h1 className='Indent'></h1>

            <div>
                <label>The contact person
                <input type='text' placeholder="The contact person" name='The contact person' onChange={props.onFormFieldChanged}></input>
                </label>

            </div>

            <select onChange={props.onFormFieldChanged} name='paytype'>
                <option value='PayPal'>PayPal </option>
                <option value='Cash'>Cash </option>
                <option value='Bank'>Bank  </option>
            </select>

            <h1 className='Indent'></h1>

            <button type='submit'>Revise</button>
            <button type='submit'>Save</button>

        </form>
    )
}