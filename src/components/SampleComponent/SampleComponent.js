import React from 'react'

import WithHeader from '../../hocs/WithHeader'

import { FirstDiv, SecondDiv, ThirdDiv, DivsWrapper } from './styledComponent'

class SampleComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <DivsWrapper>
        <FirstDiv></FirstDiv>
        <SecondDiv></SecondDiv>
        <ThirdDiv></ThirdDiv>
      </DivsWrapper>
    )
  }
}

export default WithHeader(SampleComponent)
