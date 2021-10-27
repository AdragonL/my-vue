<template>
  <div class="bg relative flex" :style="{ height: isgood }">
    <img src="" class="bg-img" :style="{ height: isgood }" />

    <img src="../assets/home/logo.png" class="absolute img" />
    <div class="relative go">
      <img src="../assets/home/1.png" class="title" />
      <img src="../assets/home/2.png" class="absolute video" />
    </div>
    <div class="flex-middle width relative">
      <img src="../assets/home/di.png" class="bg-img di" />
      <img src="../assets/home/3.png" class="a relative" />
      <div class="flex-column-between b">
        <img src="../assets/home/4.png" class="c f" />
        <img src="../assets/home/5.png" class="f" />
      </div>
      <img src="../assets/home/6.png" class="pc" />
    </div>
    <div class="flex-middle width relative">
      <img src="../assets/home/di.png" class="bg-img di" />
      <div class="relative goo">
        <img src="../assets/home/7.png" class="head absolute" />
        <img src="../assets/home/8.png" class="ff absolute" />
      </div>
      <div class="flex-column-between b">
        <div class="item">
          <img src="../assets/home/9.png" class="j" />
          <img src="../assets/home/10.png" class="j" />
          <img src="../assets/home/11.png" class="j" />
          <img src="../assets/home/12.png" class="j" />
        </div>
        <img src="../assets/home/13.png" class="load"  @click="go"/>
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
  methods:{
      go(){
          this.$emit("vv")
      }
  }
};
</script>
<style scoped>
.img {
  right: 0.29rem;
  top: 1.28rem;
  width: 2.07rem;
  height: auto;
}
.goo {
  width: 2.73rem;
  height: 1.42rem;
  margin-right: 0.16rem;
}
.load {
  width: 2.94rem;
}
.j {
  width: 0.68rem;
}
.pc {
  width: 1.44rem;
}
.head {
  left: -0.15rem;
  top: -0.15rem;
  width: 1.71rem;
}
.f {
  width: 2.22rem;
}
.item {
  height: 1.04rem;
  margin-bottom: 0.11rem;
}
.ff {
  left: 0;
  top: 0;
  z-index: -1;
  width: 2.73rem;
}

.video {
  position: absolute;
  right: 0.7rem;
  top: 0;
  animation: off 2s linear infinite;
}
.width {
  width: 6.29rem;
  height: 1.82rem;
  margin-bottom: 0.09rem;
}
.a {
  width: 2.06rem;
  top: -0.02rem;
  margin-right: 0.11rem;
}
.b {
  margin-right: 0.1rem;
}

.c {
  margin-bottom: 12px;
}
.title {
  width: 6.59rem;
  height: auto;
}

.di {
  width: 100% !important;
}
@keyframes off {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
.go {
  margin-top: 5.59rem;
}
</style>