import React from 'react';
import isoLogo from '../assets/Logo_ML.png';

class IsoLogo extends React.Component{
    render(){
        return(
            <img src={isoLogo} className='isoLogo'></img>
        ) 
    }
}

export default IsoLogo;