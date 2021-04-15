<template>
  <section>
    <button @click="exit()">X</button>
    <h2>CODE</h2>
    <code>
        i ← 1 <br>
        while i length(A) <br>
        j ← i <br>
            while j > 0 and A[j-1] > A[j]<br>
                swap A[j] and A[j-1]<br>
                j ← j - 1<br>
            end while<br>
            i ← i + 1<br>
        end while<br>
    </code>
  </section>
</template>

<script>
export default {
  name: "Code",
  methods: {
      exit() {
        this.$parent.codeDisplay = false;
      }
  }
};
</script>


<style scoped>
button {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  position: relative;
  left: 2rem;
  background-color: #222222;
  border-style: solid;
  border-color: white;
  color: white;
  border-width: 1px;
}

section {
  background-color: #222222;
  margin: 0;
  padding: 1rem 3rem;
  display: flex;
  flex-direction: column;
  color: white;
}

h2 {
  color: white;
  letter-spacing: 0.5rem;
}
</style>



