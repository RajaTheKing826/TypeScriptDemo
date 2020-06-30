import PostStore from './PostStore'
import PostsService from '../services/PostsService/PostsService.api'
const postService = new PostsService()
const postsStore = new PostStore(postService)
export { postsStore }
