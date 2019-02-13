import React from 'react';
import Header from './Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';


class RouterViewContent extends React.Component{
    render(){
        return(
            <main>
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/items" component={ItemList} />
                        <Route exact path="/items/:id" component={ItemDetails} />
                    </Switch>
                </BrowserRouter>
            </main>
        )
    }
}

export default RouterViewContent;