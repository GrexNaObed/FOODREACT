import { arrowDown } from 'img/export'
import React, { useRef } from 'react'
import { dropDownItems, _dropDownItems } from './dropDownItems'

function SelectDate({ selectText = 'Dine In' }) {

    const selectRef = useRef()
    const openMenu = (item) => {

        selectRef.current.classList.toggle('open')
        if (item.target.dataset.type && !item.target.classList.contains('selected')) {
            selectRef.current.querySelectorAll('.select__dropDown-item').forEach(item => item.classList.remove('selected'))
            item.target.classList.add('selected')
            return
        }
    }

    return (
        <div
            className='select'
            onClick={ openMenu }
            ref={ selectRef }
        >
            <div className="select__input">
                <div className="select__input-wrapper">
                    <img src={ arrowDown } alt="arrowDown.svg" />
                    <span>{ selectText }</span>
                </div>
            </div>
            <div className="select__dropDown">
                <ul>
                    {
                        _dropDownItems.map(item =>
                            <li
                                className='select__dropDown-item'
                                key={ item.id }
                                data-type={`${item.title}`}
                            >{ dropDownItems[item.title]['type'] }</li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default SelectDate