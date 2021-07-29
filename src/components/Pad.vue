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
export default {
  name: "Pad",
  data() {
    return {
      isActive: false,
      soundPlayed: null,
    };
  },
  methods: {
    playSound(event) {
      if (this.soundPlayed) {
        this.soundPlayed.pause();
      }
      if (!event.repeat) {
        this.soundPlayed = new Audio(this.sound);
        this.soundPlayed.play();
      }
    },
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
  props: ["row", "sound"],
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
