import { createStore } from 'redux';
import { themeReducer } from './rootReducer';

export const store =  createStore(themeReducer)