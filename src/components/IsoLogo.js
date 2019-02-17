import React from 'react';
import isoLogo from '../assets/Logo_ML.png';

class IsoLogo extends React.Component{
    render(){
        return(
            <a href='/'>
                <img src={isoLogo} className='isoLogo' alt='iso logo'></img>
            </a>
        ) 
    }
}

export default IsoLogo;