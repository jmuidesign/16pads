<template>
  <Navbar />
  <main class="content collection-content">
    <div class="pads">
      <Pad row="a" />
      <Pad row="a" />
      <Pad row="a" />
      <Pad row="a" />
      <Pad row="a" />
      <Pad row="a" />
      <Pad row="a" />
      <Pad row="a" />
      <Pad row="b" />
      <Pad row="b" />
      <Pad row="b" />
      <Pad row="b" />
      <Pad row="b" />
      <Pad row="b" />
      <Pad row="b" />
      <Pad row="b" />
    </div>
    <div class="pack-infos">
      <h1>Pack Name</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
      </p>
      <Button class="pack-download" text="Download" />
      <div class="collection-navigation">
        <button class="navigation-prev">
          <svg
            width="101"
            height="16"
            viewBox="0 0 101 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9H100V7H0V9Z"
            />
          </svg>
          Prev
        </button>
        <div class="collection-pagination">
          2 / 16
        </div>
        <button class="navigation-next">
          Next
          <svg
            width="101"
            height="16"
            viewBox="0 0 101 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9H100V7H0V9Z"
            />
          </svg>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Button from "../components/Button.vue";
import Pad from "../components/Pad.vue";

export default {
  name: "Collection",
  components: {
    Navbar,
    Button,
    Pad,
  },
};
</script>

<style>
.collection-content {
  display: flex;
  justify-content: space-between;
}

.pads {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  width: 100%;
}

.pack-infos {
  padding-left: 14rem;
}

.pack-download {
  margin-bottom: 12rem;
}

.collection-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navigation-prev,
.navigation-next {
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding: 1rem 0;
  font-weight: 500;
  cursor: pointer;
}

.navigation-prev svg,
.navigation-next svg {
  width: 10rem;
  fill: #fff;
  transition: 0.3s;
}

.navigation-prev:hover svg,
.navigation-next:hover svg,
.navigation-prev:focus svg,
.navigation-next:focus svg {
  fill: #38f9d7;
}

.navigation-prev svg {
  transform: rotate(180deg);
  margin-right: 2rem;
}

.navigation-next svg {
  margin-left: 2rem;
}

.collection-pagination {
  font-family: "Poppins", sans-serif;
  font-size: 2.4rem;
  color: #fff;
}

@media (max-width: 1280px) {
  .pack-infos {
    padding-left: 7rem;
  }
}

@media (max-width: 1080px) {
  .collection-content {
    flex-direction: column;
  }

  .pads {
    margin-bottom: 4rem;
  }

  .pack-infos {
    padding-left: 0;
  }

  .pack-download {
    margin-bottom: 8rem;
  }

  .collection-navigation {
    margin-bottom: 10vh;
  }
}
</style>