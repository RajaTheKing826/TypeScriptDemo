import React from 'react'

import WithHeader from '../../hocs/WithHeader'
import InputComponent from '../../common/components/InputComponent'

import { FirstDiv, SecondDiv, ThirdDiv, DivsWrapper } from './styledComponent'

class SampleComponent extends React.Component {
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
