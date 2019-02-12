import React from 'react';
import Header from './Header';
import Breadcrumb from './breadcrumb';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';


class RouterViewContent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <Breadcrumb />
                <ItemList />
                {/* <ItemDetails /> */}
            </React.Fragment>
        )
    }
}

export default RouterViewContent;