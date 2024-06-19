<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import PostBlog from './components/PostBlog.vue'
import NavBar from './components/NavBar.vue'



</script>

<template>
  <header>
    
    <div class="wrapper">

      <NavBar/>
    </div>
  </header>


  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.post{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
