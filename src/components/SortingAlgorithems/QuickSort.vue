// Insertion sort code that creates the animation

<script>
import Algorithems from "../../utils";

export default {
  methods: {
    async startAnimation(numbers, animationspeed) {
      const array = JSON.parse(JSON.stringify(numbers));
      const animations = Algorithems.getQuickSortAnimation(array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("stapel");
        if (i % 3 == 0) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          barOneStyle.backgroundColor = "green";
          barTwoStyle.backgroundColor = "green";
          await Algorithems.timeout(animationspeed);
          barOneStyle.backgroundColor = "gray";
          barTwoStyle.backgroundColor = "gray";
        } else {
          await Algorithems.timeout(animationspeed);
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }
      }
      const arrayBars = document.getElementsByClassName("stapel");
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.backgroundColor = "orange";
      }
    },
  },
};
</script>