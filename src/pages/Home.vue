<template>
  <Navbar />
  <main class="content">
    <h1 class="home-title">
      Browse a collection of free mpc sound packs for production and live
    </h1>
    <Button text="Let's go" />
  </main>
  <img class="home-background" src="../assets/16pads-background.svg" />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Button from "../components/Button.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Button,
  },
};
</script>

<style>
.home-title {
  margin-bottom: 6rem;
  max-width: 70%;
}

.home-background {
  position: absolute;
  bottom: 0;
  right: calc((100vw - 1300px) / -2);
  width: 55rem;
  max-width: 80%;
}

@media (max-width: 1444px) {
  .home-background {
    right: -5vw;
  }
}

@media (max-width: 1280px) {
  .home-title {
    max-width: 100%;
  }
}
</style>
