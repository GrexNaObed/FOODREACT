import { search } from 'img/export'
import React from 'react'


function TopLine({ withSearchInput, withDate }) {
    return (
        <div className='topLine'>
            <div className="topLine__left">
                <h1 className="topLine__left-title">Jaegar Resto</h1>
                { withDate && <span className='topLine__left-date'>Tuesday, 2 Feb 2021</span> }
            </div>
            {
                withSearchInput &&
                <div className="topLine__right">
                    <div className="topLine__right-input">
                        <img src={ search } alt="search" />
                        <input
                            placeholder='Search for food, coffe, etc..'
                            name="search"
                            type="text"
                            maxLength={ 20 }
                            id=""
                        />
                    </div>
                </div>
            }

        </div>
    )
}

export default TopLine