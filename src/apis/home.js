import httpInstance from "@/utils/http";

//获取banner

export function getBannerAPI(params = {}) {
  //默认为1 商品为2
  const { distributionSite = "1" } = params;
  return httpInstance({
    url: "/home/banner",
    params: {
      distributionSite,
    },
  });
}
/**
 * @description:获取新鲜好物
 * @param{*}
 * @param{*}
 * @return{*}
 */
export function findNewAPI() {
  return httpInstance({
    url: "/home/new",
  });
}
/**
 * @description:获取人气推荐
 * @param{*}
 * @param{*}
 * @return{*}
 */
export function findHotAPI() {
  return httpInstance({
    url: "/home/hot",
  });
}
/**
 * @description:获取所有商品模块
 * @param{*}
 * @param{*}
 * @return{*}
 */
export function getGoodsAPI() {
  return httpInstance({
    url: "/home/goods",
  });
}
