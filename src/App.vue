<template>
  <div id="app">
    <dr-header :page="page" @go="ccc" />
    <transition-group name="fade">
      <dr-content v-if="open !== -1" :open="open" @close="close" key="1" />
      <dr-get v-if="get" @close="get = false" key="2" />
      <dr-login @close="login = false" v-if="login" key="3" />
      <dr-more v-if="showMore" @close="showMore = false" key="4" />
      <dr-share v-if="showShare" @close="showShare = false" key="5" />
    </transition-group>

    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section"><home :isgood="isgood" @vv="get = true" /></div>
      <div class="section"><choose :isgood="isgood" @open="change" /></div>
      <div class="section"><content-1 :isgood="isgood" /></div>
      <div class="section"><talk :isgood="isgood" /></div>
    </full-page>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Home from "./views/home.vue";
import Choose from "./views/choose.vue";
import Content1 from "./views/content.vue";
import Talk from "./views/talk.vue";
import DrHeader from "./components/DrHeader/index.vue";
import DrContent from "./components/DrContent/index.vue";
import DrGet from "./components/DrGet/index.vue";
import DrLogin from "./components/DrLogin/index.vue";
import DrMore from "./components/DrMore/index.vue";
import DrShare from "./components/DrShare/index.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    Home,
    Choose,
    Content1,
    Talk,
    DrHeader,
    DrContent,
    DrGet,
    DrLogin,
    DrMore,
    DrShare,
  },
  data() {
    return {
      login: false,
      get: false,
      open: -1,
      active: -1,
      showMore: false,
      showShare: false,
      options: {
        scrollOverflow: true,
        licenseKey: "YOUR_KEY_HEERE",
        menu: "#menu",
        showjob: false,
        onLeave: this.onLeave,
        afterLoad: this.afterLoad,
        anchors: ["home", "choose", "content", "talk"],
        // sectionsColor: ["#41b883", "#ff5f45", "#0798ec"],
      },
      isgood: "100vh",
      page: "home",
    };
  },
  mounted() {
    if (this.isSafari()) {
      this.safariHacks();
    }
  },
  methods: {
    change(index) {
      this.open = index;
    },
    close() {
      this.open = -1;
    },
    ccc(index) {
      if (index >= 1 && index <= 3) {
        this.$refs.fullpage.api.moveTo(index);
      } else if (index === 4) {
        this.showMore = true;
      } else if (index === 0) {
        this.showShare = true;
      }
    },
    //判断浏览器
    isSafari() {
      var issafariBrowser =
        /Safari/.test(navigator.userAgent) &&
        !/Chrome/.test(navigator.userAgent);
      // alert(issafariBrowser);
      return issafariBrowser;
    },
    safariHacks() {
      const convertStyle = () => {
        const height = window.innerHeight;
        Array.from(document.getElementsByClassName("section")).forEach(
          (element) => {
            element.style.height = `${height}px`;
          }
        );
        this.isgood = height + "px";
        console;
      };
      window.addEventListener("resize", convertStyle);
      window.addEventListener("DOMContentLoaded", convertStyle);
    },
    onLeave(index, nextIndex) {
      // console.warn(index, nextIndex);
      this.page = nextIndex.anchor;
      this.active = nextIndex.index;
      // console.warn(index, nextIndex, direction, "kk");
      // this.setActive(nextIndex.index)
      // this.setActive(nextIndex.index)
    },
  },
};
</script>

<style>
</style>
