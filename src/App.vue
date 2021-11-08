<template>
  <div id="app">
    <!-- ヘッダーはcomponentとして埋め込まれている -->
    <Header />
    <div class="top-wrapper">
      <!-- ページが切り替わるところ -->
      <router-view />
    </div>

    <!-- フッターはcomponentとして埋め込まれている -->
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    Header,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  /* width: 800px; */
  width: 100%;
  margin: auto;
  color: #2c3e50;
  /* margin-top: 60px; */
}

/* 全てのページに対して上記メニューバー分の100pxを空ける */
.top-wrapper {
  padding-top: 100px;
}

/* エラーメッセージを赤字に設定 */
.error {
  color: red;
}
</style>
