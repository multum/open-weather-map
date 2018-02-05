import {combineReducers} from 'redux';

const cityReducer = function() {
  const cacheState = JSON.parse(window.localStorage.getItem('cities')) || [];

  return (state = cacheState, action) => {
    // ----------------------------------
    if (action.type === 'ADD_CITY') {

      const newState = state.concat(action.city);

      window.localStorage.setItem('cities', JSON.stringify(newState));
      return newState;
    }
    // ----------------------------------
    // ----------------------------------
    if (action.type === 'REMOVE_CITY') {

      const newState = state.filter(city => {
        return city.id !== action.id;
      });

      window.localStorage.setItem('cities', JSON.stringify(newState));
      return newState;
    }
    // ----------------------------------
    return state;
  };
}();

export default combineReducers({
  cityReducer
});