//所有用户相关接口函数
import request from "@/utils/http";

//获取用户数据
export const loginAPI = ({ account, password }) => {
  return request({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
};
//获取猜你喜欢
export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url: "/goods/relevant",
    params: {
      limit,
    },
  });
};
