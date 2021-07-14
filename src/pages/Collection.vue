<template>
  <Navbar />
  <main class="content collection-content" v-if="pack">
    <div class="pads">
      <Pad row="a" :sound="pack.data.pads[0].pad.url" />
      <Pad row="a" :sound="pack.data.pads[1].pad.url" />
      <Pad row="a" :sound="pack.data.pads[2].pad.url" />
      <Pad row="a" :sound="pack.data.pads[3].pad.url" />
      <Pad row="a" :sound="pack.data.pads[4].pad.url" />
      <Pad row="a" :sound="pack.data.pads[5].pad.url" />
      <Pad row="a" :sound="pack.data.pads[6].pad.url" />
      <Pad row="a" :sound="pack.data.pads[7].pad.url" />
      <Pad row="b" :sound="pack.data.pads[8].pad.url" />
      <Pad row="b" :sound="pack.data.pads[9].pad.url" />
      <Pad row="b" :sound="pack.data.pads[10].pad.url" />
      <Pad row="b" :sound="pack.data.pads[11].pad.url" />
      <Pad row="b" :sound="pack.data.pads[12].pad.url" />
      <Pad row="b" :sound="pack.data.pads[13].pad.url" />
      <Pad row="b" :sound="pack.data.pads[14].pad.url" />
      <Pad row="b" :sound="pack.data.pads[15].pad.url" />
    </div>
    <div class="pack-infos">
      <h1>{{ pack.data.name[0].text }}</h1>
      <p>
        {{ pack.data.description[0].text }}
      </p>
      <Button
        class="pack-download"
        text="Download"
        :download="pack.data.download.url"
      />
      <div class="collection-navigation">
        <button class="navigation-prev" @click="prevPage">
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
        <div class="collection-pagination">{{ this.page }} / 16</div>
        <button class="navigation-next" @click="nextPage">
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
  <main class="content" v-else-if="isNotFound">
    <h1>Not Found</h1>
    <p>
      Sorry this content doesn't exist or has been removed
    </p>
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
  data() {
    return {
      pack: null,
      page: null,
      totalPages: null,
      isNotFound: null,
    };
  },
  methods: {
    async getContent() {
      const id = this.$route.params.id;

      const pack = await this.$prismic.client.query(
        this.$prismic.Predicates.at("document.type", "pack"),
        {
          page: id,
          pageSize: 1,
        }
      );

      if (id >= 1 && id <= pack.total_pages) {
        this.pack = pack.results[0];
        this.page = pack.page;
        this.totalPages = pack.total_pages;
      } else {
        this.isNotFound = true;
      }
    },
    prevPage() {
      if (this.page !== 1) {
        this.page -= 1;
        this.$router.push({
          name: "collection",
          params: { id: this.page },
        });
      }
    },
    nextPage() {
      if (this.page !== this.totalPages) {
        this.page += 1;
        this.$router.push({
          name: "collection",
          params: { id: this.page },
        });
      }
    },
  },
  created() {
    this.getContent();
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
  flex: 1;
}

.pack-infos {
  padding-left: 14rem;
  flex: 1;
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
