import React, { Component } from 'react'

import ImageComponent from '../ImageComponent'

import { StyledImageList } from './styledComponent'

class ImageListComponent extends Component {
  render() {
    const { ImagesData, clickedStatus, changeClickStatus } = this.props
    return (
      <StyledImageList>
        {ImagesData.map(image => (
          <ImageComponent
            clickedStatus={clickedStatus}
            changeClickStatus={changeClickStatus}
            image={image}
          />
        ))}
      </StyledImageList>
    )
  }
}

export default ImageListComponent
