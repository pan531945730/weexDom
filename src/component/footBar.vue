<template>
  <div class="foot-bar">
    <div class="link" @click="jump('/Product/siftFinance')">
        <text class="title">理财中心</text>
    </div>
    <div class="link" @click="jump('/Member/AccountCenter')">
        <text class="title">账户中心</text>
    </div>
  </div>
</template>
<style scoped>
.foot-bar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #333;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
}
.link{
  padding-left: 40px;
  padding-right: 40px;
}
.title{
  font-family: Verdana, Geneva, sans-serif;
  font-size: 26px;
  line-height: 60px;
  color: #FFFFFF;
}
</style>
