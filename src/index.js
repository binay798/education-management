import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {combineReducers} from 'redux';
import assignmentReducer from './store/reducers/Assignments/Assignments';
import authenticatedUserReducer from './store/reducers/AuthenticatedUser/AuthenticatedUser';
import feedbackReducer from './store/reducers/Feedback/Feedback';
import noticesReducer from './store/reducers/Notices/Notices';
import userReducer from './store/reducers/Users/Users';
import {BrowserRouter} from 'react-router-dom';
import startReducer from './store/reducers/start/start'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  assignments:assignmentReducer,
  authenticatedUser:authenticatedUserReducer,
  feedback:feedbackReducer,
  notice:noticesReducer,
  user:userReducer,
  started:startReducer
})
const store = createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
