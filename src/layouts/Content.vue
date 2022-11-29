<template>
  <main class="content" :class="{ offcentered: offcentered }">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "Content",
  props: ["offcentered"],
};
</script>

<style>
.content {
  width: 100%;
  min-height: calc(100vh - 8rem);
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.offcentered:after {
  content: "";
  display: block;
  height: 8rem;
}

@media (min-width: 1080px) and (min-height: 900px) {
  .content {
    max-height: calc(100vh - 8rem);
  }
}
</style>
