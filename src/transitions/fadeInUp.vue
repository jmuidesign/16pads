<template>
  <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
    <slot></slot>
  </transition>
</template>

<script>
import gsap from "gsap";

export default {
  name: "EntryTransition",
  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        opacity: 0,
        y: "6rem",
      });
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        y: 0,
        onComplete: done,
      });
    },
  },
};
</script>
