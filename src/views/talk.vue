<template>
  <div class="bg relative flex" :style="{ height: isgood }">
    <img
      src="../assets/talk/bg.jpg"
      class="bg-img"
      :style="{ height: isgood }"
    />
    <div class="cc relative flex">
      <img src="../assets/talk/title.png" class="title absolute" />
      <img src="../assets/talk/zhan.png" class="bg-img" />
      <div class="flex-between height">
        <img src="../assets/talk/1.png" />
        <img src="../assets/talk/say.png" />
      </div>
      <div class="ccd" ref="bscroll">
        <div
          v-for="(item, index) in list"
          :key="index"
          class="relative good flex"
        >
          <img src="../assets/talk/2.png" class="absolute margin10 good" />
          <div class="flex-between s f">
            <div class="flex-between">
              <img :src="item.img" class="magrin16 imgWidth" />
              <div class="name">{{ item.name }}</div>
            </div>

            <div class="time">{{ item.time }}</div>
          </div>
          <div class="flex-between s">
            <img src="../assets/talk/divider.png" class="divi" />
            <div class="content">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
      <img src="../assets/talk/more.png" class="more" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isgood: {
      type: String,
      default: "100vh",
    },
  },
  mounted() {
    let popContent = this.$refs.bscroll;
    popContent.addEventListener("touchmove", (e) => e.stopPropagation(), false);
  },
  data() {
    return {
      list: [
        {
          name: "一个很帅的用户名",
          img: require("../assets/talk/5.png"),
          time: "XnianXyueXri",
          content:
            "牛的牛的牛的！ 真不错真不错真不错真不错！ 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿！！！",
        },

        {
          name: "一个很帅的用户名",
          img: require("../assets/talk/5.png"),
          time: "XnianXyueXri",
          content:
            "牛的牛的牛的！ 真不错真不错真不错真不错！ 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿！！！",
        },
        {
          name: "一个很帅的用户名",
          img: require("../assets/talk/5.png"),
          time: "XnianXyueXri",
          content:
            "牛的牛的牛的！ 真不错真不错真不错真不错！ 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿！！！",
        },
        {
          name: "一个很帅的用户名",
          img: require("../assets/talk/5.png"),
          time: "XnianXyueXri",
          content:
            "牛的牛的牛的！ 真不错真不错真不错真不错！ 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿！！！",
        },
        {
          name: "一个很帅的用户名",
          img: require("../assets/talk/5.png"),
          time: "XnianXyueXri",
          content:
            "牛的牛的牛的！ 真不错真不错真不错真不错！ 嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿嘿！！！",
        },
      ],
    };
  },
};
</script>
<style scoped>
.cc {
  width: 100vw;
  height: 11.27rem;
  margin-top: 2rem;
}
.f {
  margin-top: 0.19rem;
  margin-bottom: 0.3rem;
}

.magrin16 {
  margin-right: 0.16rem;
}

.imgWidth {
  width: 0.64rem;
}
.ccd {
  margin-top: 0.18rem;
  height: 8.92rem;
  margin-bottom: 0.15rem;
  overflow-x: hidden;
  overflow-y: scroll;
}

.more {
  height: 0.41rem;
}
.ccd::-webkit-scrollbar {
  display: none;
}
.divi {
  height: 0.61rem;
  margin-right: 0.13rem;
}
.s {
  width: calc(6.13rem - 0.42rem);
}
.name {
  font-size: 0.22rem;
  font-family: HarmonyOS_Sans_SC_Bold;
  font-weight: 400;
  color: #434343;
}
.content {
  font-size: 0.16rem;
  font-family: HarmonyOS_Sans_SC_Light;
  font-weight: 400;
  color: #434343;
  height: 0.61rem;
  overflow-x: hidden;
  overflow-y: scroll;
}

.content::-webkit-scrollbar {
  display: none;
}
.time {
  font-size: 0.15rem;
  font-family: HarmonyOS_Sans_SC_Thin;
  font-weight: 400;
  color: #434343;
}
.title {
  left: 0.56rem;
  top: -0.4rem;
  height: 0.53rem;
}

.height {
  margin-top: 0.51rem;
  height: 0.78rem;
  width: 6.13rem;
}

.margin10 {
  margin-bottom: 0.1rem;
}

.good {
  width: 6.13rem;
  height: 2.13rem;
  z-index: -1;
  margin-bottom: 0.1rem;
}
</style>