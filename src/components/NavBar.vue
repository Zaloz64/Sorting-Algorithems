<template>
  <nav>
    <h1>{{ selected }}</h1>
    <router-link to="/">Start</router-link>
    <div class="dropdown">
      <button class="dropbtn">Basic sortingalgorithems</button>
      <div class="dropdown-content">
        <a
          href="#"
          @click="selectedAlgotithem(pathfind)"
          v-for="(sortAlgorithem, index) in basic"
          v-bind:key="index"
          >{{ sortAlgorithem }}</a
        >
      </div>
    </div>
    <div class="dropdown">
      <button class="dropbtn">Uniqe</button>
      <div class="dropdown-content">
        <a
          href="#"
          @click="selectedAlgotithem(sortAlg)"
          v-for="(sortAlgorithem, index) in uniqe"
          v-bind:key="index"
          >{{ sortAlgorithem }}</a
        >
      </div>
    </div>
    <router-link to="/More" id="info">More information</router-link>
  </nav>
  <router-view />
</template>

<script>

export default {
  data() {
    return {
      isShowing: true,
      basic: [
        "Bogo Sort",
        "Selection Sort",
        "Bubble Sort",
        "Insertion Sort",
        "Merge Sort",
        "Quick Sort",
        "Heap Sort",
      ],
      uniqe: ["Radix Sort", "Shell Sort", "Cocktail Shaker", "Bitonic Sort"],
      selected: "",
      settingdisplay: false,
    };
  },

  methods: {
    selectedAlgotithem(name) {
      this.isShowing = false;
      this.selected = name;
      this.$refs.myChild.createArray();
    },
    showAlgotithem() {
      if (this.selected == "Selection Sort") {
        this.$refs.myChild.SelectionSort();
      } else if (this.selected == "Bubble Sort") {
        this.$refs.myChild.BubbleSort();
      } else if (this.selected == "Insertion Sort") {
        this.$refs.myChild.InsertionSort();
      } else if (this.selected == "Merge Sort") {
        this.$refs.myChild.MergeSort();
      } else if (this.selected == "Quick Sort") {
        this.$refs.myChild.QuickSort();
      } else if (this.selected == "Bogo Sort") {
        this.$refs.myChild.BogoSort();
      } else if (this.selected == "Heap Sort") {
        this.$refs.myChild.HeapSort();
      } else if (this.selected == "Cocktail Shaker") {
        this.$refs.myChild.CocktailShaker();
      }
    },
  },
};
</script>


<style scoped>
#info {
  margin: 0;
}
</style>
