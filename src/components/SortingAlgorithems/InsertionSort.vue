// Insertion sort code that creates the animation

<script>
import Algorithems from "../../utils";

export default {
  methods: {
    async startAnimation(numbers, animationspeed) {
      for (let i = 0; i < numbers.length; i++) {
        const arrayBars = document.getElementsByClassName("stapel");

        var key = numbers[i];
        arrayBars[i].style.backgroundColor = "#49F2C2";
        await Algorithems.timeout(animationspeed);
        arrayBars[i].style.backgroundColor = "gray";

        var j = i - 1;

        while (j >= 0 && numbers[j] > key) {
          arrayBars[j].style.backgroundColor = "#308C7B";
          await Algorithems.timeout(animationspeed);
          arrayBars[j].style.backgroundColor = "gray";
          numbers[j + 1] = numbers[j];
          j = j - 1;
        }

        numbers[j + 1] = key;
        arrayBars[j + 1].style.backgroundColor = "#0A3640";
        await Algorithems.timeout(animationspeed);
        arrayBars[j + 1].style.backgroundColor = "gray";
      }
      const arrayBars = document.getElementsByClassName("stapel");
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = "#308C7B";
      }

    },
  },
};
</script>