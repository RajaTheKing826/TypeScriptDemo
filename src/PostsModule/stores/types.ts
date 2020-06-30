export interface PostOject {
  id: number
  userId: number
  title: string
  body: string
}

export interface UpdatePostRequestObject {
  id: number
  title: string
}

export interface GetPostsResponse {
  posts: Array<PostOject>
}
