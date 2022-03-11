import SelectDate from 'components/ui/dropDown/SelectDate'
import Card from 'components/ui/page/Card'
import TopLine from 'components/ui/page/TopLine'
import React, { useEffect, useRef, useState } from 'react'
import SelectedCard from '../../ui/page/SelectedCard'
import { _cards } from './cards'
import { ALL, sortListItems, _sortListItems } from './sortList'

function Home() {

  const [sortListTargetPosition, setSortListTargetPosition] = useState(0)
  const [cards, setCards] = useState([])

  const listRef = useRef()
  const cardRef = useRef()

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
    setCards(() => _cards)
  }, [])


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
            cards && cards.map(card =>
              <Card
                key={ card.id }
                foodImg={ card.img }
                title={ card.title }
                price={ card.price }
                count={ card.count }
                type={ card.type }
              />
            )
          }
        </div>
      </div>
      <div className="home__cart">
        <div className="home__cart-orders">
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

          <ul className='home__orders-cards'>

            {
              cards && cards.map(card =>
                <SelectedCard
                  key={ card.id }
                  foodImg={ card.img }
                  title={ card.title }
                  price={ card.price }
                  // count={ _cards.filter(item=>item.type === card.type).length }
                  count={ card.count }
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
              <span>$ 21,03</span>
            </div>
          </div>
          <button className='home__orders-btn continueBtn'>Continue to Payment</button>
        </div>
      </div>
    </div>
  )
}

export default Home