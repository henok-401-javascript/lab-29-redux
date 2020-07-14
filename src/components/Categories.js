import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
let categoryName = [];


function Category(props){

  for(let i =0; i < props.category.length; i++){
    categoryName.push(  <Button key={i} variant="contained" color="secondary" onClick={(e) =>{
props.dispatch({
type:'CHANGE-CATEGORY',
payload:props.category[i].name,
})

    }}>{props.category[i].name || props.category[i].displayName}</Button> )
  }
 
return(
  <div>
    
    {categoryName}
  </div>
)
}

const mapStateToProps = (state) =>{
  
  return{
    category:state.category,
    cart:state.cart,

  }
}

export default connect(mapStateToProps) (Category);

