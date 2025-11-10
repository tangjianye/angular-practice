export default {
  pages: [
    "pages/dynamic/index",
    "pages/friends/index",
    "pages/message/index",
    "pages/profile/index",
    "pages/counter/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "小程序",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#999999",
    selectedColor: "#1AAD19",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/dynamic/index",
        text: "动态",
        iconPath: "assets/images/tabbar/dynamic_tab_normal.png",
        selectedIconPath: "assets/images/tabbar/dynamic_tab_selected.png",
      },
      {
        pagePath: "pages/friends/index",
        text: "好友",
        iconPath: "assets/images/tabbar/friends_tab_normal.png",
        selectedIconPath: "assets/images/tabbar/friends_tab_selected.png",
      },
      {
        pagePath: "pages/message/index",
        text: "消息",
        iconPath: "assets/images/tabbar/message_tab_normal.png",
        selectedIconPath: "assets/images/tabbar/message_tab_selected.png",
      },
      {
        pagePath: "pages/profile/index",
        text: "我的",
        iconPath: "assets/images/tabbar/profile_tab_normal.png",
        selectedIconPath: "assets/images/tabbar/profile_tab_selected.png",
      },
    ],
  },
};
