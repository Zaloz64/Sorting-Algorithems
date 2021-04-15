

<template>
  <div id="staplar">
    <transition-group name="list">
      <div
        class="stapel"
        v-for="(val, index) in numbers"
        v-bind:key="index"
        :style="{ height: val + 'px' }"
      >
        <!-- {{ val }} -->
      </div>
    </transition-group>
  </div>
  <button @click="createArray">Generate new array</button>
</template>


<script>
import Algorithems from "../utils";

export default {
  name: "HelloWorld",
  data() {
    return {
      amount: 10,
      animationspeed: 0.5,
      numbers: [],
    };
  },
  watch: {
    theAmount() {
      this.amount = this.$parent.amountStaplar
    }
  },
  created() {
    this.createArray();
  },

  methods: {
    createArray() {
      var temp = Algorithems.createArray(this.amount);
      this.numbers = temp;

      const arrayBars = document.getElementsByClassName("stapel");
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = "gray";
      }
    },

    async BogoSort() {
      // const arrayBars = document.getElementsByClassName("stapel");
      const array = JSON.parse(JSON.stringify(this.numbers));
      array.sort(function (a, b) {
        return a > b ? 1 : -1;
      });
      while (this.numbers != array) {
        // console.log(this.numbers && array)
        await Algorithems.timeout(this.animationspeed);
        Algorithems.shuffle(this.numbers);
      }
    },

    async SelectionSort() {
      var numbers = this.numbers;
      var arrLength = numbers.length;
      for (let a = 0; a < arrLength - 1; a++) {
        const arrayBars = document.getElementsByClassName("stapel");
        arrayBars[a].style.backgroundColor = "red";
        await Algorithems.timeout(this.animationspeed);
        arrayBars[a].style.backgroundColor = "green";
        var zMin = a;
        for (let z = a + 1; z < arrLength; z++) {
          arrayBars[z].style.backgroundColor = "red";
          await Algorithems.timeout(this.animationspeed);
          if (numbers[z] < numbers[zMin]) {
            arrayBars[zMin].style.backgroundColor = "gray";
            zMin = z;
            arrayBars[zMin].style.backgroundColor = "green";
          } else {
            arrayBars[z].style.backgroundColor = "gray";
          }
        }
        if (a != zMin) {
          var b = numbers[zMin];
          numbers[zMin] = numbers[a];
          numbers[a] = b;
        }

        arrayBars[a].style.backgroundColor = "orange";
      }
      const arrayBars = document.getElementsByClassName("stapel");
      arrayBars[arrayBars.length - 1].style.backgroundColor = "orange";
    },

    async BubbleSort() {
      var numbers = this.numbers;

      for (let i = 0; i < numbers.length - 1; i++) {
        const arrayBars = document.getElementsByClassName("stapel");
        for (let j = 0; j < numbers.length - i - 1; j++) {
          arrayBars[j].style.backgroundColor = "green";
          arrayBars[j + 1].style.backgroundColor = "green";
          await Algorithems.timeout(this.animationspeed);
          if (numbers[j] > numbers[j + 1]) {
            var b = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = b;
            arrayBars[j].style.backgroundColor = "red";
            arrayBars[j + 1].style.backgroundColor = "red";
            await Algorithems.timeout(this.animationspeed);
          }

          arrayBars[j].style.backgroundColor = "gray";
          arrayBars[j + 1].style.backgroundColor = "gray";
          await Algorithems.timeout(this.animationspeed);
        }
        arrayBars[numbers.length - 1 - i].style.backgroundColor = "orange";
      }
      const arrayBars = document.getElementsByClassName("stapel");
      arrayBars[0].style.backgroundColor = "orange";
    },

    async InsertionSort() {
      var numbers = this.numbers;
      for (let i = 0; i < numbers.length; i++) {
        const arrayBars = document.getElementsByClassName("stapel");

        var key = numbers[i];
        arrayBars[i].style.backgroundColor = "red";
        await Algorithems.timeout(this.animationspeed);
        arrayBars[i].style.backgroundColor = "gray";

        var j = i - 1;

        while (j >= 0 && numbers[j] > key) {
          arrayBars[j].style.backgroundColor = "orange";
          await Algorithems.timeout(this.animationspeed);
          arrayBars[j].style.backgroundColor = "gray";
          numbers[j + 1] = numbers[j];
          j = j - 1;
        }

        numbers[j + 1] = key;
        arrayBars[j + 1].style.backgroundColor = "green";
        await Algorithems.timeout(this.animationspeed);
        arrayBars[j + 1].style.backgroundColor = "gray";
      }
    },
    async MergeSort() {
      const array = JSON.parse(JSON.stringify(this.numbers));
      const animations = Algorithems.getMergeSortAnimations(array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("stapel");
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? "green" : "gray";
          await Algorithems.timeout(this.animationspeed);
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        } else {
          await Algorithems.timeout(this.animationspeed);
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }
      }
    },
    async QuickSort() {
      const array = JSON.parse(JSON.stringify(this.numbers));
      const animations = Algorithems.getQuickSortAnimation(array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("stapel");
        if (i % 3 == 0) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.backgroundColor = "green";
          barTwoStyle.backgroundColor = "green";
          await Algorithems.timeout(this.animationspeed);
          barOneStyle.backgroundColor = "gray";
          barTwoStyle.backgroundColor = "gray";
        } else {
          await Algorithems.timeout(this.animationspeed);
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }
      }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
}
</style>
