<template>
  <div class="fix flex-middle">
    <div class="bf relative flex">
      <img src="../../assets/more/kuang.png" class="bf absolute" />
      <img src="../../assets/more/x.png" class="close absolute" @click="close" />
      <img src="../../assets/more/biaoti.png" class="title"  />
      <div class="flex-betwwen d">
        <img
          v-for="(item, index) in list"
          :key="index"
          class="img"
          :src="item"
        />
      </div>
      <div class="flex-middle k">
        <img src="../../assets/more/5.png" class="button c" />
        <img src="../../assets/more/6.png" class="button" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        require("../../assets/more/1.png"),
        require("../../assets/more/2.png"),
        require("../../assets/more/3.png"),
        require("../../assets/more/4.png"),
      ],
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.fix {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3000;
}

.close {
  width: 0.42rem;
  right: 0.1rem;
  top: 0.1rem;
}
.d {
  /* margin-bottom: 0.38rem; */
}
.img {
  width: 1.4rem;
}
.bf {
  width: 5.9rem;
  height: 4.66rem;
  z-index: -1;
}

.title {
  width: 5.5rem;
  margin-top: 0.57rem;
  margin-bottom: 0.37rem;
}
.c {
  margin-right: 0.25rem;
}
.button {
  width: 2.55rem;
  height: 0.75rem;
}

.k {
  height: 0.75rem;
}
</style>