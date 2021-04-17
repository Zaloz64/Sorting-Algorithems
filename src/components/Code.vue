<template>
  <section>
    <button @click="exit()">X</button>
    <h2>CODE</h2>
    <h3>You have not chosen an sorting algorithem!</h3>
  </section>
</template>

<script>
export default {
  name: "Code",
  methods: {
    exit() {
      this.$parent.codeDisplay = false;
    },
    chosen(name) {
      console.log(name)
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



