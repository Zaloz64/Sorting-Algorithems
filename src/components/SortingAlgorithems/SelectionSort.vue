// Selection sort code that creates the animation

<script>
import Algorithems from "../../utils";

export default {
  methods: {
    async startAnimation(numbers, animationspeed) {
      var arrLength = numbers.length;
      for (let a = 0; a < arrLength - 1; a++) {
        const arrayBars = document.getElementsByClassName("stapel");
        arrayBars[a].style.backgroundColor = "#0A3640";
        await Algorithems.timeout(animationspeed);
        arrayBars[a].style.backgroundColor = "#49F2C2";
        var zMin = a;
        for (let z = a + 1; z < arrLength; z++) {
          arrayBars[z].style.backgroundColor = "#0A3640";
          await Algorithems.timeout(animationspeed);
          if (numbers[z] < numbers[zMin]) {
            arrayBars[zMin].style.backgroundColor = "gray";
            zMin = z;
            arrayBars[zMin].style.backgroundColor = "#49F2C2";
          } else {
            arrayBars[z].style.backgroundColor = "gray";
          }
        }
        if (a != zMin) {
          var b = numbers[zMin];
          numbers[zMin] = numbers[a];
          numbers[a] = b;
        }

        arrayBars[a].style.backgroundColor = "#308C7B";
      }
      const arrayBars = document.getElementsByClassName("stapel");
      arrayBars[arrayBars.length - 1].style.backgroundColor = "#308C7B";
    },
  },
};
</script>
