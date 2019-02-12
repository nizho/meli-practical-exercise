import React from 'react';
import dummyPicDetail from '../assets/dummyPicDetail.jpg';
import shipingIcon from '../assets/ic_shipping.png';

class ItemDetails extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <div className='itemDetails-grid-container'>
                        <div className='box-img-detail'>
                            <img src={dummyPicDetail} className='item-img-detail'></img>
                        </div>
                        <div className='resume-item-panel'>
                            <div className='box-qty-sold'>
                                <span className='qty-sold'>Deco Reverse sombrero Oxford</span>
                            </div>
                            <div className='box-item-desc'>
                                <span className='item-desc'>Deco Reverse sombrero Oxford</span>
                            </div>
                            <div className='box-item-price'>
                                <span className='item-price'>$ 1.980</span>
                            </div>
                            <div className='box-btn-buy'>
                                <button className='btn-buy'>COMPRAR</button>
                            </div>
                        </div>
                        <div className='box-large-desc'>
                            <span className='title-large-desc'>Descripcion del producto</span>
                            <span className='large-desc'>Lorem Ipsum is simply
                             dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy
                             text ever since the 1500s, when an unknown printer took
                             a galley of type and scrambled it to make a type specimen book.
                             It has survived not only five centuries, but also the leap
                             into electronic typesetting, remaining essentially unchanged.</span>
                        </div>

                    </div>    
            </React.Fragment>
        ) 
    }
}
export default ItemDetails;
