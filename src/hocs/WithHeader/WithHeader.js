import React from 'react'
import { render } from '@testing-library/react'

import InputComponent from '../../common/components/InputComponent'
import { ValidateUserName } from '../../common/utils/validationUtils'

import { StyledHeader, HeaderWrapper, Logo } from './styledComponent'

function WithHeaderComponent(WrappedComponent) {
  class WithHeader extends React.Component {
    render() {
      const { forwardRef } = this.props
      return (
        <HeaderWrapper>
          <StyledHeader>
            <Logo src='data:image/png;base64,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' />
          </StyledHeader>
          <InputComponent
            validateUserName={ValidateUserName}
            text='Raja The King'
            onChangeFunction={() => {}}
            forwardRef={forwardRef}
          />
          <WrappedComponent {...this.props} />
        </HeaderWrapper>
      )
    }
  }
  return React.forwardRef((props, ref) => (
    <WithHeader {...props} forwardRef={ref} />
  ))
}

export default WithHeaderComponent
