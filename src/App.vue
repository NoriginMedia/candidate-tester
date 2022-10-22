<script setup>
// import HelloWorld from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="w-96 mx-auto">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
