<template>
  <div class="bg relative flex" :style="{ height: isgood }">
    <img
      src="../assets/choose/bg.jpg"
      class="bg-img"
      :style="{ height: isgood }"
    />
    <img src="../assets/choose/left-2.png" class="absolute left2" />
    <img
      src="../assets/choose/left.png"
      class="absolute left"
      @click="open(0)"
    />
    <img
      src="../assets/choose/right.png"
      class="absolute right"
      @click="open(1)"
    />
    <img src="../assets/choose/right-2.png" class="absolute right2" />
    <img src="../assets/choose/1.png" class="absolute left3" @click="open(0)" />
    <img
      src="../assets/choose/2.png"
      class="absolute right3"
      @click="open(1)"
    />

    <img src="../assets/choose/wz.png" class="title" />
    <div class="height">
      <img src="../assets/choose/3.png" class="middle d" />
      <img src="../assets/choose/4.png" class="d" />
    </div>
    <div class="relative flex-middle width">
      <img src="../assets/choose/di.png" class="bg-img" />
      <div class="tiao cc relative">
        <img src="../assets/choose/5.png" class="bg-img" />
        xxx人支持琉璃
      </div>
      <div class="tiao dd relative">
        <img src="../assets/choose/6.png" class="bg-img" />xxx人支持白桦
      </div>
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
  methods: {
    open(index) {
      this.$emit("open", index);
    },
  },
};
</script>
<style scoped>
.width {
  width: 7.21rem;
  min-height: 0.54rem;
  text-align: center;
}
.left2 {
  left: 0;
  top: 0.7rem;
  width: 3.68rem;
}

.cc {
  width: 3.45rem;
}
.d {
  width: 2.33rem;
}
.dd {
  width: 3.45rem;
}
.tiao {
  height: 0.3rem;
  font-size: 0.26rem;
  font-family: HarmonyOS_Sans_SC;
  font-weight: 400;
  line-height: 0.3rem;
  color: #1b1c20;
}
.height {
  height: 1.02rem;
  margin-bottom: 0.4rem;
}
.left {
  left: 0;
  top: 3.44rem;
  width: 3.63rem;
  z-index: 1;
}
.right {
  right: 0;
  top: 3.44rem;
  width: 3.63rem;
  z-index: 1;
}
.right2 {
  /* top: 0.5rem; */
  right: 0;
  width: 6.25rem;
}
.title {
  margin-top: 8rem;
  margin-bottom: 0.43rem;
  width: 7.5rem;
}
.left3 {
  left: 0;
  top: 6.5rem;
  width: 3.27rem;
  z-index: 2;
}

.right3 {
  right: 0;
  top: 6.5rem;
  width: 3.27rem;
  z-index: 2;
}

.middle {
  margin-right: 1.29rem;
}
</style>