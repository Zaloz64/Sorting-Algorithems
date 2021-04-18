<template>
  <NavBar ref="NavBar" />
  <main>
    <div id="container">
      <h2 v-if="isShowing">
        Choose a sortingalgorithem you would like to see!
      </h2>
      <HelloWorld ref="myChild" v-else />
      <div id="moreInfo">
        <Settings v-show="settingdisplay"/>
        <Code v-show="codeDisplay"/>
        <Info v-show="infoDisplay"/>
      </div>
    </div>



    <div class="controlls">
      <button>
        <img
          src="img/play-button.png"
          alt="Play"
          @click="this.$refs.NavBar.showAlgotithem()"
        />
      </button>
      <button ref="code" @click="closeSettings(); selectedAlgotithem(); codeDisplay = !codeDisplay">&lt;&gt;</button>
      <button @click="closeSettings(); settingdisplay = !settingdisplay">
        <img src="img/setting-line.png" alt="Setting" />
      </button>
      <button @click="closeSettings();  infoDisplay = !infoDisplay">?</button>
    </div>
  </main>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import NavBar from "../components/NavBar.vue";
import Settings from '../components/Settings.vue';
import Code from '../components/Code.vue';
import Info from '../components/ButtonOptions/info.vue';

export default {
  components: {
    HelloWorld,
    NavBar,
    Settings,
    Code,
    Info,
  },
  data() {
    return {
      isShowing: true,
      settingdisplay: false,
      codeDisplay: false,
      infoDisplay: false,
      amountStaplar: 10,
      sortingSpeed: 1,
    };
  },
  methods: {
    closeSettings() {
      this.settingdisplay = false;
      this.codeDisplay = false;
      this.infoDisplay = false;
    },
    selectedAlgotithem() {
      console.log(this.$refs.NavBar.selected)
    }
  }
};
</script>

