import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import LoadingWrapperWithFailure from '../../../components/common/LoadingWrapperWithFailure'

import PostList from '../../components/PostsList'

import PostsStore from '../../stores/PostStore'

import { PostsWrapper } from './styledComponents'

interface PostRouteProps {}

interface InjectedProps extends PostRouteProps {
  postsStore: PostsStore
}

@inject('postsStore')
@observer
class PostsRoute extends Component<PostRouteProps> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.getPosts()
  }

  getInjectedProps = (): InjectedProps => this.props as InjectedProps

  getPostsStore = (): PostsStore => {
    return this.getInjectedProps().postsStore
  }

  getPosts = () => {
    this.getPostsStore().getPosts()
  }

  renderSuccessUI = observer(() => {
    const { posts } = this.getPostsStore()
    return (
      <PostsWrapper>
        <PostList posts={posts} />
      </PostsWrapper>
    )
  })

  render() {
    const { getPostListAPIError, getPostListAPIStatus } = this.getPostsStore()
    return (
      <LoadingWrapperWithFailure
        apiStatus={getPostListAPIStatus}
        apiError={getPostListAPIError}
        onRetry={this.getPosts}
        renderSuccessUI={this.renderSuccessUI}
      />
    )
  }
}

export default PostsRoute
