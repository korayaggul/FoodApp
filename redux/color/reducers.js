import { createReducer, createActions } from "reduxsauce";
import produce from "immer";

const INITIAL_STATE = {
  White:'#FFFFFF',
  Second:'#E84D1D',
  DarkOrange:'#d3482b',
  Orange:'#d75c36',
  LightOrange:'#dd7143',
  Green:'#008000',
  Red:'#ff0000',
  Title:'#E84E27'

};

const { Types, Creators } = createActions({
  setColor : ["payload"],
});

export const ActionTypes = Types;
export const Actions = Creators;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_COLOR]: produce((draft, { payload }) => ({ ...draft, ...payload })),

});