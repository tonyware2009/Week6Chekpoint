<template>
  <div class="col-4 mt-5 d-flex justify-content-center">
    <div class="card" style="width: 30rem">
      <img
        @click="goToProfile"
        :src="post.imgUrl"
        class="rounded selectable card-img-top img-fluid"
      />
      <div class="card-body mt-2">
        <img :src="post.creator.picture" alt="" class="creator" />
        <h5>{{ post.creator.name }}</h5>
        <p class="p-3">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { useRouter } from "vue-router";

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
      async goToProfile() {
        router.push({
          name: "Profile",
          params: { id: props.post.creator.id },
        });
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>