import { AppState } from "../AppState"
import { api } from "./AxiosService"
import { logger } from "../utils/Logger"
class PostsService {

  async getAllPosts(query = '') {

    const res = await api.get('api/posts' + query)
    logger.log('get posts res', res.data)
    AppState.posts = res.data.posts
  }

}
export const postsService = new PostsService()