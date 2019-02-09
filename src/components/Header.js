import React from 'react'

class Header extends React.Component{
    render(){
        return(
            <header className='nav-header'>
                <input type='text' className='nav-search-input' placeholder='No dejes de buscar'></input>
                <button className='searchBtn'>B</button>
            </header>
        ) 
    }
}


export default Header;