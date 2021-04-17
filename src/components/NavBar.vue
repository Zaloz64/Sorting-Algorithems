<template>
  <nav>
    <h1>{{ selected }}</h1>
    <router-link to="/">Start</router-link>
    <div class="dropdown">
      <router-link to="/visul" class="dropbtn">Sorting Algorithms</router-link>
      <div class="dropdown-content">
        <a
          href="#"
          @click="selectedAlgotithem(sortAlgorithem)"
          v-for="(sortAlgorithem, index) in basic"
          v-bind:key="index"
          >{{ sortAlgorithem }}</a
        >
      </div>
    </div>
    <router-link to="/More" id="info">Complexities</router-link>
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
    };
  },

  methods: {
    selectedAlgotithem(name) {
      this.$parent.isShowing = false;
      this.selected = name;
      this.$parent.$refs.myChild.createArray();
    },
    showAlgotithem() {
      if (this.selected == "Selection Sort") {
        this.$parent.$refs.myChild.SelectionSort();
      } else if (this.selected == "Bubble Sort") {
        this.$parent.$refs.myChild.BubbleSort();
      } else if (this.selected == "Insertion Sort") {
        this.$parent.$refs.myChild.InsertionSort();
      } else if (this.selected == "Merge Sort") {
        this.$parent.$refs.myChild.MergeSort();
      } else if (this.selected == "Quick Sort") {
        this.$parent.$refs.myChild.QuickSort();
      } else if (this.selected == "Bogo Sort") {
        this.$parent.$refs.myChild.BogoSort();
      } else if (this.selected == "Heap Sort") {
        this.$parent.$refs.myChild.HeapSort();
      } else if (this.selected == "Cocktail Shaker") {
        this.$parent.$refs.myChild.CocktailShaker();
      }
    },
  },
};
</script>


<style scoped>
#info {
  margin: 0;
}

.dropbtn {
  display: flex;
  justify-self: center;
  align-self: center;
}
</style>
