import { observable } from 'mobx'

import { PostOject } from '../../types'

class PostModel {
  id: number
  @observable title: string
  @observable userId: number
  @observable body: string
  constructor(todo: PostOject) {
    this.id = todo.id
    this.title = todo.title
    this.userId = todo.userId
    this.body = todo.body
  }
}

export default PostModel
