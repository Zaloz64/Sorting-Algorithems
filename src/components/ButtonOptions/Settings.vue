<template>
  <section>
    <button @click="exit()">X</button>
    <h2>SETTINGS</h2>
    <div class="slidecontainer">
      <p>Antal Staplar: {{ $parent.amountStaplar }}</p>
      <input
        v-model="$parent.amountStaplar"
        v-on:change="$parent.$refs.myChild.createArray()"
        type="range"
        min="2"
        max="200"
        class="slider"
        id="myRange"
      />
      <p>Hastighet: {{ $parent.sortingSpeed }}</p>
      <input
        v-model="$parent.sortingSpeed"
        v-on:change="$parent.$refs.myChild.animationspeedUpdate()"
        type="range"
        min="0.01"
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
  methods: {
    exit() {
      this.$parent.settingdisplay = false;
    },
  },
  computed: {},
};
</script>

<style scoped>
.slidecontainer {
  color: white;
}

.checkBox {
  display: flex;
  align-items: center;
}


input[type=checkbox] {
  padding: 0 1rem;
}
</style>
