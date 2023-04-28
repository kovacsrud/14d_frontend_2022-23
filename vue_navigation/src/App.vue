<script setup>
import HelloWorld from './components/HelloWorld.vue'
import KomponensA from './components/KomponensA.vue'
</script>

<template>
  <div>
    
      <p><RouterLink to="/">Home</RouterLink></p>
      <p><RouterLink to="/komponensa">KomponensA</RouterLink></p>
    
    
  </div>
  <RouterView />
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
