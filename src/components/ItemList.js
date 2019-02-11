import React from 'react';

class ItemList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className='itemListContainer'>
                    <div className='itemList'></div>
                </div>
                <div className='itemListContainer'>
                    <div className='itemList'></div>
                </div>
            </React.Fragment>
        ) 
    }
}

export default ItemList;