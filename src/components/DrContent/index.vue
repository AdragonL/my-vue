<template>
  <div class="fix" ref="bscrolld">
    <div class="relative f flex">
      <img :src="list[open][active].bg" class="absolute bg" />
      <div class="flex-between margin113">
        <div>
          <img :src="list[open][active].name" class="name" />
          <div class="zuo relative">{{ list[open][active].zuo }}</div>
          <div class="cv relative flex-middle">
            <div class="cv-n">{{ list[open][active].cv }}</div>
            <img :src="list[open][active].play" class="play" />
          </div>
        </div>
        <img
          :src="list[open][active].close"
          class="close relative"
          @click="close"
        />
      </div>
      <img :src="list[open][active].renwu" class="renwu absolute" />

      <div class="relative try flex">
        <div class="flex-middle k">
          <img :src="list[open][active].left" class="c" @click="active = 1" />
          <img
            :src="list[open][active].right"
            class="button"
            @click="active = 2"
          />
        </div>
        <div class="flex-middle margin125">
          <img :src="list[open][active].divi" class="divi" />
          <div class="talk">{{ list[open][active].talk }}</div>
        </div>
        <img :src="list[open][active].bg2" class="bg2 absolute" />
        <img :src="list[open][active].show" class="show" />
        <div class="video"></div>
        <div class="relative flex-middle last">
          <img :src="list[open][active].back" class="back absolute" />
          <div
            v-for="(item, index) in list[open][active].j"
            :key="index"
            class="flex-middle"
            @click="good = index"
          >
            <img :src="item.img" class="item" v-if="good !== index" />
            <img :src="item.act" class="item" v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    open: {
      handler(val) {
        console.warn(val, "open");
      },
      immediate: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  mounted() {
    let popContent = this.$refs.bscrolld;
    popContent.addEventListener("touchmove", (e) => e.stopPropagation(), false);
  },
  data() {
    return {
      active: 1,
      good: 0,
      list: [
        {
          1: {
            bg: require("../../assets/good/琉璃基础/bg1.jpg"),
            bg2: require("../../assets/good/琉璃基础/bg2.png"),
            name: require("../../assets/good/琉璃基础/name.png"),
            zuo: "很酷的一句座右铭",
            cv: "CV: XXX",
            back: require("../../assets/good/琉璃基础/back.png"),
            renwu: require("../../assets/good/琉璃基础/r.png"),
            play: require("../../assets/good/琉璃基础/play.png"),
            close: require("../../assets/good/琉璃基础/x.png"),
            talk: "介绍一下这个美女是谁这个装甲形态多牛逼",
            left: require("../../assets/good/琉璃基础/wq.png"),
            right: require("../../assets/good/琉璃基础/e.png"),
            show: require("../../assets/good/琉璃基础/show.png"),
            divi: require("../../assets/good/琉璃基础/divi.png"),
            j: [
              {
                img: require("../../assets/good/琉璃基础/1.png"),
                act: require("../../assets/good/琉璃基础/1q.png"),
              },
              {
                img: require("../../assets/good/琉璃基础/2.png"),
                act: require("../../assets/good/琉璃基础/2q.png"),
              },
              {
                img: require("../../assets/good/琉璃基础/3.png"),
                act: require("../../assets/good/琉璃基础/3q.png"),
              },
              {
                img: require("../../assets/good/琉璃基础/4.png"),
                act: require("../../assets/good/琉璃基础/4q.png"),
              },
            ],
          },
          2: {
            bg: require("../../assets/good/琉璃装甲/bg1.jpg"),
            bg2: require("../../assets/good/琉璃装甲/bg2.png"),
            name: require("../../assets/good/琉璃装甲/name.png"),
            zuo: "很酷的一句座右铭",
            cv: "CV: XXX",
            back: require("../../assets/good/琉璃装甲/back.png"),
            renwu: require("../../assets/good/琉璃装甲/r.png"),
            play: require("../../assets/good/琉璃装甲/play.png"),
            close: require("../../assets/good/琉璃装甲/x.png"),
            talk: "介绍一下这个美女是谁这个装甲形态多牛逼",
            left: require("../../assets/good/琉璃装甲/wq.png"),
            right: require("../../assets/good/琉璃装甲/e.png"),
            show: require("../../assets/good/琉璃装甲/show.png"),
            divi: require("../../assets/good/琉璃装甲/divi.png"),
            j: [
              {
                img: require("../../assets/good/琉璃装甲/1.png"),
                act: require("../../assets/good/琉璃装甲/1q.png"),
              },
              {
                img: require("../../assets/good/琉璃装甲/2.png"),
                act: require("../../assets/good/琉璃装甲/2q.png"),
              },
              {
                img: require("../../assets/good/琉璃装甲/3.png"),
                act: require("../../assets/good/琉璃装甲/3q.png"),
              },
              {
                img: require("../../assets/good/琉璃装甲/4.png"),
                act: require("../../assets/good/琉璃装甲/4q.png"),
              },
            ],
          },
        },
        {
          1: {
            bg: require("../../assets/good/白桦基础/bg1.jpg"),
            bg2: require("../../assets/good/白桦基础/bg2.png"),
            name: require("../../assets/good/白桦基础/name.png"),
            zuo: "很酷的一句座右铭",
            cv: "CV: XXX",
            back: require("../../assets/good/白桦基础/back.png"),
            renwu: require("../../assets/good/白桦基础/r.png"),
            play: require("../../assets/good/白桦基础/play.png"),
            close: require("../../assets/good/白桦基础/x.png"),
            talk: "介绍一下这个美女是谁这个装甲形态多牛逼",
            left: require("../../assets/good/白桦基础/wq.png"),
            right: require("../../assets/good/白桦基础/e.png"),
            show: require("../../assets/good/白桦基础/show.png"),
            divi: require("../../assets/good/白桦基础/divi.png"),
            j: [
              {
                img: require("../../assets/good/白桦基础/1.png"),
                act: require("../../assets/good/白桦基础/1q.png"),
              },
              {
                img: require("../../assets/good/白桦基础/2.png"),
                act: require("../../assets/good/白桦基础/2q.png"),
              },
              {
                img: require("../../assets/good/白桦基础/3.png"),
                act: require("../../assets/good/白桦基础/3q.png"),
              },
              {
                img: require("../../assets/good/白桦基础/4.png"),
                act: require("../../assets/good/白桦基础/4q.png"),
              },
            ],
          },
          2: {
            bg: require("../../assets/good/白桦装甲/bg1.png"),
            bg2: require("../../assets/good/白桦装甲/bg2.png"),
            name: require("../../assets/good/白桦装甲/name.png"),
            zuo: "很酷的一句座右铭",
            cv: "CV: XXX",
            back: require("../../assets/good/白桦装甲/back.png"),
            renwu: require("../../assets/good/白桦装甲/r.png"),
            play: require("../../assets/good/白桦装甲/play.png"),
            close: require("../../assets/good/白桦装甲/x.png"),
            talk: "介绍一下这个美女是谁这个装甲形态多牛逼",
            left: require("../../assets/good/白桦装甲/wq.png"),
            right: require("../../assets/good/白桦装甲/e.png"),
            show: require("../../assets/good/白桦装甲/show.png"),
            divi: require("../../assets/good/白桦装甲/divi.png"),
            j: [
              {
                img: require("../../assets/good/白桦装甲/1.png"),
                act: require("../../assets/good/白桦装甲/1q.png"),
              },
              {
                img: require("../../assets/good/白桦装甲/2.png"),
                act: require("../../assets/good/白桦装甲/2q.png"),
              },
              {
                img: require("../../assets/good/白桦装甲/3.png"),
                act: require("../../assets/good/白桦装甲/3q.png"),
              },
              {
                img: require("../../assets/good/白桦装甲/4.png"),
                act: require("../../assets/good/白桦装甲/4q.png"),
              },
            ],
          },
        },
      ],
    };
  },
};
</script>
<style scoped>
.f {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
}
.margin113 {
  margin-top: 1.13rem;
  width: calc(100vw - 0.44rem);
  margin-bottom: 6.28rem;
}

.k {
  height: 0.87rem;
  margin-bottom: 0.53rem;
}
.margin125 {
  margin-bottom: 1.25rem;
}

.last {
  width: 7.01rem;
  height: 1.82rem;
}
.try {
  width: 100vw;
  /* height: ; */
  height: calc(8.96rem + 2.42rem);
}
.name {
  width: 2.78rem;
}
.bg {
  z-index: -1;
  width: 100vw;
}
.back {
  width: 7.01rem;
  left: 0;
  top: 0;
  z-index: -1;
}
.play {
  width: 0.67rem;
}

.item {
  width: 1.54rem;
}
.show {
  width: 1.97rem;
  margin-bottom: 0.45rem;
}
.cv-n {
  margin-right: 0.5rem;
}
.video {
  width: 7.01rem;
  height: 3.95rem;
  margin-bottom: 0.28rem;
}
.fix {
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 2999;
  overflow-y: scroll;
  overflow-x: hidden;
}

.fix::-webkit-scrollbar {
  display: none;
}
.bg2 {
  width: 100vw;
  left: 0;
  top: 0.4rem;
  z-index: -1;
}
.renwu {
  top: 1.3rem;
  width: 100vw;
  z-index: -1;
}
.talk {
  font-size: 0.3rem;
  font-family: FZLanTingHei-R-GBK;
  font-weight: 400;
  color: #ffffff;
}
.divi {
  height: 0.78rem;
  margin-right: 0.15rem;
}
.c {
  margin-right: 0.58rem;
  width: 2.79rem;
}
.button {
  width: 2.8rem;
}
.close {
  width: 0.76rem;
  bottom: 0.85rem;
}
.zuo {
  font-size: 0.26rem;
  font-family: TaipeiSansTCBeta;
  font-weight: bold;
  color: rgb(192, 174, 112);
  left: 0.5rem;
  margin-bottom: 0.12rem;
}

.cv {
  font-size: 0.24rem;
  font-family: FZLanTingHei-R-GBK;
  font-weight: 400;
  color: #ffffff;
  left: 0.5rem;
  justify-content: flex-start;
}
</style>