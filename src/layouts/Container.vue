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
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
