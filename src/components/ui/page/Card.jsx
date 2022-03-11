import { card1 } from 'img/export'
import React from 'react'

function Card({ foodImg = card1, title = 'title', price = 1, count = 1, type }) {
    return (
        <div className='card' data-type={ type }>
            <div className="card__inner">
                <div className="card__inner-img">
                    <img src={ foodImg } alt="" />
                </div>
                <h4 className="card__inner-title">{ title }</h4>
                <span className="card__inner-price">$ { price }</span>
                <span className="card__inner-count">{ count } Bowls available</span>
            </div>
            {/* <div>qwqwd</div> */}
        </div>
    )
}

export default Card