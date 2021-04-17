// Selection sort code that creates the animation

<script>
import Algorithems from "../../utils";

export default {
  methods: {
    async startAnimation(numbers, animationspeed) {
      var arrLength = numbers.length;
      for (let a = 0; a < arrLength - 1; a++) {
        const arrayBars = document.getElementsByClassName("stapel");
        arrayBars[a].style.backgroundColor = "red";
        await Algorithems.timeout(animationspeed);
        arrayBars[a].style.backgroundColor = "green";
        var zMin = a;
        for (let z = a + 1; z < arrLength; z++) {
          arrayBars[z].style.backgroundColor = "red";
          await Algorithems.timeout(animationspeed);
          if (numbers[z] < numbers[zMin]) {
            arrayBars[zMin].style.backgroundColor = "gray";
            zMin = z;
            arrayBars[zMin].style.backgroundColor = "green";
          } else {
            arrayBars[z].style.backgroundColor = "gray";
          }
        }
        if (a != zMin) {
          var b = numbers[zMin];
          numbers[zMin] = numbers[a];
          numbers[a] = b;
        }

        arrayBars[a].style.backgroundColor = "orange";
      }
      const arrayBars = document.getElementsByClassName("stapel");
      arrayBars[arrayBars.length - 1].style.backgroundColor = "orange";
    },
  },
};
</script>
