
<template>
  <div class="row">
    <CreatePost />
    <Post v-for="p in posts" :key="p.id" :post="p" />
  </div>
</template>


<script>
import { logger } from "../utils/Logger";
import { computed, onMounted } from "@vue/runtime-core";
import { postsService } from "../services/PostsService";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
export default {
  name: "Home",
  setup() {
    onMounted(async () => {
      try {
        await postsService.getAllPosts();
      } catch (error) {
        Pop.toast(Error.message, "error");
        logger.log(error);
      }
    });
    return {
      posts: computed(() => AppState.posts),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
