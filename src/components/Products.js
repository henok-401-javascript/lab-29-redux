import React from 'react' ;

import {connect} from 'react-redux';


function Products(props){
 
let newProducts = [];

for(let i = 0; i < props.products.length; i++){
if(props.products[i].category === props.currentCategory){
  newProducts.push(<h4 key={i}>{props.products[i].name} </h4>);
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