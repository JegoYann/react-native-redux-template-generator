import React from 'react'
import { Text } from 'native-base';
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <Text style={{fontWeight:'bold'}}>{children}</Text>
  }

  return (
    <Text
      onPress={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </Text>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link