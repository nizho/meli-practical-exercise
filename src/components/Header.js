import React from 'react';
import InputSearch from './InputSearch';
import IsoLogo from './IsoLogo';

class Header extends React.Component{
    render(){
        return(
            <div className='header-grid'>
                <header className='nav-header'>
                        <IsoLogo />
                        <InputSearch />                
                </header>
            </div>
        )
    }
}
export default Header;