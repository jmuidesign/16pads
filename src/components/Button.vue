<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  props: ["text"],
};
</script>

<style scoped>
button {
  font-weight: 900;
  padding: 1rem 3rem;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 3rem;
}

button:hover,
button:focus {
  border-color: #38f9d7;
}
</style>
