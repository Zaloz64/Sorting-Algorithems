// Insertion sort code that creates the animation

<script>
import Algorithems from "../../utils";

export default {
  methods: {
    async startAnimation(numbers, animationspeed) {
      console.log(animationspeed);
      console.log(numbers);
      var n = numbers.length;
      for (let gap = n / 2; gap > 0; gap /= 2) {
        for (let i = gap; i < n; i += 1) {
          const arrayBars = document.getElementsByClassName("stapel");
          var temp = numbers[i];
          arrayBars[i].style.backgroundColor = "blue";
          await Algorithems.timeout(animationspeed);

          var j;
          for (j = i; j >= gap && numbers[j - gap] > temp; j -= gap) {
            arrayBars[j].style.backgroundColor = "green";
            arrayBars[j - gap].style.backgroundColor = "green";
            await Algorithems.timeout(animationspeed);
            arrayBars[j] = arrayBars[j - gap];
            numbers[j] = numbers[j - gap];
            arrayBars[j].style.backgroundColor = "gray";
            arrayBars[j - gap].style.backgroundColor = "gray";
          }
          arrayBars[j] = arrayBars[i];
          numbers[j] = temp;
        }
      }
    },
  },
};
</script>