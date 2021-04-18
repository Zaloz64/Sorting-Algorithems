

<template>
  <div id="staplar">
    <transition-group name="list">
      <div
        class="stapel"
        v-for="(val, index) in numbers"
        v-bind:key="index"
        :style="{ height: val + 'px' }"
      ></div>
    </transition-group>
  </div>
  <button
    id="newArray"
    @click="
      createArray();
      staplatUpdate();
    "
  >
    Generate new array
  </button>

  <!-- Refrencing to what algorithem to use. -->
  <Selection-sort ref="SelectionSort" />
  <Bubble-sort ref="BubbleSort" />
  <Insertion-sort ref="InsertionSort" />
  <Merge-sort ref="MergeSort" />
  <Quick-sort ref="QuickSort" />
  <Bogo-sort ref="BogoSort" />
  <Heap-sort ref="HeapSort" />
  <Cocktail-shaker ref="CocktailShaker" />
  <Radix-sort ref="RadixSort" />
  <Shell-sort ref="ShellSort" />
</template>


<script>
import Algorithems from "../utils";
import SelectionSort from "./SortingAlgorithems/SelectionSort.vue";
import BubbleSort from "./SortingAlgorithems/BubbleSort.vue";
import InsertionSort from "./SortingAlgorithems/InsertionSort.vue";
import MergeSort from "./SortingAlgorithems/MergeSort.vue";
import QuickSort from "./SortingAlgorithems/QuickSort.vue";
import BogoSort from "./SortingAlgorithems/BogoSort.vue";
import HeapSort from "./SortingAlgorithems/HeapSort.vue";
import CocktailShaker from "./SortingAlgorithems/CocktailShaker.vue";
import RadixSort from "./SortingAlgorithems/RadixSort.vue";
import ShellSort from "./SortingAlgorithems/ShellSort.vue";

export default {
  components: {
    SelectionSort,
    BubbleSort,
    InsertionSort,
    MergeSort,
    QuickSort,
    BogoSort,
    HeapSort,
    CocktailShaker,
    RadixSort,
    ShellSort,
  },
  name: "HelloWorld",
  data() {
    return {
      amount: 10,
      animationspeed: 0.5,
      numbers: [],
    };
  },
  created() {
    this.createArray();
  },

  methods: {
    staplatUpdate() {
      this.amount = this.$parent.amountStaplar;
      this.animationspeed = this.$parent.sortingSpeed;
    },

    animationspeedUpdate() {
      this.animationspeed = this.$parent.sortingSpeed;
    },

    createArray() {
      this.staplatUpdate();
      var temp = Algorithems.createArray(this.amount);
      this.numbers = temp;

      if (this.bestcase) {
        this.numbers.sort(function (a, b) {
          return a > b ? 1 : -1;
        });
      }

      if (this.worstcase) {
        this.numbers.sort(function (a, b) {
          return a > b ? 1 : -1;
        });
        this.numbers.reverse();
      }

      const arrayBars = document.getElementsByClassName("stapel");
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = "gray";
      }
    },

    // Starting animations for the diffrent algorithems

    BogoSort() {
      this.$refs.BogoSort.startAnimation(this.numbers, this.animationspeed);
    },

    SelectionSort() {
      this.$refs.SelectionSort.startAnimation(
        this.numbers,
        this.animationspeed
      );
    },

    BubbleSort() {
      this.$refs.BubbleSort.startAnimation(this.numbers, this.animationspeed);
    },

    InsertionSort() {
      this.$refs.InsertionSort.startAnimation(
        this.numbers,
        this.animationspeed
      );
    },

    MergeSort() {
      this.$refs.MergeSort.startAnimation(this.numbers, this.animationspeed);
    },

    QuickSort() {
      this.$refs.QuickSort.startAnimation(this.numbers, this.animationspeed);
    },

    HeapSort() {
      this.$refs.HeapSort.startAnimation(this.numbers, this.animationspeed);
    },

    RadixSort() {
      this.$refs.RadixSort.startAnimation(this.numbers, this.animationspeed);
    },
   
    ShellSort() {
      this.$refs.ShellSort.startAnimation(this.numbers, this.animationspeed);
    },

    CocktailShaker() {
      this.$refs.CocktailShaker.startAnimation(
        this.numbers,
        this.animationspeed
      );
    },

    async BitonicSort() {},
  },
};
</script>



// Some css for the bar graph

<style scoped>
#staplar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;
}

.stapel {
  margin-left: 1px;
  width: 5px;
  background-color: gray;
  align-self: flex-end;
}

button {
  max-width: 10rem;
  margin: 1rem;
  align-self: center;
  background-color: #222;
  border-style: none;
  color: white;
  padding: 1rem;
  font-size: 0.9rem;
  border-radius: 2rem;
}
</style>
