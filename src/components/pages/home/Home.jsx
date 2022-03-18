import SelectDate from 'components/ui/dropDown/SelectDate'
import InputWithLabel from 'components/ui/input/InputWithLabel'
import Card from 'components/ui/page/Card'
import TopLine from 'components/ui/page/TopLine'
import { arrowLeft, card2, plus } from 'img/export'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCard } from 'redux/actions/cards'
import ArrowLeftSVG from 'svg/ArrowLeftSVG'
import CreditCardSVG from 'svg/CreditCardSVG'
import PayPallSVG from 'svg/PayPallSVG'
import PlusSVG from 'svg/PlusSVG'
import WalletSVG from 'svg/WalletSVG'
import SelectedCard from '../../ui/page/SelectedCard'
import { _cards } from './cards'
import { ALL, COLDDISHES, sortListItems, _sortListItems } from './sortList'

function Home() {

  const [sortListTargetPosition, setSortListTargetPosition] = useState(0)
  // const [cards, setCards] = useState([])
  const [isContinuePayment, setIsContinuePayment] = useState(false)

  const dispatch = useDispatch()
  const { cards, cartCards } = useSelector(state => state.cards)

  const listRef = useRef()
  const cardRef = useRef()

  const paymentRef = useRef()

  const onMouseEnter = (item) => setSortListTargetPosition(() => item.target.offsetLeft)
  const onMouseLeave = () => setSortListTargetPosition(() =>
    listRef.current.querySelector('.home__sortList-item.active').offsetLeft
  )

  const onListItemClick = (item) => {
    const { type } = item.target.dataset

    if (!type) return


    listRef.current.querySelectorAll('.home__sortList-item')
      .forEach(item => item.classList.remove('active'))

    item.target.classList.add('active')

    cardRef.current.querySelectorAll('.card').forEach(card => {
      card.classList.remove('hide')
      if (card.dataset.type !== type && type !== ALL) {
        card.classList.add('hide')
      }
    })


  }

  useEffect(() => {
    setSortListTargetPosition(() => listRef.current.querySelector('.home__sortList-item.active').offsetLeft)
    // setCards(() => _cards)
  }, [])

  useEffect(() => {
    if (!cartCards.length) {
      paymentRef.current.classList.remove('confirm')
      setIsContinuePayment(() => false)
      return
    }
  }, [cartCards])


  const continuePayment = (type) => () => {
    if (!cartCards.length) return

    type === 'confirm'
      ? paymentRef.current.classList.add('confirm')
      : paymentRef.current.classList.remove('confirm')

    setIsContinuePayment(() => !isContinuePayment)
  }


  return (
    <div className='home'>
      <TopLine withSearchInput withDate />
      <div
        className="home__sortList-wrapper"
      >
        <ul
          className="home__sortList"
          onMouseLeave={ onMouseLeave }
          onClick={ onListItemClick }
          ref={ listRef }
        >
          {
            _sortListItems.map(item =>
              <li
                key={ item.id }
                data-type={ `${item.title}` }
                className={ `home__sortList-item ${item.title === ALL ? 'active' : ''}` }
                onMouseEnter={ onMouseEnter }
              >
                <span>{ sortListItems[item.title]['title'] }</span>
              </li>
            )
          }
          <div
            className="home__sortList-target"
            style={ { left: sortListTargetPosition } }>
          </div>
        </ul>
      </div>
      <div className="home__chooseDishes">
        <div className="home__chooseDishesTop">
          <h3 className="home__chooseDishesTop-title">Choose Dishes</h3>
          <SelectDate />
        </div>
        <div className="home__chooseDishes-cards" ref={ cardRef }>
          {
            cards && cards.map(_card =>
              <Card
                key={ _card.id }
                { ..._card }
              />
            )
          }
        </div>
      </div>
      <div className="home__cart">
        <div className="home__cart-orders">
          {
            !isContinuePayment ?
              <Fragment>
                <h2 className="home__orders-title">Orders #34562</h2>
                <div className="home__orders-btns ">
                  <button className='order-btn active'>Dine In</button>
                  <button className='order-btn'>To Go</button>
                  <button className='order-btn'>Delivery</button>
                </div>

                <div className="home__orders-listTitles">
                  <span className='home__orders-listTitle'>Item</span>
                  <div>
                    <span className='home__orders-listTitle'>Qty</span>
                    <span className='home__orders-listTitle'>Price</span>
                  </div>
                </div>
              </Fragment>
              : <div className='home__orders-confirmation'>
                <button onClick={ continuePayment('cancel') }>
                  <ArrowLeftSVG />
                </button>
                <div className="home__confirmation-block">
                  <div className="home__confirmation-left">
                    <h1>Confirmation</h1>
                    <span>Orders #34562</span>
                  </div>
                  <button>
                    <PlusSVG />
                  </button>
                </div>
              </div>
          }


          <ul className='home__orders-cards'>

            {
              cartCards && cartCards.map(_card =>
                <SelectedCard
                  key={ _card.id }
                  { ..._card }
                  classType='addedToCart'
                />
              )

            }
          </ul>
          <div className="home__orders-buttom">
            <div>
              <span>Discount</span>
              <span>$0</span>
            </div>
            <div>
              <span>Sub total</span>
              <span>$
                {
                  cartCards && cartCards.length
                    ? Math.floor(cartCards.reduce((acc, next) => acc + (next.taken * next.price), 0))
                    : 0
                }
              </span>
            </div>
          </div>
          {
            !isContinuePayment
              ? <button
                className='home__orders-btn continueBtn'
                onClick={ continuePayment('confirm') }
              >Continue to Payment</button>
              : null
          }

        </div>

        <div
          ref={ paymentRef }
          className="home__cart-confirm"
        >
          <h1 className="home__confirm-title">Payment</h1>
          <span className="home__confirm-subTitle">3 payment method available</span>

          <div className="home__confirm-payment">
            <h2 className="home__payment-title">Payment Method</h2>
            <ul className="home__payment-types">
              <li className="home__payment-type">
                <CreditCardSVG />
                <span>Credit Card</span>
              </li>
              <li className="home__payment-type">
                <PayPallSVG />
                <span>Paypal</span>
              </li>
              <li className="home__payment-type">
                <WalletSVG />
                <span>Cash</span>
              </li>
            </ul>

            <InputWithLabel
              labelText='Cardholder Name'
              placeholder='Levi Ackerman'
            />

            <InputWithLabel
              labelText='Card Number'
              placeholder='2564 1421 0897 1244'
              type='text'
            />

            <div className="home__payment-date">
              <InputWithLabel
                labelText='Expiration Date'
                placeholder='02/2022'
                type='date'
              />
              <InputWithLabel
                labelText='CVV'
                placeholder='***'
                type='password'
              />
            </div>

            <div className="home__payment-select">
              <label className='label'>
                <span>Order Type</span>
                <SelectDate selectText='Dine In' />
              </label>
              <label className='label'>
                Table no.
                <input
                  type="text"
                  className="input"
                  placeholder='140'
                />
              </label>
            </div>

            <div className="home__payment-btns">
              <button
                className='button'
                onClick={ continuePayment('cancel') }
              >Cancel</button>
              <button className='button'>Confirm Payment</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home