import { AppState } from "../AppState"
import { api } from "../services/AxiosService"
import { logger } from "../utils/Logger"

class BannerService {
  async getBanner() {
    const res = await api.get("api/ads")
    logger.log("banner information", res.data)
    AppState.pics = res.data
  }
}

export const bannerService = new BannerService()