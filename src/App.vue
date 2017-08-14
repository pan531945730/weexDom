<template>
  <div @androidback="back">
    <alert v-show="showAlert"></alert>
    <toast v-show="showToast"></toast>
    <loading v-show="loading"></loading>
    <router-view style="flex:1"></router-view>
    <foot-bar></foot-bar>
  </div>
</template>

<script>
import footBar from './component/footBar.vue';
import alert from './component/Alert.vue';
import toast from './component/toast.vue';
import loading from './component/loading.vue';
import {mapGetters,mapActions} from 'vuex'
export default {
  components: {
    footBar,
    alert,
    toast,
    loading
  },
  data(){
    return{

    }
  },
  methods: {
    back: function () {
      this.$router.back()
    }
  },
  computed: mapGetters([
      'showAlert',
      'showToast',
      'loading'
    ])
}
</script>
