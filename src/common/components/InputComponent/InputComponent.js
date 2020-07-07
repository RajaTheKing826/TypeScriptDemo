import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

import { ValidateUserName } from '../../utils/validationUtils'

import { StyledInput } from './styledComponent'

@observer
class InputComponent extends Component {
  @observable errorMessage = ''

  validateFunction = () => {
    const { validateUserName, text } = this.props
    this.errorMessage = validateUserName(text)
  }

  onChangeFunction = e => {
    // console.log(this.props)
    // const { onChangeFunction } = this.props
    this.props.onChangeFunction(e)
  }

  render() {
    const { validateUserName, text, forwardRef } = this.props
    return (
      <StyledInput
        type='text'
        defaultValue={text}
        errorMessage={this.errorMessage}
        onBlur={() => this.validateFunction()}
        onChange={this.onChangeFunction}
        ref={forwardRef}
      />
    )
  }
}

export default InputComponent
