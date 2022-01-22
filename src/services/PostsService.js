import { AppState } from "../AppState"
import { api } from "./AxiosService"
import { logger } from "../utils/Logger"
class PostsService {

  async getAllPosts(query = '') {

    const res = await api.get('api/posts' + query)
    logger.log('get posts res', res.data)
    AppState.posts = res.data.posts
  }

  async createPost(newPost) {

    const res = await api.post('api/posts', newPost)
    logger.log('create post res', res.data)
    AppState.posts(res.data)
  }
}
export const postsService = new PostsService()