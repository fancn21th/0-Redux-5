import { createStore } from 'redux';

const reducer = function (state, action) {
   if(action.type === 'INC'){
       return state + 1;
   }
   return state;
}

const store = createStore(reducer, 0); // state is 0 hereby

store.subscribe(()=>{
    console.log('store changed', store.getState());
});

store.dispatch({type: 'INC', payload: 1});
store.dispatch({type: 'INC', payload: 1});
store.dispatch({type: 'INC', payload: 1});
store.dispatch({type: 'INC', payload: 1});