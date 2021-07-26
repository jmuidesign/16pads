<template>
  <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
    <slot></slot>
  </transition>
</template>

<script>
import gsap from "gsap";

export default {
  name: "fadeIn",
  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        opacity: 0,
        backgroundPositionX: "110%",
        backgroundPositionY: "110%",
      });
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        backgroundPositionX: "100%",
        backgroundPositionY: "100%",
        onComplete: done,
      });
    },
  },
};
</script>
