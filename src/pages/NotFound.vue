<template>
  <Navbar />
  <main class="content">
    <h1>Not Found</h1>
    <p>
      Sorry this content doesn't exist or has been removed
    </p>
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "NotFound",
  components: {
    Navbar,
  },
};
</script>

<style></style>
