// Insertion sort code that creates the animation

<script>
import Algorithems from "../../utils";

export default {
  methods: {
    async startAnimation(numbers, animationspeed) {
      const arrayBars = document.getElementsByClassName("stapel");
      const array = JSON.parse(JSON.stringify(numbers));
      array.sort(function (a, b) {
        return a > b ? 1 : -1;
      });
      var sorted = false;
      while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length; i++) {
          if (numbers[i] == array[i]) {
            arrayBars[i].style.backgroundColor = "#308C7B";
          }
          else { sorted = false }
        }
        if (sorted == true) { break; }
        await Algorithems.timeout(animationspeed);
        for (let i = 0; i < array.length; i++) {
          arrayBars[i].style.backgroundColor = "gray";
        }
        Algorithems.shuffle(numbers);
      }
    },
  },
};
</script>