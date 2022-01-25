<template>
  <div>
    <img :src="pics.tall" alt="" />
  </div>
</template>


<script>
export default {
  props: {
    pics: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>