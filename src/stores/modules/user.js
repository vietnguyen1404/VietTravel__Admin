import router from "@/router";
import api from "@/api";
import Vue from "vue";
// import ability from "../ability";
// import _ from "lodash";

export default {
    state: {
        user: null,
        token: localStorage.getItem("token") ?? "",
        isLoaded: false,
        permissions: [],
        roleID: "",
    },
    getters: {
        getToken: (state) => state.token,
        getUser: (state) => state.user,
    },
    mutations: {
        setUser(state, user) {
            // const roleID = user.role
            //     ? user.role.id
            //     : user.roleID
            //     ? user.roleID
            //     : user.role_id;
            // localStorage.setItem("ID", roleID);
            localStorage.setItem("user", user);
            state.user = user;
            state.isLoaded = true;

            // let permissions = [];
            // state.permissions = _.get(user, "role.permissions", []) ?? [];
            // state.permissions.map((permission) => {
            //     permissions.push({
            //         action: permission.action,
            //         subject: permission.subject,
            //     });
            // });
            // console.log("permissions", permissions);
            // ability.update(permissions);
        },
        setToken(state, token) {
            localStorage.setItem("token", token);
            state.token = token;
        },
        async setLogout(state) {
            state.user = null;
            state.token = "";
            localStorage.clear();
            await router.push({ name: "auth.login" });
        },
    },
    actions: {
        async Login({ commit }, account) {
            let response = await Vue.axios({
                method: "POST",
                url: api.Login,
                data: account,
            });
            if (response.data.code === 200) {
                commit("setToken", response.data.accessToken);
                commit("setUser", response.data.user);
            }
            return response.data;
        },
        async PostLogout({ commit }) {
            let response = await Vue.axios({
                method: "POST",
                url: api.PostLogout,
            });
            if (response.data.code === 200 || response.data.code === 401) {
                commit("setLogout");
            }
        },
    },
};
