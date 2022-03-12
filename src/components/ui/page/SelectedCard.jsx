import { card1 } from 'img/export'
import React from 'react'
import DeleteSVG from 'svg/DeleteSVG'
import Input from '../input/Input'

function SelectedCard({ foodImg = card1, title = 'title', price = 3.14, count = 3, }) {
  return (
    <li className='selectedCard'>
      <div className="selectedCard__left">
        <div className="selectedCard__left-top">
          <div className="selectedCard__left-wrapper">
            <img src={ foodImg } alt="" />
            <div className="selectedCard__left-inner">
              <h4 className="selectedCard__left-title">{ title }</h4>
              <span className="selectedCard__left-price">$ { Math.floor(price) }</span>
            </div>
          </div>
          <span className="selectedCard__left-count qty">{ count }</span>
        </div>
        <div className="selectedCard__left-bottom">
          <Input />
        </div>
      </div>
      <div className="selectedCard__right">
        <span className='selectedCard__right-price'>$ { `${Math.floor(count * price).toString()}`}</span>

        <button className="selectedCard__right-btn delete-btn">
          <DeleteSVG />
        </button>
      </div>
    </li>
  )
}

export default SelectedCard