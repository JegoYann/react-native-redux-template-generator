import React from 'react'
import { Container, Button, Content, Item, Input, Text, Label } from 'native-base';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input = '';

  return (
    <Container style={{ paddingTop: 20 }}>
        <Item regular>
          <Input placeholder='Soirée ciné, Faire les courses, ...' onChangeText={(text) => input = text} />
        </Item>
        <Button style={{alignSelf: 'center', marginTop:20}}
          success
          onPress={e => {
            e.preventDefault()
            if (!input.trim()) {
              return
            }
            dispatch(addTodo(input))
            input = ''
          }}>
          <Text>Add</Text>
        </Button>
    </Container>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo