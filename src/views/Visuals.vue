<template>
  <NavBar/>
  <main>
    <div id="container">
      <h2 v-if="isShowing">
        Choose a sortingalgorithem you would like to see!
      </h2>
      <HelloWorld ref="myChild" v-else />
    </div>

    <div class="controlls">
      <button>
        <img src="img/play-button.png" alt="Play" @click="showAlgotithem()" />
      </button>
      <button>&lt;&gt;</button>
      <button @click="settingdisplay = !settingdisplay">
        <img src="img/setting-line.png" alt="Setting" />
      </button>
      <button>?</button>
    </div>
  </main>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from '../components/NavBar.vue';

export default {
  components: {
    HelloWorld,
    NavBar,
  },
  data() {
      return {
          isShowing: true,
      }
  }
  
};
</script>


