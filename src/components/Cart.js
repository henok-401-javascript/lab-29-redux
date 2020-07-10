import React from 'react';

import {connect} from 'react-redux';

function Cart(props){
props.dispatch({
  type:'ADD-TO-CART',
  payload:props.category ,
})

}
const mapStateToProps = (state) =>{
  return{
    cart:state.cart,
  }
}

export default connect(mapStateToProps)(Cart);
