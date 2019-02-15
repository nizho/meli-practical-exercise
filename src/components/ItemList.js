import React from 'react';
import Item from './Item';
import Breadcrumb from './breadcrumb';
const axios = require('axios')

class ItemList extends React.Component{

    state = {
        items: []
    }

    componentDidMount () {
        this.searchItems()
    }

    searchItems = () => {
        axios.get(`http://localhost:5000/api/items?q=cafetera`)
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
                            items={this.state.items[key]}
                        />
                    ))}    
                </div>
            </React.Fragment>
        ) 
    }
}

export default ItemList;