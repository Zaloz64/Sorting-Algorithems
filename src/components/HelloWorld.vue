

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
  <button id="newArray"
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
  <Bogo-sort ref="BogoSort"/>
</template>


<script>
import Algorithems from "../utils";
import SelectionSort from "./SortingAlgorithems/SelectionSort.vue";
import BubbleSort from "./SortingAlgorithems/BubbleSort.vue";
import InsertionSort from "./SortingAlgorithems/InsertionSort.vue";
import MergeSort from "./SortingAlgorithems/MergeSort.vue";
import QuickSort from "./SortingAlgorithems/QuickSort.vue";
import BogoSort from "./SortingAlgorithems/BogoSort.vue";


export default {
  components: {
    SelectionSort,
    BubbleSort,
    InsertionSort,
    MergeSort,
    QuickSort,
    BogoSort,
  },
  name: "HelloWorld",
  data() {
    return {
      amount: 10,
      animationspeed: 0.5,
      numbers: [],
      isPlaying: false,
    };
  },
  created() {
    this.createArray();
  },
  watch: {
    amount: function () {
      this.createArray();
    },
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

    async HeapSort() {
      // Needs to be done properly
      var animations = Algorithems.getHeapSortAnimation(this.numbers);
      console.log(animations);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("stapel");
        await Algorithems.timeout(this.animationspeed);
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }
    },

    async RadixSort() {},

    async ShellSort() {},

    async CocktailShaker() {
      var a = JSON.parse(JSON.stringify(this.numbers));
      // var a = this.numbers;

      var swapped = true;
      var start = 0;
      var end = a.length - 1;

      while (swapped) {
        // const arrayBars = document.getElementsByClassName("stapel");

        swapped = false;
        for (let i = start; i < end; ++i) {
          if (a[i] > a[i + 1]) {
            Algorithems.swap(a, i, i + 1);

            swapped = true;
          }
        }
        if (!swapped) break;

        swapped = false;

        --end;

        for (let i = end - 1; i >= start; --i) {
          if (a[i] > a[i + 1]) {
            Algorithems.swap(a, i, i + 1);
            swapped = true;
          }
        }

        ++start;
      }
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
  margin-left: 5px;
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
