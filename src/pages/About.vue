<template>
  <Navbar />
  <Content :offcentered="true">
    <fadeInUp>
      <h1>About</h1>
    </fadeInUp>
    <fadeIn>
      <p>
        16pads is a collection of free MPC sound packs for music production and
        live. All the packs are free and can be used in personal or commercial
        projects. These packs have been created with existing royalty free
        sounds find on the web. The original idea was to create an interactive
        way of sharing sounds packs for music production. You can browse
        different packs in collection section and listen sounds by clicking on
        pads. This project is mainly a concept for my portfolio but feel free to
        contact me if you would love to see new packs published, give me
        suggestions to improve theme, report a bug or give me any advice you
        think is useful.
      </p>
    </fadeIn>
    <fadeIn>
      <div class="author-bubble">
        <img src="../assets/pic.png" alt="me" />
        <div>
          <h2>Julien Merlin</h2>
          <p>Designer & Developer</p>
        </div>
      </div>
    </fadeIn>
    <fadeIn>
      <p class="contact-me">
        You can reach me by
        <a href="mailto:julienmerlin.dev@gmail.com">sending me an email</a>
      </p>
    </fadeIn>
  </Content>
</template>

<script>
// Components
import Navbar from "../components/Navbar.vue";

// Layouts
import Content from "../layouts/Content.vue";

// Transitions
import fadeIn from "../transitions/fadeIn.vue";
import fadeInUp from "../transitions/fadeInUp.vue";

export default {
  name: "About",
  components: {
    Navbar,
    Content,
    fadeIn,
    fadeInUp,
  },
};
</script>

<style>
.author-bubble {
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
}

.author-bubble img {
  width: 15rem;
  margin-right: 2rem;
  border-radius: 50%;
}

.contact-me {
  margin-bottom: 0;
}
</style>
