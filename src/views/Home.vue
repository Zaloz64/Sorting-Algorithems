<template>
    <div class="rubrik">
        <h1>ALGORITHEMS</h1>
        <p>Press start to see how diffrent algorithems work!</p>      
    </div>
    
    <section>
        <div id="startInfo">
            <p>This website shows an visual representation of how diffrent sorting algorithems work and how they compute there awnser in real time. The sorting algorithems included are the most commonly known plus some extra fun ones. Press start to see how they work!</p>
            <router-link to="/visul">Start</router-link>
        </div>
        <router-view />

      <div id="animationContainer">
          <img src="@/assets/frontpage.jpg" alt="">
      </div>
    </section>

    <footer>
        <p>Made by Zoé:TechAndMe</p>
    </footer>
</template>

<script>

export default {
  name: "Home",

};

</script>

<style scoped>
    img {
        height: 100%;
        max-width: 100%;
        object-fit: cover;
    }

</style>


