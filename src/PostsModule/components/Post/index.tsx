import React, { Component } from 'react'
import { observer } from 'mobx-react'

import PostModel from '../../stores/models/PostModel'
import Strings from '../../i18n/strings/Strings.json'

import { TodoWrapper, PostItem, BoldText } from './styledComponents'

type TodoProps = {
  post: PostModel
}

@observer
class Post extends Component<TodoProps> {
  render() {
    const { post } = this.props
    const { id, userId, title, body } = post
    return (
      <TodoWrapper>
        {/* <BoldText>{Strings.postCard.postId}</BoldText>
        <PostItem>{id}</PostItem> */}
        <BoldText>{Strings.postCard.postUserId}</BoldText>
        <PostItem>{userId}</PostItem>
        <BoldText>{Strings.postCard.postTitle}</BoldText>
        <PostItem>{title}</PostItem>
        <BoldText>{Strings.postCard.postBody}</BoldText>
        <PostItem>{body}</PostItem>
      </TodoWrapper>
    )
  }
}

export default Post
