<template>
  <Navbar />
  <Content class="spinner-content" v-if="isLoading">
    <Spinner />
  </Content>
  <Content v-else-if="pack">
    <div class="collection-content">
      <div class="pads">
        <Pad row="a" :soundURL="pack.data.pads[0].pad.url" />
        <Pad row="a" :soundURL="pack.data.pads[1].pad.url" />
        <Pad row="a" :soundURL="pack.data.pads[2].pad.url" />
        <Pad row="a" :soundURL="pack.data.pads[3].pad.url" />
        <Pad row="a" :soundURL="pack.data.pads[4].pad.url" />
        <Pad row="a" :soundURL="pack.data.pads[5].pad.url" />
        <Pad row="a" :soundURL="pack.data.pads[6].pad.url" />
        <Pad row="a" :soundURL="pack.data.pads[7].pad.url" />
        <Pad row="b" :soundURL="pack.data.pads[8].pad.url" />
        <Pad row="b" :soundURL="pack.data.pads[9].pad.url" />
        <Pad row="b" :soundURL="pack.data.pads[10].pad.url" />
        <Pad row="b" :soundURL="pack.data.pads[11].pad.url" />
        <Pad row="b" :soundURL="pack.data.pads[12].pad.url" />
        <Pad row="b" :soundURL="pack.data.pads[13].pad.url" />
        <Pad row="b" :soundURL="pack.data.pads[14].pad.url" />
        <Pad row="b" :soundURL="pack.data.pads[15].pad.url" />
      </div>
      <div class="pack-infos">
        <fadeInUp>
          <h1>{{ pack.data.name[0].text }}</h1>
        </fadeInUp>
        <fadeIn>
          <p>
            {{ pack.data.description[0].text }}
          </p>
        </fadeIn>
        <fadeIn>
          <Button
            class="pack-download"
            text="Download"
            :download="pack.data.download.url"
          />
        </fadeIn>

        <div class="collection-navigation">
          <button
            class="navigation-prev"
            :class="{ 'navigation-hidden': page === 1 }"
            @click="prevPage"
          >
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
          <div class="collection-pagination">{{ page }} / {{ totalPages }}</div>
          <button
            class="navigation-next"
            :class="{ 'navigation-hidden': page === totalPages }"
            @click="nextPage"
          >
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
    </div>
  </Content>
  <Content v-else-if="isNotFound">
    <h1>Not Found</h1>
    <p>
      Sorry this content doesn't exist or has been removed
    </p>
  </Content>
</template>

<script>
// Components
import Navbar from "../components/Navbar.vue";
import Button from "../components/Button.vue";
import Pad from "../components/Pad.vue";
import Spinner from "../components/Spinner.vue";

// Layouts
import Content from "../layouts/Content.vue";

// Transitions
import fadeIn from "../transitions/fadeIn.vue";
import fadeInUp from "../transitions/fadeInUp.vue";

export default {
  name: "Collection",
  components: {
    Navbar,
    Button,
    Pad,
    Spinner,
    Content,
    fadeIn,
    fadeInUp,
  },
  data() {
    return {
      pack: null,
      page: null,
      totalPages: null,
      isLoading: true,
      isNotFound: null,
    };
  },
  methods: {
    async getContent() {
      const id = this.$route.params.id;

      const pack = await this.$prismic.client.query(
        this.$prismic.Predicates?.at("document.type", "pack"),
        {
          page: id,
          pageSize: 1,
          orderings: "[document.first_publication_date]",
        }
      );

      if (id >= 1 && id <= pack.total_pages) {
        this.pack = pack.results[0];
        this.page = pack.page;
        this.totalPages = pack.total_pages;

        setTimeout(() => (this.isLoading = false), 1000);
      } else {
        this.isNotFound = true;
        this.isLoading = false;
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
  align-items: center;
}

.spinner-content {
  justify-content: center;
  align-items: center;
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

.navigation-hidden {
  opacity: 0;
}

.collection-pagination {
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
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
    align-items: stretch;
  }

  .pads,
  .pack-infos {
    flex: 0;
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
}
</style>
