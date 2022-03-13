import { card1 } from 'img/export'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from 'redux/actions/cards'
import DeleteSVG from 'svg/DeleteSVG'
import Input from '../input/Input'

function SelectedCard(config) {

  const {
    id,
    foodImg = card1,
    title = 'title',
    price = 3.14,
    classType = 'removed',
    count = 3,
  } = config

  const dispatch = useDispatch()
  const selectedCardRef = useRef()
  const { cartCards } = useSelector(state => state.cards)

  const deleteCardFromCart = () => {

    selectedCardRef.current.classList.add('removeFromCart')
    selectedCardRef.current.classList.remove('addedToCart')



    setTimeout(() => {
      dispatch(deleteFromCart({ id }))
    }, 1000)
  }

  return (
    <li className={ `selectedCard ${classType}` } ref={ selectedCardRef }>
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
        <span className='selectedCard__right-price'>$ { `${Math.floor(count * price).toString()}` }</span>

        <button
          className="selectedCard__right-btn delete-btn"
          onClick={ deleteCardFromCart }
        >
          <DeleteSVG />
        </button>
      </div>
    </li>
  )
}

export default SelectedCard