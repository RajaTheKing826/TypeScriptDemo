import React, { Component } from 'react'

import { observer } from 'mobx-react'

import NoDataView from '../common/NoDataView'

import PostModel from '../../stores/models/PostModel'

import Post from '../Post'

import { PostsListWrapper } from './styledComponents'

type TodoListProps = {
  posts: Array<PostModel>
}

@observer
class PostsList extends Component<TodoListProps> {
  render() {
    const { posts } = this.props

    if (posts.length === 0) {
      return <NoDataView />
    }
    return (
      <PostsListWrapper>
        {posts.map(postItem => {
          return <Post key={postItem.id} post={postItem} />
        })}
      </PostsListWrapper>
    )
  }
}

export default PostsList
