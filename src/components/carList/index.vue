<template>
  <section class="car-item">
    <header>
      <h4 class="cars-logo">
        <img src="../../assets/images/cars-logo.png" alt="Mustang 2019款" />
        <span class="name">Mustang 2019款</span>
      </h4>
      <p class="attr">新能源汽车 5座</p>
    </header>
    <div class="cars-content">
      <div class="info">
        <div>
          <h4 class="cars-number">苏 E2FG67</h4>
          <div>
            <ul class="cars-electricity active-li-9">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <p class="distance">
              <sub>约</sub>
              <strong>600</strong>
              <sub>KM</sub>
            </p>
          </div>
        </div>
      </div>
      <img src="../../assets/images/pic001.jpg" alt="" />
    </div>
    <footer>
      <!-- <span class="name">某某停车场</span> -->
      <a href="javascript: void(0);" class="parking-link">某某停车场</a>
    </footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
        
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
