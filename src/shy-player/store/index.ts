import { createStore ,compose} from 'redux';
import reducer from './reducer';
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(reducer,composeEnhancers())
export default store;