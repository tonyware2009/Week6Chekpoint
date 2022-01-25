<template>
  <div class="col-4 mt-5 d-flex justify-content-center">
    <div class="card" style="width: 30rem">
      <img
        @click="goToProfile()"
        :src="post.imgUrl"
        class="rounded selectable card-img-top img-fluid"
      />
      <div class="card-body mt-2">
        <img :src="post.creator.picture" alt="" class="creator" />
        <h5>{{ post.creator.name }}</h5>
        <p class="p-3">{{ post.body }}</p>
      </div>
      <div>
        <div v-if="account.id == post.creator.id">
          <span
            >{{ post.likes.length
            }}<i class="mdi mdi-thumb-up d-flex justify-content-end"></i
          ></span>

          <span
            ><i @click="removePost()" class="mdi mdi-trash-can selectable"></i
          ></span>
        </div>
        <div class="d-flex justify-content-around"></div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { AppState } from "../AppState";
import { postsService } from "../services/PostsService";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    return {
      router,
      account: computed(() => AppState.account),
      async goToProfile() {
        router.push({
          name: "Profile",
          params: { id: props.post.creator.id },
        });
      },
      async removePost() {
        try {
          await postsService.removePost(props.post.id);
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.log(error.message);
        }
      },
      async editPost() {
        try {
          await postsService.editPost(props.post.id);
        } catch (error) {
          Pop.toast(error.message, "error");
          logger.log(error.message);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>