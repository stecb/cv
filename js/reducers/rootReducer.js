import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const INITIAL_STATE = require('json!../../config/cv.json'); // eslint-disable-line

function indexReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  index: indexReducer,
  routing: routerReducer
});
