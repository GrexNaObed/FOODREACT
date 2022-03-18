import { HOTDISHES } from 'components/pages/home/sortList'
import { card1 } from 'img/export'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCard, addToCart } from 'redux/actions/cards'
import { v1 } from 'uuid'

function Card(card = {}) {


    const {
        img = card1,
        title = 'title',
        price = 1,
        count = 1,
        type
    } = card

    const dispatch = useDispatch()

    const addCardToCart = () => {
        dispatch(addToCart(card))
    }

    return (
        <div
            className='card'
            data-type={ type }
            onClick={ addCardToCart }
        >
            <div className="card__inner">
                <div className="card__inner-img">
                    <img src={ img } alt="" />
                </div>
                <h4 className="card__inner-title">{ title }</h4>
                <span className="card__inner-price">$ { price }</span>
                <span className="card__inner-count">{ count } Bowls available</span>
            </div>
        </div>
    )
}

export default Card