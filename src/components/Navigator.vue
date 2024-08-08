<script setup lang="ts">

  // const styleSheets = Array.from(document.styleSheets);
  // const rules = styleSheets.flatMap(sheet => Array.from(sheet.cssRules || []));
  // const styles = rules.map(rule => rule.cssText).join('\n');
</script>

<template>
  <div class="navigatorBoard">
    <div class="container">

    </div>
  </div>
</template>

<style scoped>
.navigatorBoard {
  position: absolute;
  display: inline-block;
  width: 50%;
  max-width: 400px;
  height: 90vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(5px);
  border: 2px solid #585858;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 #AF7D2E;
}

.container {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 15px;
  opacity: 0.5;
}
</style>
