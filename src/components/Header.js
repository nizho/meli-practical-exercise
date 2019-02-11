import React from 'react';
import InputSearch from './InputSearch';
import IsoLogo from './IsoLogo';

class Header extends React.Component{
    render(){
        return(
            <header className='nav-header'>
                <IsoLogo />
                <InputSearch />
            </header>
        )
    }
}
export default Header;