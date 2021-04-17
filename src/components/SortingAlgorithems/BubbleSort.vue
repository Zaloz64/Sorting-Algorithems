// Bubble sort code that creates the animation

<script>
import Algorithems from "../../utils";

export default {
  methods: {
    async startAnimation(numbers, animationspeed) {
      for (let i = 0; i < numbers.length - 1; i++) {
        const arrayBars = document.getElementsByClassName("stapel");
        for (let j = 0; j < numbers.length - i - 1; j++) {
          arrayBars[j].style.backgroundColor = "green";
          arrayBars[j + 1].style.backgroundColor = "green";
          await Algorithems.timeout(animationspeed);
          if (numbers[j] > numbers[j + 1]) {
            var b = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = b;
            arrayBars[j].style.backgroundColor = "red";
            arrayBars[j + 1].style.backgroundColor = "red";
            await Algorithems.timeout(animationspeed);
          }

          arrayBars[j].style.backgroundColor = "gray";
          arrayBars[j + 1].style.backgroundColor = "gray";
          await Algorithems.timeout(animationspeed);
        }
        arrayBars[numbers.length - 1 - i].style.backgroundColor = "orange";
      }
      const arrayBars = document.getElementsByClassName("stapel");
      arrayBars[0].style.backgroundColor = "orange";
    },
  },
};
</script>