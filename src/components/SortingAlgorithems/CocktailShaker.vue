// Insertion sort code that creates the animation

<script>
import Algorithems from "../../utils";

export default {
  methods: {
    async startAnimation(numbers, animationspeed) {
      var start = 0;
      var end = numbers.length - 1;

      while (end != start) {
        const arrayBars = document.getElementsByClassName("stapel");

        for (let i = start; i < end; ++i) {
          const arrayBars = document.getElementsByClassName("stapel");
          arrayBars[i].style.backgroundColor = "green";
          arrayBars[i + 1].style.backgroundColor = "green";
          await Algorithems.timeout(animationspeed);
          if (numbers[i] > numbers[i + 1]) {
            arrayBars[i].style.backgroundColor = "blue";
            arrayBars[i + 1].style.backgroundColor = "blue";
            await Algorithems.timeout(animationspeed);
            Algorithems.swap(numbers, i, i + 1);
          }
          arrayBars[i].style.backgroundColor = "gray";
          arrayBars[i + 1].style.backgroundColor = "gray";
        }
        arrayBars[end].style.backgroundColor = "orange";
        --end;
        for (let i = end - 1; i >= start; --i) {
          const arrayBars = document.getElementsByClassName("stapel");
          arrayBars[i].style.backgroundColor = "green";
          arrayBars[i + 1].style.backgroundColor = "green";
          await Algorithems.timeout(animationspeed);
          if (numbers[i] > numbers[i + 1]) {
            arrayBars[i].style.backgroundColor = "blue";
            arrayBars[i + 1].style.backgroundColor = "blue";
            await Algorithems.timeout(animationspeed);
            Algorithems.swap(numbers, i, i + 1);
          }
          arrayBars[i].style.backgroundColor = "gray";
          arrayBars[i + 1].style.backgroundColor = "gray";
        }
        arrayBars[start].style.backgroundColor = "orange";
        ++start;
      }
    },
  },
};
</script>