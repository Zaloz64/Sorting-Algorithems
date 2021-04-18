// Insertion sort code that creates the animation

<script>
import Algorithems from '../../utils';

export default {
  methods: {
    async startAnimation(numbers, animationspeed) {
      var lastUnsorted = numbers.length-1;
      const array = JSON.parse(JSON.stringify(numbers));
      const animations = this.getHeapSortAnimation(array);
       for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("stapel");
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;

        barOneStyle.backgroundColor = '#0A3640';
        barTwoStyle.backgroundColor = '#0A3640';
        await Algorithems.timeout(animationspeed);
        barOneStyle.backgroundColor = 'gray';
        barTwoStyle.backgroundColor = 'gray';
        Algorithems.swap(numbers, barOneIdx, barTwoIdx)
        if (barTwoIdx == lastUnsorted) {
          for (let i = lastUnsorted; i < numbers.length; i++) {
            arrayBars[i].style.backgroundColor = '#308C7B';
          }
          lastUnsorted --;
        }
        for (let i = lastUnsorted; i < numbers.length; i++) {
            arrayBars[i].style.backgroundColor = '#308C7B';
          }
      }
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
        Algorithems.swap(array, i, largest);
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
        Algorithems.swap(array, 0, i);
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