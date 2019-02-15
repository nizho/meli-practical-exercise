import React from 'react';
import shipingIcon from '../assets/ic_shipping.png';


class Item extends React.Component {

    render(){
        return(
            <React.Fragment>
                <div className='item-grid-container'>
                    <div className='item' >
                        <div className='box-img'>
                            <img src={this.props.items.picture} className='item-img' alt='item img'></img>
                        </div>
                        <div className='box-price'>
                            <span className='item-price'>${this.props.items.price.amount}</span>
                            <img src={shipingIcon} show={(this.props.items.free_shipping).toString()} className='shipping-icon' alt='shipping icon imgage'></img>
                        </div>
                        <div className='box-region'><span className='region'>Catamarca</span></div>                            
                        <div className='box-short-desc'><span className='item-short-desc'>{this.props.items.title} </span></div>
                    </div>                     
                </div>
            </React.Fragment>
        )
    }     
}

export default Item;
