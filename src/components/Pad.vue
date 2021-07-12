<template>
  <button class="pad" :class="`pad-${row}`" @mousedown="playSound()"></button>
</template>

<script>
export default {
  name: "Pad",
  methods: {
    playSound() {
      const sound = new Audio(require("../assets/kick.wav"));
      sound.play();
    },
  },
  props: ["row"],
};
</script>

<style>
.pad {
  background: #dadada;
  border: 0.8rem #fff solid;
  width: 100%;
  cursor: pointer;
}

.pad:after {
  content: "";
  display: block;
  padding-bottom: 100%;
}

.pad-a:active {
  border-color: #43e97b;
}

.pad-b:active {
  border-color: #38f9d7;
}
</style>
