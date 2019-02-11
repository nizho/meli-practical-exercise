import React from 'react';

class InputSearch extends React.Component{
    render(){
        return(
            <React.Fragment>
                <form className='nav-search-container'>
                    <input type='text' className='nav-search-input' placeholder='No dejes de buscar'></input>
                    <button className='searchBtn'>
                        <i className="nav-icon-search"></i>
                    </button>
                </form>
            </React.Fragment>   
        ) 
    }
}

export default InputSearch;