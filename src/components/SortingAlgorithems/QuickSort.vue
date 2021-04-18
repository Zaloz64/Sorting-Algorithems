// Insertion sort code that creates the animation

<script>
import Algorithems from "../../utils";

export default {
  methods: {
    async startAnimation(numbers, animationspeed) {
      const array = JSON.parse(JSON.stringify(numbers));
      const animations = this.getQuickSortAnimation(array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("stapel");
        if (i % 3 == 0) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.backgroundColor = "green";
          barTwoStyle.backgroundColor = "green";
          await Algorithems.timeout(animationspeed);
          barOneStyle.backgroundColor = "gray";
          barTwoStyle.backgroundColor = "gray";
        } else {
          const [barOneIdx, newHeight] = animations[i];
          const [barTwoIdx, newHeight2] = animations[i + 1];
          if (newHeight < newHeight2) {
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            barOneStyle.backgroundColor = "blue";
            barTwoStyle.backgroundColor = "blue";
            await Algorithems.timeout(animationspeed);
            barOneStyle.backgroundColor = "gray";
            barTwoStyle.backgroundColor = "gray";
            barOneStyle.height = `${newHeight}px`;
            barTwoStyle.height = `${newHeight2}px`;
          }
          i++;
        }
      }
      const arrayBars = document.getElementsByClassName("stapel");
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = "orange";
      }
    },
    partition(items, left, right, animations) {
      var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
      while (i <= j) {
        while (items[i] < pivot) {
          i++;
        }
        while (items[j] > pivot) {
          j--;
        }
        if (i <= j) {
          animations.push([i, j]);
          animations.push([i, items[j]]);
          animations.push([j, items[i]]);
          Algorithems.swap(items, i, j); //sawpping two elements
          i++;
          j--;
        }
      }
      return i;
    },

    quickSort(items, left, right, animations) {
      var index;
      if (items.length > 1) {
        index = this.partition(items, left, right, animations); //index returned from partition
        if (left < index - 1) {
          //more elements on the left side of the pivot
          this.quickSort(items, left, index - 1, animations);
        }
        if (index < right) {
          //more elements on the right side of the pivot
          this.quickSort(items, index, right, animations);
        }
      }
      return animations;
    },

    getQuickSortAnimation(array) {
      var animations = [];
      animations = this.quickSort(array, 0, array.length - 1, animations);
      return animations;
    },
  },
};
</script>