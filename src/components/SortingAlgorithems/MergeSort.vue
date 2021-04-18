// Insertion sort code that creates the animation

<script>
import Algorithems from "../../utils";

export default {
  methods: {
    async startAnimation(numbers, animationspeed) {
      const array = JSON.parse(JSON.stringify(numbers));
      const animations = this.getMergeSortAnimations(array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("stapel");
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? "green" : "gray";
          await Algorithems.timeout(animationspeed);
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
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
    getMergeSortAnimations(array) {
      const animations = [];
      if (array.length <= 1) return array;
      const auxiliaryArray = array.slice();
      this.mergeSortHelper(
        array,
        0,
        array.length - 1,
        auxiliaryArray,
        animations
      );
      return animations;
    },

    mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
      if (startIdx === endIdx) return;
      const middleIdx = Math.floor((startIdx + endIdx) / 2);
      this.mergeSortHelper(
        auxiliaryArray,
        startIdx,
        middleIdx,
        mainArray,
        animations
      );
      this.mergeSortHelper(
        auxiliaryArray,
        middleIdx + 1,
        endIdx,
        mainArray,
        animations
      );
      this.doMerge(
        mainArray,
        startIdx,
        middleIdx,
        endIdx,
        auxiliaryArray,
        animations
      );
    },

    doMerge(
      mainArray,
      startIdx,
      middleIdx,
      endIdx,
      auxiliaryArray,
      animations
    ) {
      let k = startIdx;
      let i = startIdx;
      let j = middleIdx + 1;
      while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
          animations.push([k, auxiliaryArray[i]]);
          mainArray[k++] = auxiliaryArray[i++];
        } else {
          animations.push([k, auxiliaryArray[j]]);
          mainArray[k++] = auxiliaryArray[j++];
        }
      }
      while (i <= middleIdx) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      }
      while (j <= endIdx) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    },
  },
};
</script>