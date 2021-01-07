<template>
  <div id="cars-wrap">
    <section class="car-item">
      <header>
        <h4 class="cars-logo">
          <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款">
          <span class="name">Mustang 2019款</span>
        </h4>
        <p class="attr ">新能源汽车 5座</p>
      </header>
      <div></div>
      <footer></footer>
    </section>
    <p @click="testHandle('/members')">车辆渲染</p>
  </div>
</template>

<script>
export default {
  name: "Cars-Index",
  data() {
    return {};
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
@import './float.scss'

</style>
