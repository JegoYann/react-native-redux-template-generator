import React from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import todoApp from './reducers'
import Filters from './components/Filters'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

let store = createStore(todoApp)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container style={{padding:20, paddingTop:50, paddingBottom:50}}>
          <Filters />
          <VisibleTodoList />
          <AddTodo />
        </Container>
      </Provider>
    );
  }
}
