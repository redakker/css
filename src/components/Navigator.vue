<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faKey } from '@fortawesome/free-solid-svg-icons'

const time = new Date().getFullYear();

</script>

<template>
  <div class="bg">
    <div class="navigatorBoard">
      <div class="container">
        <div class="content">
          <h1>Welcome</h1>
          <p>This page shows interesting CSS solution on component by component.</p>
          <p>Each component will be linked to its own source code in <a href="https://github.com/redakker/css" target="_blank">Github</a> page</p>
          <p>This application is written in VueJs. It has some Javascript logic as well, but all the design is done by CSS only. Javascript is used for display data, and mocking background operation (for example in case of login page). Be aware this application has no backend it is not a purpose of that. </p>

        <div class="icons">
          <router-link to="/css/login">
            <div class="icon">
              <FontAwesomeIcon :icon="faKey" />
              <p>login</p>
            </div>
          </router-link>
          <div class="icon">
            <FontAwesomeIcon :icon="faKey" />
            <p>infinite scroll</p>
          </div>
          <div class="icon">
            <FontAwesomeIcon :icon="faKey" />
            <p>coming...</p>
          </div>
          <div class="icon">
            <FontAwesomeIcon :icon="faKey" />
            <p>coming...</p>
          </div>
          <div class="icon">
            <FontAwesomeIcon :icon="faKey" />
            <p>coming...</p>
          </div>
          <div class="icon">
            <FontAwesomeIcon :icon="faKey" />
            <p>coming...</p>
          </div>
        </div>
        </div>
        <div class="footer">
          <p>Created by <a href="https://github.com/redakker" target="_blank">redakker © {{ time }}</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background: url('/background.jpg') no-repeat center center #c1c1c1;
  background-size: cover;
}
.navigatorBoard {
  color: white;
  position: absolute;
  width: 50%;
  max-width: 400px;
  height: 90vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(4px);
  border-radius: 15px;
  box-shadow: 0 0 10px 0 #494949;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgb(109, 96, 62);
  border-radius: 15px;
  opacity: 0.5;
}

.content {
  padding: 10px;
  text-align: justify;
}

.content h1 {
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.15em;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}

.icons {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  flex-wrap: wrap;
  text-align: center;
}

.icon {
  font-size: 3em;
}

.icon p{
  margin: 0;
  padding: 0;
  letter-spacing: 0.01em;
  font-size: 0.4em;
  text-align: center;
  color: white;
}


</style>
