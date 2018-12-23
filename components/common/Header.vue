<template>
  <div class="header header-fixed">
    <div class="header-start">
      <div class="click-area">
        <i v-if="canBack" class="icon-back" v-on:click="$router.back()"></i>
      </div>
    </div>
    <div class="header-center">
      <div class="page-title">{{ title }}</div>
    </div>
    <div class="header-end">
      <slot name="header-end"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'canBack'],
}
</script>

<style>
.header {
  background-color: #F7F5F3;
  border-bottom: 1px solid #D1D0D0;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 10% 1fr 10%;
  height: 40px;
  position: fixed;
  top: 0;
  width: 100%;
}

.header-fixed {
  position: fixed;
}

.click-area {
  width: 35px;
}


.header-start {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  padding-left: 15px;
}

.icon-back {
  display: block;
  width: 12px;
  height: 12px;
  border-top: solid 2px #697b91;
  border-right: solid 2px #697b91;
  transform: rotate(225deg);
}

.header-center {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}

.page-title {
  align-items: center;
  display: flex;
  font-weight: bold;
  height: 100%;
  justify-content: center;
}

.header-end {
  align-items: center;
  display: flex;
  grid-row: 1 / 2;
  grid-column: 3 / 4;
}
</style>
