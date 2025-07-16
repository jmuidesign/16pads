<template>
  <div class="home-content">
    <Navbar />
    <Content :offcentered="true">
      <fadeInUp>
        <h1 class="home-title">
          Browse a collection of free mpc sound packs for production and live
        </h1>
      </fadeInUp>
      <fadeIn>
        <Button text="Let's go" to="/collection/pack-1" />
      </fadeIn>
    </Content>
  </div>
  <animateBackground>
    <div class="home-background"></div>
  </animateBackground>
</template>

<script>
// Components
import Navbar from "../components/Navbar.vue";
import Button from "../components/Button.vue";

// Layouts
import Content from "../layouts/Content.vue";

// Transitions
import fadeIn from "../transitions/fadeIn.vue";
import fadeInUp from "../transitions/fadeInUp.vue";
import animateBackground from "../transitions/animateBackground.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Button,
    Content,
    fadeIn,
    fadeInUp,
    animateBackground,
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
body.home {
  position: relative;
  overflow: hidden;
}

.home-content {
  z-index: 1;
}

.home-background {
  height: 100%;
  width: 100vw;
  position: absolute;
  background: url("../assets/16pads-background.svg");
  background-repeat: no-repeat;
  background-size: 56rem auto;
  background-position: bottom right;
}

@media (max-height: 900px) {
  .home-background {
    background-size: 40rem auto;
  }
}

.home-title {
  margin-bottom: 6rem;
  max-width: 70%;
}

@media (max-width: 1280px) {
  .home-title {
    max-width: 100%;
  }
}

@media (max-width: 425px) {
  .home-background {
    background-size: 80% auto;
  }
}
</style>
