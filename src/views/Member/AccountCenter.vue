<template>
  <div class="wrapper" @click="update">
    <div @click="jump('/Member/AccountCenter')">
        <text >账户dddd中心</text>
    </div>
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Helloddddddddddd {{target}}</text>
    <foot-bar></foot-bar>
  </div>
</template>

<style>
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
</style>

<script>
  import footBar from '../../component/footBar.vue';
  export default {
    data() {
      return {
        logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
        target: 'Wodrld'
      }
    },
    components: {
      footBar
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>
