<template>
  <div>
    <!-- 地图组件 -->
    <Map />
    <!-- dom渲染组件=> 车辆信息组件 -->
    <Cars />
    <!-- 底部导航区域 -->
    <BottomBar />
    <!-- 登录会员页面 -->
    <div class="right-members-content" :class="{ open: show }">
      <router-view />
    </div>
  </div>
</template>

<script>
import Map from "../aMap/index";
import Cars from "../Cars/index";
import BottomBar from "@c/navBar/index";
export default {
  name: "index-home",
  data() {
    return {};
  },

  computed: {
    show() {
      const routeName = this.$route;
      return routeName.name === "Index" ? false : true;
    },
  },
  watch: {
    // "$route": {
    //   handler(newRoute) {
    //       const routeNmae = newRoute.name
    //       this.show = routeNmae === 'Index' ? false : true
    //   },
    // },
  },

  components: {
    Map,
    Cars,
    BottomBar
  },
};
</script>

<style lang="scss" scoped>
.right-members-content {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -600px;
  width: 418px;
  background-color: #34393f;
  z-index: 11;
  -webkit-transition: all 0.3s linear 0s;
  -moz-transition: all 0.3s linear 0s;
  -ms-transition: all 0.3s linear 0s;
  -o-transition: all 0.3s linear 0s;
  transition: all 0.3s linear 0s;
  &.open {
    right: 0px;
  }
}
</style>
