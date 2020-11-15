<template>
  <div class="header">
    <ul>
      <li>カテゴリー１</li>
      <li>カテゴリー2</li>
      <li>カテゴリー3</li>
      <li>カテゴリー4</li>
      <li>カテゴリー5</li>
    </ul>
  </div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
@import "./assets/stylesheets/reset.scss";
@import "./assets/stylesheets/header.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
