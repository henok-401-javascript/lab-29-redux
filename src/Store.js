
import {createStore} from 'redux';

const initState = {
  cart: 0,
  category : [{name:'Electronics' , displayName: 'Electronics '},{name:'Food' , displayName: 'Foods'}],

  products : [{name:'Apple',description:'One apple a day',stoke:'30',price:'5',category:'Food'},{name:'Pizza',description:'The definition of happiness',stoke:'50',price:'10',category:'Food'},{name:'Kitfo',description:'Ethiopian beef ',stoke:'30',price:'15',category:'Food'} ,{name:'MacAir',description:'Easy to use',stoke:'3',price:'1000',category:'Electronics'},{name:'Tv',description:'Connect with world',stoke:'66',price:'700',category:'Electronics'}],

  currentCategory:'Food',
};

const reducer = (state = initState , action) =>{

let newState = {...state}

  switch(action.type){
     case 'ADD-TO-CART':
     break;
     case 'CHANGE-CATEGORY':
       newState.currentCategory = action.payload;
       break;
       default:
         break;

  }
 
  return newState;
} 
export default createStore(reducer);
