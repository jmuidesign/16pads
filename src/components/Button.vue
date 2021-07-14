<template>
  <router-link class="button" :to="to" v-if="to">{{ text }}</router-link>
  <a class="button" :href="download" v-else-if="download">{{ text }}</a>
</template>

<script>
export default {
  name: "Button",
  props: ["text", "to", "download"],
};
</script>

<style scoped>
.button {
  display: inline-block;
  font-size: 2.4rem;
  font-weight: 900;
  text-decoration: none;
  padding: 1rem 3rem;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 3rem;
  cursor: pointer;
  align-self: flex-start;
}

.button:hover,
.button:focus {
  border-color: #38f9d7;
}
</style>
