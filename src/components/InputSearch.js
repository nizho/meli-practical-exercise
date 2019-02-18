import React from 'react';
import { withRouter } from 'react-router-dom'


class InputSearch extends React.Component{

    constructor (props) {
        super(props)
        this.redirectItemList = this.redirectItemList.bind(this)
    }

    searchInputRef = React.createRef();

    /**
     * Cambio de URL para que router cambie a listaado de items
     * la url se forma utilizando valor tomado del elemento searchInput
     */
    redirectItemList(event) {
        event.preventDefault()
        this.props.history.push(`/items?q=${this.searchInputRef.current.value}`);
    }
    
    render(){
        return(
            <React.Fragment>
                <form className='nav-search-container' onSubmit={this.redirectItemList}>
                    <input type='text' id='searchInput' ref={this.searchInputRef} className='nav-search-input' placeholder='No dejes de buscar'>
                    </input>
                    <button className='searchBtn' >
                        <i className="nav-icon-search"></i>
                    </button>
                </form>
            </React.Fragment>   
        ) 
    }
}

export default withRouter(InputSearch)