
<template>

  <Nav-bar />

  <div id="more">
    <h3>Time Complexities of the Showed Sorting Algorithms</h3>
    <table>
      <tr id="topChart">
        <th>Algorithem</th>
        <th>Best</th>
        <th>Avrage</th>
        <th>Worst</th>
      </tr>
      <tr v-for="(val, index) in complexities" v-bind:key="index">
        <th>{{ val["Algorithem"] }}</th>
        <th>{{ val["Best"] }}</th>
        <th>{{ val["Avrage"] }}</th>
        <th>{{ val["Worst"] }}</th>
      </tr>
    </table>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "More",
  components: {
    NavBar,
  },
  data() {
    return {
      complexities: [
        {
          Algorithem: "Bogo Sort",
          Best: "Ω(1)",
          Avrage: "Θ((n+1)!)",
          Worst: "O((n+1)!)",
        },
        {
          Algorithem: "Selection Sort",
          Best: "Ω(n^2)",
          Avrage: "Θ(n^2)",
          Worst: "O(n^2)",
        },
        {
          Algorithem: "Bubble Sort",
          Best: "Ω(n)",
          Avrage: "Θ(n^2)",
          Worst: "O(n^2)",
        },
        {
          Algorithem: "Cocktail Sort",
          Best: "Ω(n)",
          Avrage: "Θ(n^2)",
          Worst: "O(n^2)",
        },
        {
          Algorithem: "Quick Sort",
          Best: "Ω(n log(n))",
          Avrage: "Θ(n log(n))",
          Worst: "O(n^2)",
        },
         {
          Algorithem: "Insertion Sort",
          Best: "Ω(n)",
          Avrage: "Θ(n^2)",
          Worst: "O(n^2)",
        },
        {
          Algorithem: "Merge Sort",
          Best: "Ω(n log(n))",
          Avrage: "Θ(n log(n))",
          Worst: "O(n log(n))",
        },
        {
          Algorithem: "Quick Sort",
          Best: "Ω(n log(n))",
          Avrage: "Θ(n log(n))",
          Worst: "O(n^2)",
        },
        {
          Algorithem: "Heap Sort",
          Best: "Ω(n log(n))",
          Avrage: "Θ(n log(n))",
          Worst: "O(n log(n))",
        },
      ],
    };
  },
};
</script>

<style scoped>
  h3 {
    text-transform: uppercase; 
    letter-spacing: 0.2rem;
    margin-bottom: 2rem;
  }
</style>

