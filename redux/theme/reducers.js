import { createReducer, createActions } from "reduxsauce";
import produce from "immer";


const INITIAL_STATE = {
  
  globalstyle:{
   backgroundColor:'#2dc268',
   width:300,
   height:400,
  },
 
};

const { Types, Creators } = createActions({
  Style : ["payload"],
});

export const ActionTypes = Types;
export const Actions = Creators;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STYLE]: produce((draft, { payload }) => ({ ...draft, ...payload })),

});