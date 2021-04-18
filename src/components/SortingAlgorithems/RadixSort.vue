// Insertion sort code that creates the animation

<script>
// import Algorithems from "../../utils";

export default {
  data() {
    return {
      animations: [],
    };
  },
  methods: {
    async startAnimation(numbers, animationspeed) {
      console.log(animationspeed);
      console.log(this.radixSort(numbers));
      // const arrayBars = document.getElementsByClassName("stapel");
      // rrayBars[j];

    },
    getMax(arr) {
      let max = 0;
      for (let num of arr) {
        if (max < num.toString().length) {
          max = num.toString().length;
        }
      }
      return max;
    },
    getPosition(num, place) {
      return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    },
    radixSort(arr) {
      const max = this.getMax(arr);

      for (let i = 0; i < max; i++) {
        let buckets = Array.from({ length: 10 }, () => []);
        for (let j = 0; j < arr.length; j++) {
          buckets[this.getPosition(arr[j], i)].push(arr[j]);
          this.animations.push([this.getPosition(arr[j], i),j])
        }
        console.log(buckets);
        arr = [].concat(...buckets);
      }
      return arr;
    },
  },
};
</script>