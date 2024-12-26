import Vue from "vue";
import Main from "./Main.vue";
import router from "./router";
import "./main.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import {
  faPen,
  faCode,
  faUser,
  faHouse,
  faEnvelope,
  faArrowLeft,
  faArrowCircleDown,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faTwitter,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(
  faPen,
  faCode,
  faUser,
  faHouse,
  faGithub,
  faTwitter,
  faEnvelope,
  faArrowLeft,
  faArrowCircleDown,
  faArrowUpRightFromSquare,
  faStackOverflow
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: (h) => h(Main),
});
