<template>
  <section >
    <button @click="yes()">X</button>
    <h2>SETTINGS</h2>
    <div class="slidecontainer">
      <p>Antal Staplar: {{$parent.amountStaplar}}</p>
      <input
        v-model="$parent.amountStaplar"
        type="range"
        min="2"
        max="200"
        class="slider"
        id="myRange"
      />
      <p>Hastighet: {{$parent.sortingSpeed}}</p>
      <input
        v-model="$parent.sortingSpeed"
        type="range"
        min="00.1"
        max="2000"
        class="slider"
        id="myRange"
      />
    </div>

  </section>
</template>


<script>
export default {
  name: "Settings",
  data() {
    return {
      speed: "",

    }
  },
  methods: {
    yes() {
      this.$parent.settingdisplay = false;
    }
  },
  computed: {
    

  }
};
</script>

<style scoped>


  .slidecontainer {
    color: white;
  }

</style>
