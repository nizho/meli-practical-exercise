import React from 'react';
import Breadcrumb from './breadcrumb';
const axios = require('axios')

class ItemDetails extends React.Component{

    state = {
        item: {},
        categories: [],
        infoLoaded: false
    }

    componentDidMount () {
        this.searchItems()
    }

    /**
     * Metodo inicial para popular los detalles del item.
     * El flag infoLoaded permite que la vista espere la carga de datos para hacer render
     */
    searchItems = () => {
        axios.get(`http://localhost:5000/api/items/${this.props.match.params.id}`)
        .then(response => {
            this.setState({item: response.data.item, categories: response.data.categories,infoLoaded: true })
        })
    }

    /**
     * Servicio retorna valor en ingles, se mapea a ESP
     */
    conditionMap () {
        if (this.state.item.condition === 'new') {
            return 'Nuevo'
        } else if (this.state.item.condition === 'used') {
            return 'Usado'
        } else {
            return 'No se informa'
        }
    }

    render(){
        if (this.state.infoLoaded) {
            return(
                <React.Fragment>
                    <Breadcrumb
                        categories = {this.state.categories} 
                    />
                    <div className='itemDetails-grid-container'>
                        <div className='box-img-detail'>
                            <img src={this.state.item.picture} className='item-img-detail' alt='item imagen detail'></img>
                        </div>
                        <div className='resume-item-panel'>
                            <div className='box-qty-sold'>
                                <span className='qty-sold'>{this.conditionMap()} - {this.state.item.sold_quantity} vendidos</span>
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
                <div className='loader'>Cargando...</div>
            ) 
        }
    }
}
export default ItemDetails;
