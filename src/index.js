import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './styles/index.css'
import App from './components/App'
import BaseLayout from './components/BaseLayout'
import AccountDetail from './containers/AccountDetail'
import UserDetail from './containers/UserDetail'
import UserList from './containers/UserList'
// redux imports
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(

  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/users/:id/:accountID' component={AccountDetail} />
          <Route path='/users/:id' component={UserDetail} />
          <Route path='/users' component={UserList} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>

, document.getElementById('root'))
registerServiceWorker()
