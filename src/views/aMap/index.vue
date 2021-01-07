<template>
  <div class="amap-wrap">
      <!-- center:设置坐标位置 events:定位标记的位置 zoom:当前地图的比例3-18 -->
    <el-amap vid="amapContainer" :zoom="zoom" :events="events"  >
    </el-amap>
  </div>
</template>

<script>
// 引入高德SDK
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";

export default {
  data: function () {
    return {
      zoom: 12,
      map: null,
      events:{}
    };
  },

  methods: {},
  mounted() {
    //   加载坐标位置
    lazyAMapApiLoaderInstance.load().then(() => {
      this.map = new AMap.Map("amapContainer", {
        center: new AMap.LngLat(116.309133, 40.099699),
        zoom: this.zoom
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.amap-wrap {
  height: 100vh;
}
</style>
