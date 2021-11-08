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
     * 従業員一覧情報を WebAPI から取得 して mutation を呼び出す.
     * @param context - mutation に渡すための context
     * @param payload - 取得した一覧情報を格納
     */
    async getEmployeeList(context, payload) {
      const response = await axios.get(
        "http://54.202.162.233:8080/ex-emp-api/employee/employees"
      );
      console.dir("response" + JSON.stringify(response));
      payload = response.data;
      context.commit("showEmployeeList", payload);
    },
  }, // end actions
  mutations: {
    /**
     * 従業員一覧情報を作成して state に格納する.
     * @param state - 従業員一覧情報を格納
     * @param payload - 取得した一覧情報を格納
     */
    showEmployeeList(state, payload) {
      state.totalEmployeeCount = payload.EmployeeCount;
      for (const employee of payload.employees) {
        state.employees.push(
          new Employee(
            employee.id,
            employee.name,
            employee.image,
            employee.gender,
            employee.hireDate,
            employee.mailAddress,
            employee.zipCode,
            employee.address,
            employee.telephone,
            employee.salary,
            employee.characteristics,
            employee.dependentsCount
          )
        );
      }
    },
  }, // end mutations
  getters: {
    /**
     * 従業員数を返す.
     * @param state - 従業員一覧を呼ぶためのstate
     * @returns - state内の従業員数を返す
     */
    getEmployeeCount(state) {
      return state.employees.length;
    },
    /**
     * 従業員一覧を返す.
     * @param state - 従業員一覧を呼ぶためのstate
     * @returns - state内の従業員一覧を返す
     */
    getEmployees(state) {
      return state.employees;
    },
    /**
     * ID から従業員を検索し返す.
     * @param state - 従業員一覧を呼ぶためのstate
     * @returns - IDの一致する従業員を検索し返す.
     */
    getEmployeeId(state) {
      return (id: number) => {
        return state.employees.filter((employee) => employee.id == id);
      };
    },
  }, // end getters
  modules: {}, // end modules
});
