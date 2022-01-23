<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
    <div>
      <Banner v-for="p in pics" :key="p.title" :pics="p" />
    </div>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">Made by Tony Ware</div>
  </footer>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
