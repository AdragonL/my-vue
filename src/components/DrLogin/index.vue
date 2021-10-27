<template>
  <div class="fix flex-middle">
    <div class="login">
      <img src="../../assets/login/close.png" class="close" @click="close" />
      <!-- <img src="../../assets/login/bg.png" class="bg"/> -->
      <img src="../../assets/login/title.png" class="title" />
      <div class="choose">
        <div
          v-for="(item, index) in list"
          :key="item"
          @click="change(index)"
          class="item"
        >
          {{ item }}
        </div>
        <div class="xia" :style="{ left: goodleft + 'rem' }"></div>
      </div>
      <img src="../../assets/login/divider.png" class="login-di" />
      <!-- <div class=""> -->
      <input v-model="phone" placeholder="输入手机号码" class="input phone" />
      <div class="rela a">
        <input v-model="check" placeholder="输入验证码" class="input check" />
        <img
          src="../../assets/login/button.png"
          class="c-button"
          @click="checkd"
        />
      </div>
      <div class="phone rela text" id="slider">
        {{title}}
        <img
          ref="img"
          id="btn"
          :style="{ left: oLeft + 'px' }"
          src="../../assets/login/tuo.png"
          class="hua move"
          @mousedown="mousedown($event)"
        />
      </div>
      <div class="button"></div>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: null,
      check: null,
      left: 0,
      x: 0,
      title:'请拖动滑块认证',
      flag: 1,
      oW: null,
      oLeft: null,
      cha: 517 - 120.65,
      go: false,
      list: ["IOS", "Andriod"],
      goodleft: 0,
      isMobile: /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
    };
  },
  mounted() {
    var oBtn = document.getElementById("btn");
    // var oW, oLeft;
    var oSlider = document.getElementById("slider");
    // var oTrack = document.getElementById("track");
    // var oIcon = document.getElementById("icon");
    // var oSpinner = document.getElementById("spinner");
    // var bgGreen = document.getElementById("bg-green");
    this.btn = 1;

    oBtn.addEventListener(
      "touchstart",
      (e) => {
        if (this.flag == 1) {
          // console.log(e);
          console.log(oBtn.offsetLeft);
          var touches = e.touches[0];
          this.oW = touches.clientX - oBtn.offsetLeft;
          //   oBtn.className = "button";
          //   oTrack.className = "track";
        }
      },
      false
    );

    oBtn.addEventListener(
      "touchmove",
      (e) => {
        if (this.flag == 1) {
          var touches = e.touches[0];
          // console.log(touches)
          this.oLeft = touches.clientX - this.oW;
          console.warn(this.oLeft);
          if (this.oLeft < 0) {
            this.oLeft = 0;
          } else if (this.oLeft > oSlider.clientWidth - oBtn.offsetWidth) {
            this.oLeft = oSlider.clientWidth - oBtn.offsetWidth;
          }
          oBtn.style.left = this.oLeft + "px";
          //   oTrack.style.width = oLeft + "px";
        }
      },
      false
    );

    oBtn.addEventListener(
      "touchend",
      () => {
        if (this.oLeft >= oSlider.clientWidth - oBtn.clientWidth) {
          oBtn.style.left = oSlider.clientWidth - oBtn.offsetWidth;
          //   oTrack.style.width =
          //     document.documentElement.clientWidth - oBtn.offsetWidth - 30;
          //   oIcon.style.display = "none";
          //   oSpinner.style.display = "block";
          //   bgGreen.innerHTML = "验证成功";
          this.title = "验证成功"
          this.flag = 0;
        } else {
          oBtn.style.left = 0;
          //   oTrack.style.width = 0;
        }
        // oBtn.className = "button-on";
        // oTrack.className = "track-on";
      },
      false
    );
  },
  methods: {
    checkd() {
      if (this.isMobile.test(this.phone)) {
        return;
      }
    },
    change(index) {
      console.warn(index, typeof index);
      if (index == 0) {
        this.goodleft = 0;
      } else {
        this.goodleft = 1.8;
      }
    },
    close() {
      this.$emit("close");
    },
    mousedown(e) {
      //   console.warn(e.clientX);
      e.preventDefault && e.preventDefault();
      this.x = e.clientX;
      //   console.warn(this.x, "x");
      this.go = true;
    },
    mouseup() {
      let cha = 517 - 120.65;
      //   console.warn(e.clientX);
      if (this.left === cha) {
        //成功
        setTimeout(() => {
          alert("成功");
        }, 1000);
      }
      this.left = 0;
      this.go = false;
    },
    mousemove(e) {
      let cha = 517 - 120.65;
      let a = e.clientX - this.x;
      //   console.warn(a)
      if (this.go) {
        // console.warn(a);
        if (a < 0) {
          this.left = 0;
        } else if (a > cha) {
          this.left = cha;
        } else {
          this.left = a;
        }
      }
      //   console.warn(this.left);
      //   console.warn(e.clientX);
    },
  },
};
</script>
<style scoped>
.move {
  cursor: move;
}
.fix {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3000;
}
.item {
  width: 160px !important;
}
.text {
  text-align: center;
  line-height: 75px;
  font-size: 20px;
  font-family: HarmonyOS_Sans_SC_Medium;
  font-weight: 400;
  color: #525252;
}
.login {
  /* position: relative; */
  background: url("../../assets/login/bg.png") 100% no-repeat;
  background-size: cover;
  width: 7.3rem;
  height: 5.83rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.point {
  cursor: pointer;
}
.hua {
  position: absolute;
  top: 0;
  left: 0;
  height: 75px;
}
.bg {
  position: absolute;
  left: 0;
  top: 0;
}
.xia {
  position: absolute;
  left: 0;
  bottom: -0.05rem;
  width: 1.49rem;
  height: 0.05rem;
  padding: unset !important;
  background: #dfae3a;
  transition: 0.5s all ease;
}
.c-button {
  position: absolute;
  right: 0;
  top: 0;
  height: 0.75rem;
  cursor: pointer;
}
/* .choose {

} */
.rela {
  position: relative;
}
.login-di {
  margin-bottom: 24px;
}
.title {
  width: 2.73rem;
  /* height: 41px; */
  margin-top: 0.64rem;
  margin-bottom: 10px;
}
.choose {
  font-size: 0.2rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  font-weight: 400;
  color: #ffffff;
  display: flex;
  position: relative;
}

.choose div {
  width: 1.8rem;
  padding: 0.1rem;
  text-align: center;
  cursor: pointer;
}
.button {
  width: 199px;
  height: 70px;
  background: url("../../assets/login/go.png") 100% no-repeat;
  background-size: cover;
  cursor: pointer;
}
.input {
  border: 0px;
  outline: none;
  font-size: 0.2rem;
  font-family: HarmonyOS_Sans_SC_Medium;
  font-weight: 400;
  color: #525252;
}
.close {
  position: absolute;
  right: 0.31rem;
  top: 0.25rem;
  cursor: pointer;
}
.phone {
  background: url("../../assets/login/phone.png") 100% no-repeat;
  background-size: cover;
  width: 477px;
  height: 75px;
  padding: 0 20px;
  margin-bottom: 25px;
}

.check {
  background: url("../../assets/login/check.png") 100% no-repeat;
  background-size: cover;
  width: 4.77rem;
  padding: 0 0.2rem;
  height: 0.75rem;
  position: absolute;
  left: 0;
  margin-bottom: 0.25rem;
}

.a {
  width: 5.17rem;
  height: 0.75rem;
  margin-bottom: 0.25rem;
}
</style>