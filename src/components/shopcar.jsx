import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { adddiscount, addsubtotal } from '../redux/stores/amount'
import { toggleSetting } from '../redux/stores/setting'
import { updatenum } from '../redux/stores/menu'

import '../style/components.css'

const ShopCar =  function() {

    const subtotal = useSelector((state) => state.amount.subtotal)
    const discount = useSelector((state) => state.amount.discount)
    const menulist = useSelector((state) => state.menu.menulist)


    const dispatch = useDispatch()
 
    return (
        <div className="shopcar">
            <div className='shopcar_bx'>
                <div className="shopcar_header">
                    <img src="" alt="" className='avatar'/>
                    <div className="shopcar_header_text">
                        <span>having a good meal</span>
                        <span>NAN1A5</span>
                    </div>
                    <div className="shopcar_header_btn setting_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='svgicon' onClick={() => dispatch(toggleSetting())}>
                            <path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/>
                        </svg>
                    </div>
                </div>
                
                <div className="shopcar_list">
                    <span className="title">
                        <h2>BILLS</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='svgicon'>
                            <path d="M280 145.3V112h16C309.3 112 320 101.3 320 88S309.3 64 296 64H215.1C202.7 64 192 74.75 192 87.1S202.7 112 215.1 112H232v33.32C119.6 157.3 32 252.4 32 368h448C480 252.4 392.4 157.3 280 145.3zM488 400h-464C10.75 400 0 410.7 0 423.1C0 437.3 10.75 448 23.1 448h464c13.25 0 24-10.75 24-23.1C512 410.7 501.3 400 488 400z"/>
                        </svg>
                    </span>
                    <ul>
                        {
                            menulist.map(item => 
                                <li key={item.id} className='shopitem'>
                                    <img src="" alt="" width='40px' height='40px'/>
                                    <div>
                                        <span>{item.name}</span>  
                                        <span>￥{item.price}</span>
                                    </div>
                                    <div>
                                        <div>
                                            <button onClick={item.num>0?() => dispatch(updatenum({id: item.id, num: -1, price: item.price})):null}> - </button>
                                            <span> { item.num } </span>
                                            <button onClick={item.num<99?() => dispatch(updatenum({id: item.id, num: 1, price: item.price})):null}> + </button>
                                        </div>
                                        <span>移除</span>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                    <div>
                        空空如也
                    </div>
                </div>

                <div className="shopcar_check">
                    <div>
                        <div><h3 className="title">Subtotal:</h3><div><span>+￥{subtotal}</span></div></div>
                        <div><h4 className="title">Discount:</h4><div><span>-￥{discount}</span></div></div>
                    </div>
                    <div>
                        <span className="title">choose the Discount</span>
                        <ul>
                            <li>none</li>
                            <li>满减优惠券</li>
                            <li>无偿优惠券</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="title">Total:</h3><div><span>￥{subtotal - discount}</span></div>
                    </div>
                    <div>
                        <h3 className="title">choose the payment way:</h3>
                        <ul>
                            <li>pay_wx</li>
                            <li>pay_ali</li>
                            <li>pay_wallet</li>
                        </ul>
                        <input type="button" value="Pay Now!!" />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ShopCar