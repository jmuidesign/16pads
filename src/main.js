import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPrismic } from "@prismicio/vue";

const accessToken =
  "MC5ZT3dxbkJBQUFDTUFvcnlP.Zu-_ve-_vWoJKe-_vSfvv73vv73vv73vv71t77-9du-_ve-_ve-_ve-_vRfvv73vv70t77-977-9d--_ve-_vVTvv73vv70R";
const endpoint = "https://16pads.cdn.prismic.io/api/v2";

const prismic = createPrismic({
  endpoint,
  apiOptions: { accessToken },
});

createApp(App)
  .use(router)
  .use(prismic)
  .mount("#app");
