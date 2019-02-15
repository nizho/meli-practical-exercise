import React from 'react';
import shipingIcon from '../assets/ic_shipping.png';

const Item = (props) => {
    return(
        <React.Fragment>
            {console.log(props.items)}
            <div className='item-grid-container'>
                <div className='item'>
                    <div className='box-img'>
                        <img src={props.items.picture} className='item-img' alt='item img'></img>
                    </div>
                    <div className='box-price'>
                        <span className='item-price'>${props.items.price.amount}</span>
                        <img src={shipingIcon} show={(props.items.free_shipping).toString()} className='shipping-icon' alt='shipping icon imgage'></img>
                    </div>
                    <div className='box-region'><span className='region'>Catamarca</span></div>                            
                    <div className='box-short-desc'><span className='item-short-desc'>{props.items.title} </span></div>
                </div>                     
            </div>
        </React.Fragment>
    ) 
}

export default Item;
