import { AppState } from "../AppState"
import { api } from "../services/AxiosService"
import { logger } from "../utils/Logger"
class ProfilesService {
  async getProfile(id) {

    const res = await api.get(`api/profiles/${id}`)
    logger.log('profile information res', res.data)
    AppState.profile = res.data
  }

}


export const profilesService = new ProfilesService()