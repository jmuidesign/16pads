<template>
  <header class="navbar">
    <img class="navbar-logo" src="../assets/16pads-logo.svg" alt="16pads" />
    <nav>
      <ul class="navbar-menu">
        <li>
          <a href="#">Collection</a>
        </li>
        <li>
          <a href="#">About</a>
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

.navbar-menu a {
  text-decoration: none;
  color: #fff;
  font-size: 1.8rem;
  margin-left: 3rem;
}
</style>
