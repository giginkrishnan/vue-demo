<template>
  <div class="events">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div id="nav">
      <router-link class="route-links" :to="{ name: 'Home' }"
        >Home
      </router-link>
      <router-link class="route-links" :to="{ name: 'About' }"
        >About</router-link
      >
      <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 10px;
}
h4 {
  font-size: 20px;
}
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.route-links {
  padding: 10px;
  text-decoration: none;
}
.route-links:active {
  padding: 10px;
  color: #2c3e50;
  font-weight: 600;
}
</style>
