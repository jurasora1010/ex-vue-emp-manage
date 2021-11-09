<template>
  <div id="registerAdomin">
    <div class="container">
      <div class="row register-page">
        <div class="error">{{ errorMessage }}</div>
        <form class="col s12" id="reg-form">
          <div class="row">
            <div class="input-field col s6">
              <input
                id="last_name"
                type="text"
                class="validate"
                required
                v-model="lastName"
              />
              <label for="last_name">姓</label>
            </div>
            <div class="input-field col s6">
              <input
                id="first_name"
                type="text"
                class="validate"
                required
                v-model="firstName"
              />
              <label for="first_name">名</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="email"
                type="email"
                class="validate"
                required
                v-model="mailAddress"
              />
              <label for="email">メールアドレス</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input
                id="password"
                type="password"
                class="validate"
                minlength="8"
                required
                v-model="password"
              />
              <label for="password">パスワード</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <button
                class="btn btn-large btn-register waves-effect waves-light"
                @click="registerAdmin"
                type="button"
              >
                登録
                <i class="material-icons right">done</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class RegisterAdmin extends Vue {
  // エラーメッセージ
  private errorMessage = "";
  // 姓
  private lastName = "";
  // 名
  private firstName = "";
  // メールアドレス
  private mailAddress = "";
  // パスワード
  private password = "";
  /**
   * 管理者情報を登録する.
   *
   * @remarks
   * 登録成功の場合、ログイン画面に遷移
   * 登録失敗の場合、エラーメッセージを表示
   *
   */
  async registerAdmin(): Promise<void> {
    const response = await axios.post(
      "http://54.200.203.52:8080/ex-emp-api/insert",
      {
        name: this.lastName + " " + this.firstName,
        mailAddress: this.mailAddress,
        password: this.password,
      }
    );
    if (response.data.status === "success") {
      this["$router"].push("/loginAdmin");
    } else {
      this.errorMessage = "登録できませんでした(Invalid request parameter.)";
    }
  }
}
</script>

<style scoped>
.register-page {
  width: 600px;
}
</style>
