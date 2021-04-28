import {createReducer, createActions} from 'reduxsauce';
import produce from 'immer';

const INITIAL_STATE = {
  iconColor: '#2dc268',
  borderColor: '#2dc268',
  activeTintColor: '#2dc268',
  globalstyle: {
    backgroundColor: '#2dc268',
    width: 300,
    height: 400,
  },
  Container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  Color: {
    backgroundColor: '#2dc268',
  },
  textColor: {
    color: '#2dc268',
  },
};

const {Types, Creators} = createActions({
  SetStyle: ['payload'],
});

export const ActionTypes = Types;
export const Actions = Creators;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_STYLE]: produce((draft, {payload}) => ({...draft, ...payload})),
});
