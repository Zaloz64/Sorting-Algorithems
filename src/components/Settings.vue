<template>
  <section v-show="settingdisplay">
    <h2>Settings</h2>
    <div class="slidecontainer">
      <p>Staplar</p>
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        class="slider"
        id="myRange"
      />
    </div>
    <div class="slidecontainer">
      <p>Hastighet</p>
      <input
        type="range"
        min="1"
        max="100"
        value="50"
        class="slider"
        id="myRange"
      />
    </div>
  </section>
</template>


<script>
export default {
  name: "Settings",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
