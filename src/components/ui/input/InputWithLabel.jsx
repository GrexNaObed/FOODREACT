import React from 'react'

function InputWithLabel({ labelText = 'Input title', type = 'text', placeholder = 'Some text' }) {
    return (
        <label className='label'>
            { labelText }
            <input
                className='input'
                type={ type }
                placeholder={ placeholder }
            />
        </label>
    )
}

export default InputWithLabel