import { createReducer, createActions } from "reduxsauce";
import produce from "immer";

const INITIAL_STATE = {
  Main:'#2dc268',
  Dark:'#186625',
};

const { Types, Creators } = createActions({
  Color : ["payload"],
});

export const ActionTypes = Types;
export const Actions = Creators;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.COLOR]: produce((draft, { payload }) => ({ ...draft, ...payload })),

});