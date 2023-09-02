<template>
  
  <div id="app">
    <navbar></navbar>
    <remonter class="remonter"></remonter>
    <router-view/>
  </div>
  
</template>

<script>
import navbar from './components/navbar.vue';
import remonter from './components/remonter.vue'
// import des composants ici si nécessaire
export default {
  name: 'App',
  components: {
    navbar,
    remonter
  }
}
</script>

<style>
/* Style CSS ici si nécessaire */
</style>