import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import ImagesData from '../../common/images/images.json'
import ImageListComponent from '../../components/ImageListComponent'
@observer
class ImagesRoute extends Component {
  @observable clickedStatus = false
  changeClickStatus = () => {
    this.clickedStatus = !this.clickedStatus
  }
  render() {
    return (
      <ImageListComponent
        changeClickStatus={this.changeClickStatus}
        ImagesData={ImagesData.slice(0, 8)}
        clickedStatus={this.clickedStatus}
      />
    )
  }
}

export default ImagesRoute
