import React from 'react'
import { Container, Text } from 'native-base';
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <Text>{'Show: '}
    <FilterLink filter="SHOW_ALL">
      <Text>All</Text>
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      <Text>Active</Text>
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      <Text>Completed</Text>
    </FilterLink>
  </Text>
)

export default Footer