<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style>
.container {
  max-width: 1240px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
