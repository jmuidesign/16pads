<template>
  <Navbar />
  <main class="content">
    <fadeInUp>
      <h1>About</h1>
    </fadeInUp>
    <fadeIn>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor purus non enim praesent elementum facilisis leo, vel
        fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis
        enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
        orci sagittis eu volutpat odio facilisis mauris sit amet massa
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
      <p>
        You can reach me by
        <a href="mailto:julienmerlin.dev@gmail.com">sending me an email</a>
      </p>
    </fadeIn>
  </main>
</template>

<script>
// Components
import Navbar from "../components/Navbar.vue";

// Transitions
import fadeIn from "../transitions/fadeIn.vue";
import fadeInUp from "../transitions/fadeInUp.vue";

export default {
  name: "About",
  components: {
    Navbar,
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
</style>
