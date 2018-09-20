<template>
  <div id="app">
    <div class="app-header">
      <div class="app-header-inner">
        <a href="/">
          <img src="./assets/logo.png" alt="">
        </a>
        <div class="header-nav">
          <ul>
            <li>登录</li>
            <li>|</li>
            <li>注册</li>
            <li>|</li>
            <li>关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-container">
      <router-view/>
    </div>
    <div class="app-footer">
      <p>
        © 2018 vince XZY
      </p>
    </div>
  </div>
</template>

<script>
import dialog from '@/components/dialog';
export default {
  name: "App",
  components:{
    dialog
  }
};
</script>

<style>

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB",
    "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei",
    "WenQuanYi Micro Hei", sans-serif;
  font-size: 14px;
  color: #444;
}
.app-header {
  width: 100%;
  height: 90px;
  background-color: #363636;
  color: #b2b2b2;
}
.app-header-inner {
  width: 1200px;
  height: 90px;
  background-color: #333;
  margin: 0 auto;
}
.app-header a img {
  display: block;
  width: 50px;
  height: 50px;
  margin-top: 20px;
  float: left;
  margin-left: 20px;
}
.header-nav {
  float: right;
}
.header-nav li {
  cursor: pointer;
  float: left;
  line-height: 90px;
  padding: 0 5px;
}
.app-container {
  padding: 20px 0;
}
.app-footer {
  width: 100%;
  height: 80px;
  text-align: center;
  background-color: #ccc;
}
.app-footer p {
  line-height: 80px;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
</style>
