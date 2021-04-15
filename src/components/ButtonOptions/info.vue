<template>
  <section>
    <button @click="exit()">X</button>
    <h2>Information</h2>
    <p>
      Choose the algorithem you would like to see up in tha nav bar. <br />
      <br />
      Push play to se the visualization and push the settingsbutton to change
      speed or the amount of bars in the graph. <br>
      <br>
      Additionally on the code button can you see psuado code for the algorithem or an external link for more information.
    </p>
  </section>
</template>

<script>
export default {
  name: "Info",
  methods: {
    exit() {
      this.$parent.infoDisplay = false;
    },
  },
};
</script>



