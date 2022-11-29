<template>
  <Container>
    <router-view :key="$route.path"></router-view>
  </Container>
</template>

<script>
import Container from "./layouts/Container.vue";

export default {
  name: "App",
  components: {
    Container,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Poppins:wght@400;500;700&display=swap");

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::selection {
  background: #38f9d7;
}

html,
body {
  background: #203140;
  font-size: 62.5%;
}

p,
a,
button {
  font-family: "Poppins", sans-serif;
  color: #fff;
}

p {
  font-size: 1.6rem;
  line-height: 170%;
  margin-bottom: 4rem;
}

a,
button {
  transition: 0.3s;
}

button::selection,
a::selection {
  color: #fff;
}

button {
  font-size: 2rem;
  cursor: pointer;
}

button:hover,
button:focus {
  color: #38f9d7;
}

a:hover,
a:focus {
  color: #38f9d7;
}

h1 {
  font-family: "DM Serif Display", sans-serif;
  font-size: 5.6rem;
  font-weight: 400;
  color: #fff;
  line-height: 130%;
  margin-bottom: 4rem;
}

h2 {
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
  line-height: 170%;
  margin-bottom: 1rem;
}

@media (max-width: 1444px) {
  .container {
    max-width: 90vw;
  }
}

@media(max-width: 768px) {
  html,
  body {
    font-size: 55%;
  }
}

@media(max-width: 580px) {
  html,
  body {
    font-size: 50%;
  }
}
</style>
