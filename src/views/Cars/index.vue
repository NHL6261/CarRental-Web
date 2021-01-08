<template>
  <div id="cars-wrap">
    <div class="cars-swiper-wrap">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <CarsItem></CarsItem>
        </swiper-slide>
        <swiper-slide>
          <CarsItem></CarsItem>
        </swiper-slide>
        <swiper-slide>
          <CarsItem></CarsItem>
        </swiper-slide>
        <swiper-slide>
          <CarsItem></CarsItem>
        </swiper-slide>
        <swiper-slide>
          <CarsItem></CarsItem>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
    <p @click="testHandle('/members')">车辆渲染</p>
  </div>
</template>

<script>
import CarsItem from "@c/carList/index.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "Cars-Index",
  components: { Swiper, SwiperSlide, CarsItem },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 100,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    testHandle(path) {
      path !== this.$route.path && this.$router.push(path);
    },
  },
};
</script>

<style lang="scss" scoped>
// @import './flex.scss'
@import "./float.scss";
</style>
