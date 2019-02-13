import React from 'react';
import Item from './Item';
import Breadcrumb from './breadcrumb';

class ItemList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Breadcrumb />          
                <div className='item-list-container'>
                    <Item />          
                </div>
            </React.Fragment>
        ) 
    }
}

export default ItemList;