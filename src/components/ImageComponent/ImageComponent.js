import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { AnimationWrapper } from 'react-hover-animation'

import {
  StyledImage,
  StyledButton,
  TotalWrapper,
  Details,
  StyledSpan
} from './styledComponent'

@observer
class ImageComponent extends Component {
  @observable hoverStatus = false
  @observable showDetailsStatus = false
  doHover = () => {
    this.hoverStatus = true
  }

  removeHover = () => {
    this.hoverStatus = false
  }

  showDetails = () => {
    const { changeClickStatus } = this.props
    this.showDetailsStatus = !this.showDetailsStatus
    changeClickStatus()
  }

  render() {
    const { image, changeClickStatus, clickedStatus } = this.props
    return (
      <TotalWrapper onMouseEnter={this.doHover} onMouseLeave={this.removeHover}>
        <StyledImage
          status={
            (this.hoverStatus && !clickedStatus) || this.showDetailsStatus
          }
          loading='lazy'
          className='lazy'
          src={image.src}
          alt={image.alt}
        />
        {(this.hoverStatus && !clickedStatus) || this.showDetailsStatus ? (
          <StyledButton onClick={this.showDetails}> ^ </StyledButton>
        ) : (
          ''
        )}
        {this.showDetailsStatus ? (
          <Details>
            <StyledSpan>These Are Image Details</StyledSpan>
            <StyledSpan>I think this data is enough for you</StyledSpan>
          </Details>
        ) : (
          ''
        )}
      </TotalWrapper>
    )
  }
}

export default ImageComponent
