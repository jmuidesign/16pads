<template>
  <Navbar />
  <main class="content">
    <fadeInUp>
      <h1 class="home-title">
        Browse a collection of free mpc sound packs for production and live
      </h1>
    </fadeInUp>
    <fadeIn>
      <Button text="Let's go" to="/collection/pack-1" />
    </fadeIn>
  </main>
  <Background />
</template>

<script>
// Components
import Navbar from "../components/Navbar.vue";
import Button from "../components/Button.vue";
import Background from "../components/Background.vue";

// Transitions
import fadeIn from "../transitions/fadeIn.vue";
import fadeInUp from "../transitions/fadeInUp.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Button,
    Background,
    fadeIn,
    fadeInUp,
  },
  mounted() {
    document.body.classList.add("home");
  },
  unmounted() {
    document.body.classList.remove("home");
  },
};
</script>

<style>
.home-title {
  margin-bottom: 6rem;
  max-width: 70%;
}

@media (max-width: 1280px) {
  .home-title {
    max-width: 100%;
  }
}
</style>
