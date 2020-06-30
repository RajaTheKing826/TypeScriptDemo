import GetPostsResponse from '../../fixtures/PostsFixture/PostsFixure.json'

import { resolveWithTimeout } from '../../../utils/TestUtils'

import PostsService from './index'

class PostFixtureService implements PostsService {
  getPostsAPI() {
    return resolveWithTimeout(GetPostsResponse)
  }

  updatePostAPI() {
    return resolveWithTimeout({})
  }
}

export default PostFixtureService
