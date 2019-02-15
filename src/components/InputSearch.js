import React from 'react';


class InputSearch extends React.Component{
    
    searchInputRef = React.createRef();

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