<template>
  <header class="navbar">
    <router-link to="/">
      <img class="navbar-logo" src="../assets/16pads-logo.svg" alt="16pads" />
    </router-link>
    <nav>
      <ul class="navbar-menu">
        <li>
          <router-link class="navbar-link" to="/collection/pack-1"
            >Collection</router-link
          >
        </li>
        <li>
          <router-link class="navbar-link" to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 3rem;
}

.navbar-logo {
  max-width: 21rem;
}

.navbar-menu {
  display: flex;
  list-style: none;
}

.navbar-link {
  text-decoration: none;
  color: #fff;
  font-size: 1.8rem;
  margin-left: 3rem;
}
</style>
