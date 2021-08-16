<template>
  <button
    class="pad"
    :class="{ [`pad-${row}`]: row, active: isActive }"
    @mousedown="
      playSound($event);
      toggleActive();
    "
    @mouseup="toggleActive()"
    @mouseleave="isActive = false"
    @touchstart.prevent="
      playSound($event);
      toggleActive();
    "
    @touchend="toggleActive()"
    @keydown.enter="
      playSound($event);
      toggleActive();
    "
    @keyup.enter="toggleActive()"
  ></button>
</template>

<script>
import { useSound } from "@vueuse/sound";

export default {
  name: "Pad",
  setup(props) {
    const { play, stop } = useSound(props.soundURL, { interrupt: true });

    return {
      play,
      stop,
    };
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    playSound(event) {
      if (!event.repeat) {
        this.play();
      }
    },
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
  props: ["ref", "row", "soundURL"],
  beforeUnmount() {
    this.stop();
  },
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

.pad-a.active {
  border-color: #43e97b;
}

.pad-b.active {
  border-color: #38f9d7;
}
</style>
