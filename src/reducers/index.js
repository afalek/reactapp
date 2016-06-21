/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
import date from './date';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import navigation from './navigation';
/* Populated by react-webpack-redux:reducer */
const reducers = { date, todos, visibilityFilter, navigation };
module.exports = combineReducers({
	...reducers,
    routing: routerReducer
});
