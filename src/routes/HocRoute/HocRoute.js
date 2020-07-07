import React from 'react'

import SampleComponent from '../../components/SampleComponent'

class HocRoute extends React.Component {
  InputRef = React.createRef()

  componentDidMount() {
    this.InputRef.current.focus()
  }

  render() {
    return <SampleComponent ref={this.InputRef} />
  }
}

export default HocRoute
