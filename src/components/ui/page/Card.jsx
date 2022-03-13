import { HOTDISHES } from 'components/pages/home/sortList'
import { card1 } from 'img/export'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCard, addToCart } from 'redux/actions/cards'
import { v1 } from 'uuid'

function Card({ foodImg = card1, title = 'title', price = 1, count = 1, type }) {


    const dispatch = useDispatch()
    const { cartCards } = useSelector(state => state.cards)

    const addCardToCart = () => {
        // console.log('s', cartCards.find(card => card.title !== title));
        // if (cartCards.find(card => card.title !== title)) {
            dispatch(addToCart(
                {
                    id: v1(),
                    img: card1,
                    title: `${title}`,
                    price: price,
                    count: count,
                    class: 'addedToCart',
                    type: HOTDISHES
                }
            ))
        // }
    }

    return (
        <div
            className='card'
            data-type={ type }
            onClick={ addCardToCart }
        >
            <div className="card__inner">
                <div className="card__inner-img">
                    <img src={ foodImg } alt="" />
                </div>
                <h4 className="card__inner-title">{ title }</h4>
                <span className="card__inner-price">$ { price }</span>
                <span className="card__inner-count">{ count } Bowls available</span>
            </div>
            {/* <div>qwqwd</div> */ }
        </div>
    )
}

export default Card