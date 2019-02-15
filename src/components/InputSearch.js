import React from 'react';
const axios = require('axios')


class InputSearch extends React.Component{
    
    searchInputRef = React.createRef();
    
    State = {
        items: []
    }


    searchItems = (event) => {
        event.preventDefault();
        axios.get(`http://localhost:5000/api/items?q=${this.searchInputRef.current.value}`)
        .then(response => {  
            console.log(response.data.items)    
            this.setState({items: response.data.items})
        })
    } 

    render(){
        return(
            <React.Fragment>
                <form className='nav-search-container' onSubmit={this.searchItems}>
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

export default InputSearch;