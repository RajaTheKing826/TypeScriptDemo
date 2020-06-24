// All the stores will be initialised here
import TodoService from '../services/TodoService/index.api'
import PostsService from '../PostsModule/services/PostsService/PostsService.api'
import PostStore from '../PostsModule/stores/PostStore'
import TodoStore from './TodoStore'
const postsStore = new PostStore(new PostsService())
const todoStore = new TodoStore(new TodoService())

const stores = {
  todoStore,
  postsStore
}

export default stores
