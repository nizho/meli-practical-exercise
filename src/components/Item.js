import React from 'react';
import dummyPic from '../assets/dummy.jpeg';
import shipingIcon from '../assets/ic_shipping.png';

class Item extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <div className='item-grid-container'>
                        <div className='item'>
                            <div className='box-img'><img src={dummyPic} className='item-img'></img></div>
                            <div className='box-price'>
                                <spam className='item-price'>$ 1200</spam>
                                <img src={shipingIcon} className='shipping-icon'></img>
                            </div>
                            <div className='box-region'><spam className='region'>Catamarca</spam></div>                            
                            <div className='box-short-desc'><spam className='item-short-desc'>Esta es una cafetera fantastica, no lo vas a poder creer te hace un cafe que te aplaudis los pedos</spam></div>
                        </div>                     
                    </div>
                    <div className='item-grid-container'>
                        <div className='item'>
                            <div className='box-img'><img src={dummyPic} className='item-img'></img></div>
                            <div className='box-price'>
                                <spam className='item-price'>$ 1200</spam>
                                <img src={shipingIcon} className='shipping-icon'></img>
                            </div>
                            <div className='box-region'><spam className='region'>Catamarca</spam></div>                            
                            <div className='box-short-desc'><spam className='item-short-desc'>Esta es una cafetera fantastica, no lo vas a poder creer te hace un cafe que te aplaudis los pedos</spam></div>
                        </div>                     
                    </div>
                    
    
            </React.Fragment>
        ) 
    }
}
export default Item;
