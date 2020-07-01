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
    const { onChangeFunction } = this.props
    onChangeFunction(e)
  }

  render() {
    const { validateUserName, text } = this.props
    return (
      <StyledInput
        type='text'
        defaultValue={text}
        errorMessage={this.errorMessage}
        onBlur={() => this.validateFunction()}
        onChange={this.onChangeFunction}
      />
    )
  }
}

export default InputComponent
