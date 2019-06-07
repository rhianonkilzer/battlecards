<template>
  <div id="app">

    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000000;
  }

  body {
    background-image: linear-gradient(to top, #000000 0%, #ffffff 100%);
    background-repeat: no-repeat;
    background-size: cover;
    width: auto;
    height: auto;
  }
</style>