<template>
  <section>
    <button @click="exit()">X</button>
    <h2>CODE</h2>
    <h3 v-if="selected == ''">You have not chosen an sorting algorithem!</h3>
    <SelectionSortPseudo v-else-if="selected == 'Selection Sort'" />
    <Bubble-sort v-else-if="selected == 'Bubble Sort'" />
    <Bogo-sort v-else-if="selected == 'Bogo Sort'" />
    <Insertion-sort v-else-if="selected == 'Insertion Sort'" />
    <Merge-sort v-else-if="selected == 'Merge Sort'" />
    <Quick-sort v-else-if="selected == 'Quick Sort'" />
    <Cocktail-shaker v-else-if="selected == 'Cocktail Shaker'"/>
    <Heap-sort v-else-if="selected == 'Heap Sort'"/>
  </section>
</template>

<script>
import SelectionSortPseudo from "../PseudoCode/SelectionSortPseudo.vue";
import BogoSort from '../PseudoCode/BogoSortPseudo.vue';
import InsertionSort from '../PseudoCode/InsertionSortPseudo.vue';
import MergeSort from '../PseudoCode/MergeSortPseudo.vue';
import QuickSort from '../PseudoCode/QuickSortPseudo.vue';
import BubbleSort from '../PseudoCode/BubbleSortPseudo.vue';
import CocktailShaker from '../PseudoCode/CocktailShakerPseudo.vue';
import HeapSort from '../PseudoCode/HeapSortPseudo.vue';


export default {
  name: "Code",
  components: { SelectionSortPseudo, BogoSort, InsertionSort, MergeSort ,QuickSort, BubbleSort, CocktailShaker, HeapSort},
  data() {
    return {
      selected: '',
    }
  },
  methods: {
    exit() {
      this.$parent.codeDisplay = false;
    },
  }
};
</script>


<style scoped>
button {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  position: relative;
  left: 2rem;
  background-color: #222222;
  border-style: solid;
  border-color: white;
  color: white;
  border-width: 1px;
}

section {
  background-color: #222222;
  margin: 0;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  color: white;
}

h2 {
  color: white;
  letter-spacing: 0.5rem;
}

</style>



