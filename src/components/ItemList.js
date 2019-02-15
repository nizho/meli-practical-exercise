import React from 'react';
import queryString from 'query-string'
import Item from './Item';
import Breadcrumb from './breadcrumb';

const axios = require('axios')

class ItemList extends React.Component{

    state = {
        items: []
    }

    componentDidUpdate () {
        
    }

    componentDidMount () {
        this.searchItems()
    }

    searchItems = () => {
        const values = queryString.parse(this.props.location.search)

        axios.get(`http://localhost:5000/api/items?q=${values.q}`)
        .then(response => {  
            this.setState({items: response.data.items})
        })
    } 

    render(){
        return(
            <React.Fragment>
                <Breadcrumb />          
                <div className='item-list-container'>
                    {Object.keys(this.state.items).map(key => (
                        <Item
                            key = {key} 
                            items={this.state.items[key]}
                        />
                    ))}    
                </div>
            </React.Fragment>
        ) 
    }
}

export default ItemList;