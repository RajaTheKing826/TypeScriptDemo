import React, { Component } from 'react'

function WithHoverElements(WrappedComponent) {
  class HoveredClass extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <div>
          <WrappedComponent />
        </div>
      )
    }
  }

  return <HoveredClass />
}

export default WithHoverElements
