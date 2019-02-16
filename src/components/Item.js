import React from 'react';
import shipingIcon from '../assets/ic_shipping.png';
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

export default withRouter(Item)
