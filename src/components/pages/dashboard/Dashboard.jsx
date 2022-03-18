import SelectDate from 'components/ui/dropDown/SelectDate'
import TopLine from 'components/ui/page/TopLine'
import { card1, user } from 'img/export'
import React from 'react'

function Dashboard() {
    return (
        <div className='dashboard'>
            <div className="dashboard__inner">
                <div className="dashboard__left">
                    <div className="dashboard__left-top">
                        <TopLine withDate='Tuesday 2 Feb, 2021' />
                    </div>
                    <ul className="dashboard__left-items">
                        <li className="dashboard__items-item">
                            <div className="dashboard__items-item-top">
                                <div className="dashboard__items-item-img">
                                    <div></div>
                                </div>
                                <span className='dashboard__items-item-unit success'>+32.40%</span>
                            </div>
                            <strong className="dashboard__items-item-totalRevenue">$10,243.00</strong>
                            <span className='dashboard__items-item-subtxt'>Total Revenue</span>
                        </li>
                        <li className="dashboard__items-item">
                            <div className="dashboard__items-item-top">
                                <div className="dashboard__items-item-img">
                                    <div></div>
                                </div>
                                <span className='dashboard__items-item-unit refusal'>-12.40%</span>
                            </div>
                            <strong className="dashboard__items-item-totalRevenue">23,456</strong>
                            <span className='dashboard__items-item-subtxt'>Total Dish Ordered</span>
                        </li>

                        <li className="dashboard__items-item">
                            <div className="dashboard__items-item-top">
                                <div className="dashboard__items-item-img">
                                    <div></div>
                                </div>
                                <span className='dashboard__items-item-unit success'>+2.40%</span>
                            </div>
                            <strong className="dashboard__items-item-totalRevenue">1,234</strong>
                            <span className='dashboard__items-item-subtxt'>Total Customer</span>
                        </li>
                    </ul>
                    <div className="dashboard__orderReport">
                        <div className="dashboard__orderReport-top">
                            <h2 className="dashboard__orderReport-top-title">Order Report</h2>
                            <div className="select">Filter Order</div>
                        </div>
                        <ul className="dashboard__orderReport-columns">
                            <li className="dashboard__orderReport-column-header">Customer</li>
                            <li className="dashboard__orderReport-column-header">Menu</li>
                            <li className="dashboard__orderReport-column-header">Total Payment</li>
                            <li className="dashboard__orderReport-column-header">Status</li>
                        </ul>

                        <ul className="dashboard__orderReport-items table">
                            <li className="dashboard__orderReport-item">
                                <div className="dashboard__orderReport-item-user">
                                    <div>
                                        <img src={ user } alt="" />
                                    </div>
                                    <span>Eren Jaegar</span>
                                </div>
                                <span className="dashboard__orderReport-item-dish">Spicy seasoned seafood noodles</span>
                                <span className="dashboard__orderReport-item-price">$125</span>
                                <span className="dashboard__orderReport-item-status completed">Completed</span>
                            </li>
                            <li className="dashboard__orderReport-item">
                                <div className="dashboard__orderReport-item-user">
                                    <div>
                                        <img src={ user } alt="" />
                                    </div>
                                    <span>Reiner Braunn</span>
                                </div>
                                <span className="dashboard__orderReport-item-dish">Salted Pasta with mushroom sauce</span>
                                <span className="dashboard__orderReport-item-price">$145</span>
                                <span className="dashboard__orderReport-item-status preparing">Preparing</span>
                            </li>
                            <li className="dashboard__orderReport-item">
                                <div className="dashboard__orderReport-item-user">
                                    <div>
                                        <img src={ user } alt="" />
                                    </div>
                                    <span>Levi Ackerman</span>
                                </div>
                                <span className="dashboard__orderReport-item-dish">Beef dumpling in hot and sour soup</span>
                                <span className="dashboard__orderReport-item-price">$105</span>
                                <span className="dashboard__orderReport-item-status pending">Pending</span>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="dashboard__right">
                    <div className="dashboard__right-top">
                        <div className="dashboard__right-top-inner">
                            <h2 className="dashboard__right-top-title">Most Ordered</h2>
                            <SelectDate selectText='Today' />
                        </div>
                        <ul className="dashboard__right-top-items">
                            <li className="dashboard__right-top-item">
                                <img src={ card1 } alt="" />
                                <div className="dashboard__right-item-txt">
                                    <strong>Spicy seasoned seafood noodles</strong>
                                    <span>200 dishes ordered</span>
                                </div>
                            </li>
                        </ul>
                        <button className='button'>View All</button>
                    </div>
                    <div className="dashboard__right-bottom"></div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard