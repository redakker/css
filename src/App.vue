<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
  <div class="home">
    <router-link to="/css"><FontAwesomeIcon :icon="faHouse" /></router-link>
  </div>
  <div class="bg">
    <router-view></router-view>
  </div>

</template>

<style scoped>

.home {
  display: flex;
  position: absolute;
  font-size: 2em;
  color: #ffffff;
  backdrop-filter: blur(14px);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  top: 10px;
  left: 10px;
  animation: bounce2 4s ease infinite;
  z-index: 999;;


}

@keyframes bounce2 {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-15px);}
	60% {transform: translateY(-7px);}
}

.bg {
  width: 100vw;
  height: 100vh;
}
</style>
