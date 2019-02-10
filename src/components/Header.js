import React from 'react';
import InputSearch from './InputSearch';
import ButtonSearch from './ButtonSearch';
import IsoLogo from './IsoLogo';

class Header extends React.Component{
    render(){
        return(
            <header className='nav-header'>
                <IsoLogo />
                <InputSearch />
                <ButtonSearch />
            </header>
        )
    }
}

export default Header;