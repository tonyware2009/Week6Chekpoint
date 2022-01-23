<template>
  <form @submit.prevent="createPost">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <input
          type="text"
          class="form-control"
          placeholder="Cover Image..."
          v-model="editable.imgUrl"
          required
        />
      </div>
      <div class="col-12">
        <textarea
          type="text"
          class="form-control"
          placeholder="body Decription..."
          v-model="editable.body"
          aria-describedby="myPostId"
          required
        />
      </div>
      <div class="col-12 d-flex justify-content-end">
        <button class="btn btn-success">Create</button>
      </div>
    </div>
  </form>
</template>


<script>
import { logger } from "../utils/Logger";
import { ref } from "@vue/reactivity";
import { postsService } from "../services/PostsService";
import Pop from "../utils/Pop";
export default {
  setup() {
    const editable = ref({});
    return {
      editable,
      async createPost() {
        try {
          const myposts = editable.value.posts;
          editable.value.posts = myposts;
          await postsService.createPost(editable.value);
          editable.value = {};
          Pop.toast("created post");
        } catch (error) {
          Pop.toast("error.message", "error");
          logger.error(error);
        }
      },
      async removePost() {
        try {
          const myposts = editable.value.posts;
          editable.value.posts = myposts;
          await postsService.removePost(props.post);
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