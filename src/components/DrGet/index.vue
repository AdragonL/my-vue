<template>
  <div class="fix flex-middle">
    <div class="relative dd flex">
      <img src="../../assets/get/kuang.png" class="absolute bg-img" />
      <img
        src="../../assets/get/close.png"
        class="absolute close"
        @click="close"
      />
      <img src="../../assets/get/title.png" class="title" />
      <img src="../../assets/get/wz1.png" class="wz" />
      <div class="wd">{{ aaa }}</div>
      <textarea id="input"></textarea>
      <div @click="goo" class="copy">点击复制</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      aaa: "xxxxxxxxx",
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    goo() {
      var input = document.getElementById("input");
      input.value = this.name; // 修改文本框的内容
      input.select(); // 选中文本
      document.execCommand("copy"); // 执行浏览器复制命令
      alert("复制成功");
    },
  },
};
</script>
<style scoped>
.fix {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 3000;
}

.kk {
  width: 100%;
}
#input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -10;
}

.copy {
  font-size: 0.25rem;
  font-family: HarmonyOS_Sans_SC;
  font-weight: 400;
  text-decoration: underline;
  color: #ffffff;
}
.dd {
  width: 5.9rem;
  height: 4.66rem;
}

.close {
  right: 0.2rem;
  top: 0.2rem;
}
.title {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 5.5rem;
}
.wd {
  font-size: 0.56rem;
  font-family: HarmonyOS_Sans_SC;
  font-weight: 400;
  color: #ffc000;
  text-align: center;
  margin-bottom: 0.5rem;
}
.wz {
  width: 3.81rem;
  margin-bottom: 0.5rem;
}
</style>