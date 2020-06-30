import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'
import PostsService from '../../services/PostsService'

import PostModel from '../models/PostModel'
import { PostOject } from '../types'

class PostStore {
  postsService: PostsService
  @observable getPostListAPIStatus!: APIStatus
  @observable getPostListAPIError!: Error | null
  @observable posts!: Array<PostModel>

  constructor(postsService: PostsService) {
    this.postsService = postsService
    this.init()
  }

  @action.bound
  init() {
    this.getPostListAPIStatus = API_INITIAL
    this.getPostListAPIError = null
    this.posts = []
  }

  @action.bound
  setGetPostListAPIStatus(status) {
    this.getPostListAPIStatus = status
  }

  @action.bound
  setGetPostListAPIError(error) {
    this.getPostListAPIError = error
  }

  @action.bound
  setPostListResponse(response: Array<PostOject> | null) {
    if (response) {
      this.posts = response.map(post => {
        return new PostModel(post)
      })
    }
  }

  @action.bound
  getPosts() {
    const getPostssPromise = this.postsService.getPostsAPI()
    return bindPromiseWithOnSuccess(getPostssPromise)
      .to(this.setGetPostListAPIStatus, this.setPostListResponse)
      .catch(this.setGetPostListAPIError)
  }
}
export default PostStore
