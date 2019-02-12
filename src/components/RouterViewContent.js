import React from 'react';
import Header from './Header';
import Breadcrumb from './breadcrumb';
import ItemList from './ItemList';


class RouterViewContent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <Breadcrumb />
                <ItemList />
            </React.Fragment> 
        )
    }
}

export default RouterViewContent;