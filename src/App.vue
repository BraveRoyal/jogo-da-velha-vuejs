<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link style="text-decoration: none; margin-left:20px;" to="/">
      <b-navbar-brand>Home</b-navbar-brand>
      </router-link>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
*{
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,8,134,1) 35%, rgba(0,212,255,1) 100%);
  background-size: cover;
  height: 100vh;
  width: 100vw;

}
</style>
