// Insertion sort code that creates the animation

<script>
import Algorithems from "../../utils";

export default {
  methods: {
    async startAnimation(numbers, animationspeed) {
      console.log('in')
      console.log(numbers == animationspeed)
      
      // const array = JSON.parse(JSON.stringify(numbers));
      // const animations = this.getHeapSortAnimation(array);
      //  for (let i = 0; i < animations.length; i++) {
      //   const arrayBars = document.getElementsByClassName("stapel");
        



      //   if (isColorChange) {
      //     const [barOneIdx, barTwoIdx] = animations[i];
      //     const barOneStyle = arrayBars[barOneIdx].style;
      //     const barTwoStyle = arrayBars[barTwoIdx].style;
      //     const color = i % 3 === 0 ? "green" : "gray";
      //     await Algorithems.timeout(animationspeed);
      //     barOneStyle.backgroundColor = color;
      //     barTwoStyle.backgroundColor = color;
      //   } else {
      //     await Algorithems.timeout(animationspeed);
      //     const [barOneIdx, newHeight] = animations[i];
      //     const barOneStyle = arrayBars[barOneIdx].style;
      //     barOneStyle.height = `${newHeight}px`;
      //   }
      // }


    },

    heapify(array, n, i, animations) {
      var largest = i; // Initialize largest as root
      var l = 2 * i + 1; // left = 2*i + 1
      var r = 2 * i + 2; // right = 2*i + 2

      // If left child is larger than root
      if (l < n && array[l] > array[largest]) largest = l;

      // If right child is larger than largest so far
      if (r < n && array[r] > array[largest]) largest = r;

      // If largest is not root
      if (largest != i) {
        this.swap(array, i, largest);
        animations.push([i, largest]);
        // Recursively heapify the affected sub-tree
        this.heapify(array, n, largest, animations);
      }
    },

    heapSort(array, n, animations) {
      for (let i = n / 2 - 1; i >= 0; i--)
        this.heapify(array, n, i, animations);

      for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        this.swap(array, 0, i);
        animations.push([0, i]);

        // call max heapify on the reduced heap
        this.heapify(array, i, 0, animations);
      }
    },

    getHeapSortAnimation(array) {
      var animations = [];
      this.heapSort(array, array.length, animations);
      return animations;
    },
  },
};
</script>