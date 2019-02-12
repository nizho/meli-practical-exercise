import React from 'react';
import Item from './Item';

class ItemList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className='item-list-container'>
                    <Item />          
                </div>
            </React.Fragment>
        ) 
    }
}

export default ItemList;