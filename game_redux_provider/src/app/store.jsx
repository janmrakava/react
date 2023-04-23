import { combineReducers, createStore } from 'redux';

import { boardReducer } from '../features/board/boardSlice.jsx';

const rootReducer = combineReducers({
  board: boardReducer,
});

export const store = createStore(rootReducer);