<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faKey, faAddressBook, faBabyCarriage, faCableCar, faDashboard, faEarDeaf, faHSquare, faSailboat } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
    <div class="bg">
        <div class="wrapperleft">
            <div class="item item1"><FontAwesomeIcon :icon="faKey" /></div>
            <div class="item item2"><FontAwesomeIcon :icon="faAddressBook" /></div>
            <div class="item item3"><FontAwesomeIcon :icon="faBabyCarriage" /></div>
            <div class="item item4"><FontAwesomeIcon :icon="faCableCar" /></div>
            <div class="item item5"><FontAwesomeIcon :icon="faDashboard" /></div>
            <div class="item item6"><FontAwesomeIcon :icon="faEarDeaf" /></div>
            <div class="item item7"><FontAwesomeIcon :icon="faHSquare" /></div>
            <div class="item item8"><FontAwesomeIcon :icon="faSailboat" /></div>
        </div>
        <div class="wrapperright">
            <div class="item item1"><FontAwesomeIcon :icon="faKey" /></div>
            <div class="item item2"><FontAwesomeIcon :icon="faAddressBook" /></div>
            <div class="item item3"><FontAwesomeIcon :icon="faBabyCarriage" /></div>
            <div class="item item4"><FontAwesomeIcon :icon="faCableCar" /></div>
            <div class="item item5"><FontAwesomeIcon :icon="faDashboard" /></div>
            <div class="item item6"><FontAwesomeIcon :icon="faEarDeaf" /></div>
            <div class="item item7"><FontAwesomeIcon :icon="faHSquare" /></div>
            <div class="item item8"><FontAwesomeIcon :icon="faSailboat" /></div>
        </div>
        <!-- https://www.youtube.com/watch?v=Reu0hHbis5w -->
    </div>
</template>

<style scoped>

.bg {
    background-color: #A6B37D;
}

.wrapperleft, .wrapperright {
  width: 90%;
  max-width: 1536px;
  margin-inline: auto;
  position: relative;
  height: 104px;
  padding-top: 15rem;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 10%,
    rgba(0, 0, 0, 1) 90%,
    rgba(0, 0, 0, 0)
  );
}

@keyframes scrollLeft {
  to {
    left: -200px;
  }
}

@keyframes scrollRight {
  from {
    left: -200px;
  }
}

.wrapperleft .item {
  width: 200px;
  height: 100px;
  background-color: #C0C78C;
  border-radius: 6px;
  border: 1px solid #757956;
  position: absolute;
  left: max(calc(200px * 8), 100%);
  animation-name: scrollLeft;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3em;
}

.wrapperright .item {
  width: 200px;
  height: 100px;
  background-color: #9c6439;
  border-radius: 6px;
  border: 1px solid #c25604;
  position: absolute;
  left: max(calc(200px * 8), 100%);
  animation-name: scrollRight;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 3em;
}

.item1 {
  animation-delay: calc(30s / 8 * (8 - 1) * -1);
}

.item2 {
  animation-delay: calc(30s / 8 * (8 - 2) * -1);
}

.item3 {
  animation-delay: calc(30s / 8 * (8 - 3) * -1);
}

.item4 {
  animation-delay: calc(30s / 8 * (8 - 4) * -1);
}

.item5 {
  animation-delay: calc(30s / 8 * (8 - 5) * -1);
}

.item6 {
  animation-delay: calc(30s / 8 * (8 - 6) * -1);
}

.item7 {
  animation-delay: calc(30s / 8 * (8 - 7) * -1);
}

.item8 {
  animation-delay: calc(30s / 8 * (8 - 8) * -1);
}
</style>