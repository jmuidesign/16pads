<template>
  <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
    <img class="home-background" src="../assets/16pads-background.svg" />
  </transition>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Background",
  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        opacity: 0,
        x: "12rem",
        y: "12rem",
      });
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        x: 0,
        y: 0,
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>
img {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 55rem;
  max-width: 80%;
}
</style>
