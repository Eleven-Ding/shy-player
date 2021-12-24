import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import store from './shy-player/store/index'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


