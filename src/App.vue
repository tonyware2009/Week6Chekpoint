<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
    <div class="row container-fluid">
      <div class="col-md-3">
        <Banner v-for="p in pics" :key="p.title" :pics="p" />
      </div>
    </div>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">Made by Tony Ware</div>
  </footer>
</template>

<script>
import { computed, onMounted } from "vue";
import { AppState } from "./AppState";
import { bannerService } from "./services/BannersService";
export default {
  name: "App",
  setup() {
    onMounted(() => {
      bannerService.getBanner();
    });
    return {
      appState: computed(() => AppState),
      pics: computed(() => AppState.pics),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
