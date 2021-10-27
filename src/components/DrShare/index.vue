<template>
  <div class="fix flex-middle">
    <div class="bf relative flex">
      <img src="../../assets/share/k.png" class="bf absolute" />
      <img
        src="../../assets/share/x.png"
        class="close absolute"
        @click="close"
      />
      <img src="../../assets/share/title.png" class="title" />
      <div class="flex-between d">
        <img
          v-for="(item, index) in list"
          :key="index"
          class="img"
          :src="item"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        require("../../assets/share/1.png"),
        require("../../assets/share/2.png"),
        require("../../assets/share/3.png"),
        require("../../assets/share/4.png"),
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
  width: calc(0.96rem * 2 + 2.67rem);
}
.img {
  width: 1rem;
}
.bf {
  width: 5.9rem;
  height: 3.1rem;
  z-index: -1;
}

.title {
  width: 4.86rem;
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