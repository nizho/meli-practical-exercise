import React from 'react';
import shipingIconImg from '../assets/ic_shipping.png';
import { withRouter } from 'react-router-dom'


class Item extends React.Component {

    constructor (props) {
        super(props)
        this.redirectItemDetail = this.redirectItemDetail.bind(this)
    }

    redirectItemDetail(event) {
        event.preventDefault()
        this.props.history.push(`items/${this.props.items.id}`);
    }

    shippingIcon (){
        if (this.props.items.free_shipping){
            return (
                <img src={shipingIconImg} className='shipping-icon' alt='shipping icon imgage'></img>
            )
        } else {
            return null
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className='item-grid-container'>
                    <div className='item' onClick={this.redirectItemDetail} >
                        <div className='box-img'>
                            <img src={this.props.items.picture} className='item-img' alt='item img'></img>
                        </div>
                        <div className='box-price'>
                            <span className='item-price'>${this.props.items.price.amount}</span>
                            {this.shippingIcon()}
                        </div>
                        <div className='box-region'><span className='region'>{this.props.items.location}</span></div>                            
                        <div className='box-short-desc'><span className='item-short-desc'>{this.props.items.title} </span></div>
                    </div>                     
                </div>
            </React.Fragment>
        )
    }     
}

export default withRouter(Item)
