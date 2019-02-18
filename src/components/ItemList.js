import React from 'react';
import queryString from 'query-string'
import Item from './Item';
import Breadcrumb from './breadcrumb';

const axios = require('axios')

class ItemList extends React.Component {

    state = {
        lastQueryString: String,
        newQueryString: String,
        categories: [],
        items: [],
        InfoLoaded: false
    }

    /**
     * Actualiza vista solo si cambia el queryString de la URL
     */
    
    componentDidUpdate () {
        const values = queryString.parse(this.props.location.search)
        if (this.state.lastQueryString !== values.q ) {
            this.searchItems()    
        }
    }

    componentDidMount () {
        this.searchItems()
    }

    /**
     * Metodo inicial para popular el listado
     * El flag infoLoaded permite que la vista espere la carga de datos para hacer render
     */
    searchItems = () => {
        const values = queryString.parse(this.props.location.search)
        this.setState({lastQueryString: values.q, infoLoaded: false})
        axios.get(`http://localhost:5000/api/items?q=${values.q}`)
        .then(response => {  
            this.setState({items: response.data.items, categories: response.data.categories, infoLoaded: true })
        })
    } 

    render(){
        if (this.state.infoLoaded) {
            return(
                <React.Fragment>
                    <Breadcrumb 
                        categories = {this.state.categories}
                    />          
                    <div className='item-list-container'>
                        {Object.keys(this.state.items).map(key => (
                            <Item
                                key = {key} 
                                items={this.state.items[key]}
                            />
                        ))}
                        <div><br/></div>    
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

export default ItemList;