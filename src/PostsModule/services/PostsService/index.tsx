import { PostOject, UpdatePostRequestObject } from '../../stores/types'

interface PostsService {
    getPostsAPI: () => Promise<Array<PostOject>>

    updatePostAPI: (requestObject: UpdatePostRequestObject) => Promise<{}>
}

export default PostsService
