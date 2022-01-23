<template>
  <div>
    <img :src="pics.square" alt="" />
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