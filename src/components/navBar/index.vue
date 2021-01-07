<template>
  <div class="bottom-bar">
    <ul class="list-setting">
      <li>
        <i class="icon icon-help"></i>
      </li>
      <li>
        <i class="icon icon-search"></i>
      </li>
      <li>
        <a href="javascript: void(0)" class="select-car-btn">选择车辆</a>
      </li>
      <li>
        <i class="icon icon-location"></i>
      </li>
      <li>
        <i class="icon icon-user"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 86px;
  text-align: center;
  z-index: 10;
  li {
    // 同时拥有块级元素和内敛元素
    display: inline-block;
  }
  .icon{
    vertical-align: middle;
    margin: 0 17px;
    cursor: pointer;
  }
  .select-car-btn {
    width: 240px;
    height: 84px;
    line-height: 84px;
    text-align: center;
    display: block;
    margin: 0 17px;
    border-radius: 44px;
    background: $color-main;
    color: #fff;
    font-size: 26px;
    font-weight: 300;
  }
}
</style>
