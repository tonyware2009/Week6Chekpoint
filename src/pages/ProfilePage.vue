<template>
  <div class="row">
    <div v-if="profile.id == account.id">TODO create post</div>
  </div>
  <div class="row">
    <Post v-for="p in posts" :key="p.id" :post="p" />
  </div>
  <div>profile page</div>
</template>


<script>
import { profilesService } from "../services/ProfilesService";
import { computed, watchEffect } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { postsService } from "../services/PostsService";
import { AppState } from "../AppState";

export default {
  setup() {
    const route = useRoute();
    watchEffect(async () => {
      if (route.name == "Profile") {
        await profilesService.getProfile(route.params.id);
        await postsService.getAllPosts("?creatorId" + route.params.id);
      }
    });
    return {
      account: computed(() => AppState.account),
      posts: computed(() => AppState.posts),
      profile: computed(() => AppState.profile),
      coverImg: computed(() => `url(${AppState.profile.coverImg})`),
    };
  },
};
</script>


<style lang="scss" scoped>
.cover.image {
  background-image: v-bind(coverImg);
  background-size: cover;
  background-position: center;
  height: 40vh;
}

.creator-image {
  height: 10rem;
  width: 10rem;
}
</style>