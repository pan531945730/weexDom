<template>
  <div class="pd-nav">
      <div class="link" @click="jump('/Product/siftFinance')">
        <text class="title">精选</text>
      </div>
      <div class="link" @click="jump('/Product/steward')">
          <text class="title">94管家</text>
      </div>
  </div>
</template>
<style scoped>
  .pd-nav {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    background-color: #fff;
  }
  .link{
    flex: 1;
  }
  .title {
    line-height: 60px;
    font-size: 30px;
    color:#333;
    text-align: center;
  }
  .nav-on {
      color: #ff5959!important;
      border-bottom: 1px solid #ff5959
  }
</style>
