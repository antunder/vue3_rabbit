//把components中的所有组件进行注册
//通过插件的方式
import ImageView from "./imageView/index.vue";
import XtxSku from "./XtxSku/index.vue";

export const componentPlugin = {
  install(app) {
    //app.component(‘组件名字’，组件配置对象)
    app.component("XtxImageView", ImageView);
    app.component("XtxSku", XtxSku);
  },
};
