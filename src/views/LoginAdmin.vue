<template>
  <div id="loginAdomin">
    <div class="row login-page">
      <div class="col s12 z-depth-6 card-panel">
        <div class="error">{{ errorMessage }}</div>
        <form class="login-form" action="employeeList.html">
          <div class="row"></div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">mail_outline</i>
              <input
                class="validate"
                id="mailAddress"
                type="email"
                v-model="mailAddress"
              />
              <label for="mailAddress" data-error="wrong" data-success="right"
                >メールアドレス</label
              >
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">lock_outline</i>
              <input id="password" type="password" v-model="password" />
              <label for="password">パスワード</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <button
                class="btn btn-register waves-effect waves-light col s12"
                @click="loginAdmin"
                type="button"
              >
                ログイン
              </button>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6 m6 l6">
              <p class="margin medium-small">
                <router-link to="/registerAdmin"
                  >管理者登録はこちら</router-link
                >
              </p>
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
export default class LoginAdmin extends Vue {
  // エラーメッセージ
  private errorMessage = "";
  // メールアドレス
  private mailAddress = "";
  // パスワード
  private password = "";
  /**
   * ログインをする.
   *
   * @remarks
   * ログイン成功の場合、従業員一覧画面に遷移する。
   * ログイン失敗の場合、エラーメッセージを画面に表示する。
   */
  async loginAdmin(): Promise<void> {
    const response = await axios.post(
      "http://54.200.203.52:8080/ex-emp-api/login",
      {
        mailAddress: this.mailAddress,
        password: this.password,
      }
    );
    if (response.data.status === "success") {
      this["$router"].push("/employeeList");
    } else {
      this.errorMessage = "ログインに失敗しました(Invalid request parameter.)";
    }
  }
}
</script>

<style scoped>
.login-page {
  width: 600px;
}
</style>
