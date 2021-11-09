<template>
  <div id="employeeList">
    <div class="container">
      <div>従業員数:{{ getEmployeeCount }}人</div>
      <div class="row">
        <table class="striped">
          <thead>
            <tr>
              <th>名前</th>
              <th>入社日</th>
              <th>扶養人数</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="employee of employees" v-bind:key="employee.id">
              <td>
                <router-link :to="'/employeeDetail/' + employee.id">{{
                  employee.name
                }}</router-link>
              </td>
              <td>{{ employee.hireDate }}</td>
              <td>{{ employee.dependentsCount }}人</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Employee } from "@/types/employee";

@Component
export default class EmployeeList extends Vue {
  created(): void {
    this["$store"].dispatch("getEmployeeList");
  }
  get employeeCount(): number {
    return this["$store"].getters.getEmployeeCount;
  }
  get employees(): Array<Employee> {
    return this["$store"].getters.getEmployees;
  }
}
</script>

<style scoped>
.login-page {
  width: 600px;
}
</style>
