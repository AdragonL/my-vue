<template>
  <div class="fixed">
    <div class="header flex-middle relative">
      <img src="../../assets/base/back.png" class="bg-img" />
      <img src="../../assets/base/icon.png" class="img magrin-right" />
      <div class="flex-column-between a">
        <div class="first-title magrin">雏蜂：深渊天使</div>
        <div class="second-title">冲破深渊 重塑未来</div>
      </div>
      <img src="../../assets/base/guanwang.png" class="go b" />
      <img src="../../assets/base/load.png" class="go c" />
      <img src="../../assets/base/open.png" class="open" @click="show = true" />
    </div>
    <div class="navbar flex relative" v-if="show">
      <img
        src="../../assets/navbar/ba.png"
        class="absolute bf"
        @click="show = false"
      />
      <div
        v-for="(item, index) in list"
        :key="index"
        @click="go(index)"
        class="relative item"
      >
        <img
          v-if="page === item.name"
          src="../../assets/navbar/go.png"
          class="absolute god"
        />
        <img :src="item.img" v-if="page !== item.name" class="d absolute" />
        <img :src="item.act" v-else class="e absolute" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    page: {
      type: String,
      default: "",
    },
  },
  methods: {
    go(index) {
    //   switch (index) {
    //     case 0:
    //       this.$emit("go", 0);
    //       break;
    //     case 1:
    //       this.$emit("go", 1);
    //       break;
    //     case 2:
    //       this.$emit("go", 2);
    //       break;
    //     case 3:
    //       this.$emit("go", 3);
    //       break;

    //     case 4:
    //       this.$emit("go", 4);
    //       break;
    //   }
        this.$emit("go",index);
    },
  },
  data() {
    return {
      show: false,
      list: [
        {
          img: require("../../assets/navbar/1.png"),
          act: require("../../assets/navbar/1q.png"),
        },
        {
          img: require("../../assets/navbar/2.png"),
          act: require("../../assets/navbar/2q.png"),
          name: "home",
        },
        {
          img: require("../../assets/navbar/3.png"),
          act: require("../../assets/navbar/3q.png"),
          name: "choose",
        },
        {
          img: require("../../assets/navbar/4.png"),
          act: require("../../assets/navbar/4q.png"),
          name: "content",
        },
        {
          img: require("../../assets/navbar/5.png"),
          act: require("../../assets/navbar/5q.png"),
        },
      ],
    };
  },
};
</script>
<style scoped>
.header {
  width: 100vw;
  height: 1.13rem;
}
.god {
  left: -0.3rem;
  width: 0.28rem;
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3000;
}

.bf {
  z-index: -1;
  width: 100vw;
}

.d {
  height: 0.51rem;
}
.e {
  height: 0.51rem;
}
.item {
  height: 0.51rem;
  width: 2rem;
  margin-top: 0.29rem;
}

.a {
  margin-right: 0.29rem;
}
.c {
  margin-right: 0.38rem;
}
.b {
  margin-right: 0.18rem;
}
.img {
  width: 0.83rem;
  height: auto;
}
.magrin-right {
  margin-right: 0.17rem;
}
.first-title {
  height: 0.26rem;
  font-size: 0.27rem;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  line-height: 0.23rem;
}
.magrin {
  margin-bottom: 0.13rem;
}
.second-title {
  height: 0.19rem;
  font-size: 0.19rem;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 0.23rem;
}

.go {
  width: 1.43rem;
  height: auto;
}

.open {
  width: 0.49rem;
  height: auto;
}
</style>