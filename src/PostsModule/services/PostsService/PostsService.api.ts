import { create } from 'apisauce'

import { networkCallWithApisauce } from '../../../utils/APIUtils'

import { apiMethods } from '../../../constants/APIConstants'

import { POST_BASE_URL } from '../../../constants/EnvironmentConstants'

import endpoints from '../endpoints'

import PostsService from './index'

class PostsApiService implements PostsService {
    api: Record<string, any>

    constructor() {
        this.api = create({
            baseURL: POST_BASE_URL
        })
    }

    async getPostsAPI() {
        return networkCallWithApisauce(
            this.api,
            endpoints.todos.todoList,
            {},
            apiMethods.get
        )
    }

    async updatePostAPI(requestObject) {
        return networkCallWithApisauce(
            this.api,
            endpoints.todos.updateCompletion,
            requestObject,
            apiMethods.post
        )
    }
}

export default PostsApiService