<template>
  <div class="load">
      <text></text>
  </div>
</template>

<style scoped>
.load{
    position: fixed;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    margin: -25px 0 0 -25px;
    background: rgba(0,0,0,0.6);
    border-radius: 5px;
    z-index: 1;
}
.load span{
    display: block;
    width: 30px;
    height: 30px;
    margin: 10px auto;
    background-color: #cccccc;
    -webkit-animation:loading 1.5s linear 0s infinite;
}
@-webkit-keyframes loading {
    from{
        -webkit-transform:rotate(0deg);
    }
    to{
        -webkit-transform:rotate(360deg);
    }
}
</style>
