import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore,  applyMiddleware } from 'redux';
import CounterReducer from './reducer/CounterReducer';
import App from './component/App';
import createSagaMiddleware from 'redux-saga'
import saga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()

const createStoreWithMiddleware =  applyMiddleware(sagaMiddleware)( createStore)
const store =createStoreWithMiddleware(
    CounterReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

sagaMiddleware.run(saga);

const rootElement = document.getElementById('root')

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, rootElement)