<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class LogoutAdmin extends Vue {
  /**
   * ログアウトをする.
   *
   * @remarks
   * ログアウトに成功したらしたらログイン画面に遷移する
   */
  async created(): Promise<void> {
    console.log("logout!"); // 動作確認用
    const response = await axios.get(
      "http://54.200.203.52:8080/ex-emp-api/logout"
    );
    console.dir("logout:" + response); // 動作確認用
    if (response.data.status === "success") {
      this["$router"].push("/loginAdmin");
    }
  }
}
</script>

<style scoped></style>
