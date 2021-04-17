<template>
  <link rel="stylesheet" href="scss/More.css">
  <Nav-bar />

  <main>
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
  </main>
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
          Algorithem: "Quick Sort",
          Best: "Ω(n log(n))",
          Avrage: "Θ(n log(n))",
          Worst: "O(n^2)",
        },
        {
          Algorithem: "Bubble Sort",
          Best: "Ω(n)",
          Avrage: "Θ(n^2)",
          Worst: "O(n^2)",
        },
        {
          Algorithem: "Merge  Sort",
          Best: "Ω(n log(n))",
          Avrage: "Θ(n log(n))",
          Worst: "O(n log(n))",
        },
        {
          Algorithem: "Insertion Sort",
          Best: "Ω(n)",
          Avrage: "Θ(n^2)",
          Worst: "O(n^2)",
        },
        {
          Algorithem: "Selection Sort",
          Best: "Ω(n^2)",
          Avrage: "Θ(n^2)",
          Worst: "O(n^2)",
        },
        {
          Algorithem: "Heap Sort",
          Best: "Ω(n log(n))",
          Avrage: "Θ(n log(n))",
          Worst: "O(n log(n))",
        },
        {
          Algorithem: "Radix Sort",
          Best: "Ω(nk)",
          Avrage: "Θ(nk)",
          Worst: "O(nk)",
        },
        {
          Algorithem: "Bucket Sort",
          Best: "Ω(n+k)",
          Avrage: "Θ(n+k)",
          Worst: "O(n^2)",
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

