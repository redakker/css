<script setup lang="ts">
import Navigator from './components/Navigator.vue'
</script>

<template>
  <div class="bg">
    <Navigator />
  </div>

</template>

<style scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background: url('/background.jpg') no-repeat center center #c1c1c1;
  background-size: cover;
}
</style>
