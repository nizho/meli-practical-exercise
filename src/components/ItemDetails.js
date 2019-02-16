import React from 'react';
import Breadcrumb from './breadcrumb';
const axios = require('axios')

class ItemDetails extends React.Component{

    state = {
        item: {},
        InfoLoaded: false
    }

    componentDidMount () {
        this.searchItems()
    }

    searchItems = () => {
        axios.get(`http://localhost:5000/api/items/${this.props.match.params.id}`)
        .then(response => {
            //console.log(response.data.item)
            this.setState({item: response.data.item})
            this.setState({infoLoaded: true})
        })
    } 

    render(){
        if (this.state.infoLoaded) {
            return(
                <React.Fragment>
                    <Breadcrumb />
                    <div className='itemDetails-grid-container'>
                        <div className='box-img-detail'>
                            <img src={this.state.item.picture} className='item-img-detail' alt='item imagen detail'></img>
                        </div>
                        <div className='resume-item-panel'>
                            <div className='box-qty-sold'>
                                <span className='qty-sold'></span>
                            </div>
                            <div className='box-item-desc'>
                                <span className='item-desc'>{this.state.item.title}</span>
                            </div>
                            <div className='box-item-price'>
                                <span className='item-price-detail'>${this.state.item.price.amount}</span>
                            </div>
                            <div className='box-btn-buy'>
                                <button className='btn-buy'>COMPRAR</button>
                            </div>
                        </div>
                        <div className='box-large-desc'>
                            <span className='title-large-desc'>Descripcion del producto</span>
                            <span className='large-desc'>{this.state.item.description}</span>
                        </div>

                    </div>    
                </React.Fragment>
            )
        } else {
            return (
                <div>No se cargo aun</div>
            ) 
        }
    }
}
export default ItemDetails;
