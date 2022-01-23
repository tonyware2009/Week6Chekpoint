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

  async removePost(id) {
    const res = await api.delete('api/posts/' + id)

    AppState.posts = AppState.posts.filter(p => p.id != post.id)
  }

  async editPost(id) {
    const res = await api.put('api/posts/' + id)

    AppState.posts = AppState.posts.splice(AppState.posts.findIndex(p => p.id == post.id))
  }
}
export const postsService = new PostsService()