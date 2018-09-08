<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>

        <h3>PC产品</h3>
        <ul>
          <li>数据统计</li>
        </ul>
        <div class="hr"></div>
        <h3>PC产品</h3>
        <ul>
          <li>数据统计</li>
        </ul>
        <div class="hr"></div>

      </div>
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li>数据统计</li>
          <li>数据统计</li>
          <li>数据统计</li>
          <li>数据统计</li>
        </ul>
      </div>
    </div>
    <div class="index-right">
      <div class="slide-show">
        <a :href="items[nowIndex].href">
          <transition name="sli">
            <img v-if="show" :src="items[nowIndex].src">
          </transition>
        </a>
          <transition name="sli-old">
            <img v-if="!show" :src="items[nowIndex].src">
          </transition>
        <h2>
          {{items[nowIndex].title}}
        <ul>
            <li><span @click="prev">&lt;</span></li>
            <li :class="{on:nowIndex == index}" v-for="(item,index) in items" :key="index" @click="goto(index)"><span>{{index+1}}</span></li>
            <li><span @click="next">&gt;</span></li>
        </ul>
        </h2>
      </div>
      <div class="index-board-list">
        <div class="index-board-item">
          <div class="index-board-item-inner">
            <h2>开放产品</h2>
            <p>开放产品是一款开放产品</p>
            <div class="index-board-button">
              <a href="" class="button">立即购买</a>
            </div>
          </div>
        </div>
        <div class="index-board-item">
          <div class="index-board-item-inner">
            <h2>开放产品</h2>
            <p>开放产品是一款开放产品</p>
            <div class="index-board-button">
              <a href="" class="button">立即购买</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      show :true,
      nowIndex:0,
      items:[
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'React.js',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'Android',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: '算法面试',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'React Native',
          href: 'detail/forecast'
        }
      ]
    }
  },
  methods: {
    goto (index) {
      if (index !== this.nowIndex) {
        this.show = false;
        setTimeout(() => {
          this.show = true;
          this.nowIndex = index
        }, 10)
      }
    },
    prev(){
      let prevIndex = 0;
      if (this.nowIndex === 0) {
        prevIndex = this.items.length - 1;
      } else {
        prevIndex = this.nowIndex - 1;
      }
        this.goto(prevIndex);
    },
    next(){
      let nextIndex = 0;
      if (this.nowIndex === this.items.length - 1) {
        nextIndex = 0;
      } else {
        nextIndex = this.nowIndex + 1;
      }
        this.goto(nextIndex);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index-wrap {
  width: 1200px;
  min-height: 300px;
  /* background-color: #444; */
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  /* background-color: #555; */
  width: 300px;
  float: left;
  min-height: 300px;
  text-align: left;
}
.index-left-block {
  margin: 0 15px;
  color: #222;
  box-shadow: 0 0 1px #ddd;
  background-color: #fff;
}
.index-left h2 {
  padding: 10px 15px;
  background-color: #4fc08d;
  color: white;
  margin-bottom: 20px;
}
.index-left h3 {
  padding: 0px 15px 5px;
  font-weight: bold;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.hr {
  margin-bottom: 20px;
}
.index-right {
  /* background-color: #666; */
  width: 900px;
  float: right;
  min-height: 300px;
}
.slide-show {
  margin-bottom: 15px;
  width: 900px;
  height: 500px;
  background-color: #adc;
  position: relative;
  overflow: hidden;
  color: #fff;
}
.slide-show h2 {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 50px;
  line-height: 50px;
  padding-left: 30px;
  font-size: 24px;
  background-color: #24010080;
  box-sizing: border-box;
}
.slide-show ul {
  float: right;
}
.slide-show ul li{
  display: inline-block;
  cursor: pointer;
}
.slide-show ul li.on{
  color:lightseagreen;
  font-weight: 700;
  text-decoration:teal underline;
}
.slide-show span {
  padding: 0 10px;
  font-size: 24px;
}
.slide-show img {
  width: 100%;
  position: absolute;
  top: 0;
}
.index-board-item {
  float: left;
  width: 400px;
  margin: 0px 0px 20px;
  padding: 20px;
  background-color: #fff;
}
.index-board-item:nth-child(2n + 1) {
  margin-right: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
  background: url(../assets/images/1.png) no-repeat;
}
.index-board-item-inner h2{
  font-size: 18px;
  margin-bottom: 15px;
  color: #000;
  font-weight: bold;
}
.index-board-item-inner p{

}
.index-board-button {
  margin-top: 20px;
}
.index-board-button a{
  display: inline-block;
  padding: 10px 20px;
  color: white;
  background-color:#4fc08d;
}
/* ----过渡---- */
.sli-enter {
  transform: translateX(900px);
}
.sli-enter-active {
  transition: all .5s;
}
.sli-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}
</style>
