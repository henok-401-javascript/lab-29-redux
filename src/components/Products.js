import React from 'react' ;

import {connect} from 'react-redux';
import { Button } from '@material-ui/core';


function Products(props){
 
let newProducts = [];

for(let i = 0; i < props.products.length; i++){
if(props.products[i].category === props.currentCategory){
  newProducts.push(
    <div>
      <img  src={props.products[i].img} alt=""/>
       <p>{props.products[i].name}</p>
      <Button  variant="contained" color="primary"
      key={i}
      onClick={() =>{
        props.dispatch({
          type:'ADD-TO-CART',
          payload:props.products[i].carts,
        })
      }}
      >
  AddTo Cart
</Button>

    </div>
  )
}
}

return(
  <div>
   
    {newProducts}
  </div>
)
}

const mapStateToProps = (state) =>{
  
  return{
    products:state.products,
    currentCategory:state.currentCategory,
  }
}

export default connect(mapStateToProps)(Products);