import React from 'react'
import { CheckBox, Body, Text, ListItem } from 'native-base';
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <ListItem
    onPress={onClick}
  >
  <CheckBox checked={completed} />
  <Body>
    <Text>{text}</Text>
    </Body>
  </ListItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo