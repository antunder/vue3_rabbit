import "@/styles/common.scss";
import { createApp, ref } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
//引入懒加载文件并注册
import { lazyPlugin } from "./directives";
import { componentPlugin } from "./components";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const app = createApp(App);
const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.use(lazyPlugin);
app.use(componentPlugin);

app.mount("#app");
