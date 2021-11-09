import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Employee } from "@/types/employee";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // 従業員数
    totalEmployeeCount: 0,
    // 従業員一覧
    employees: new Array<Employee>(),
  }, // end state
  actions: {
    /**
     * WebAPIから従業員情報を取得する.
     *
     * @remarks
     * 従業員一覧情報を WebAPI から取得 して mutation を呼び出す。
     *
     * @param context - コンテキストオブジェクト
     */
    async getEmployeeList(context) {
      const response = await axios.get(
        "http://54.200.203.52:8080/ex-emp-api/employee/employees"
      );
      console.dir("response" + JSON.stringify(response));
      const payload = response.data;
      context.commit("showEmployeeList", payload);
    },
  }, // end actions
  mutations: {
    /**
     * 従業員一覧情報を作成して state に格納する.
     *
     * @param state - 従業員一覧を呼ぶためのstate
     * @param payload - WebAPIから取得した従業員一覧情報＆従業員数
     */
    showEmployeeList(state, payload) {
      state.totalEmployeeCount = payload.EmployeeCount;
      state.employees = payload.employees;
      // for (const employee of payload.employees) {
      //   state.employees.push(
      //     new Employee(
      //       employee.id,
      //       employee.name,
      //       employee.image,
      //       employee.gender,
      //       employee.hireDate,
      //       employee.mailAddress,
      //       employee.zipCode,
      //       employee.address,
      //       employee.telephone,
      //       employee.salary,
      //       employee.characteristics,
      //       employee.dependentsCount
      //     )
      //   );
      // }
    },
  }, // end mutations
  getters: {
    /**
     * 従業員数を返す.
     * @param state - 従業員一覧を呼ぶためのstate
     * @returns - 従業員数
     */
    getEmployeeCount(state) {
      return state.employees.length;
    },
    /**
     * 従業員一覧を返す.
     * @param state - 従業員一覧を呼ぶためのstate
     * @returns - 従業員一覧
     */
    getEmployees(state) {
      return state.employees;
    },
    /**
     * ID から従業員を検索し返す.
     * @param state - 従業員一覧を呼ぶためのstate
     * @returns - 引数のIDと一致する従業員情報
     */
    getEmployeeById(state) {
      return (id: number) => {
        const newEmployees = state.employees.filter(
          (employee) => employee.id == id
        );
        return newEmployees[0]; //配列ではなくオブジェクトで返す
      };
    },
  }, // end getters
  modules: {}, // end modules
});
