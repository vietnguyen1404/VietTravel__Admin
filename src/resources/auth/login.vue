<template>
    <div id="login">
        <div class="wrap-login">
            <b-row no-gutters class="h-100">
                <div class="col-lg-6 bg-login">
                    <img src="@/assets/images/bg-login.jpg" alt="" />
                </div>
                <div class="col-lg-6 wrap-form-login">
                    <h1 class="login-title">Admin Login</h1>
                    <div class="login-form">
                        <div class="wrap-input">
                            <input
                                class="input-text"
                                type="text"
                                placeholder="Username"
                                v-model="account.username" />
                            <i class="fa-solid fa-user input-icon"></i>
                        </div>
                        <div class="wrap-input">
                            <input
                                class="input-text"
                                type="password"
                                placeholder="Password"
                                v-model="account.password" />
                            <i class="fa-solid fa-lock input-icon"></i>
                        </div>
                    </div>
                    <div class="errMsg" v-if="errMsg" >* {{ errMsg }}</div>
                    <div class="login-btn" @click="logIn">Login</div>
                </div>
            </b-row>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
    data: () => ({
        account: {
            username: "",
            password: "",
        },
        errMsg : ""
    }),
    methods: {
        ...mapActions("user", ["Login"]),
        async logIn() {
            this.tryingToLogIn = true;
            this.message = "";
            let response = await this.Login(this.account);
            console.log(response, "code200");
            // if (response.code === 200) {
            //     await this.GetProfile();
            // }
            if (response.code === 200) {
                await this.$router.push({ name: "admin.home" });
            } else {
                this.errMsg = response.msg;
                this.tryingToLogIn = false;
            }
        },
    },
};
</script>
<style scoped>
.errMsg {
    height: 40px;
    display: flex;
    align-items: center;
    background-color: red;
    margin: 1rem 0;
    width: 100%;
    padding: 0 1rem;
    color : #ffff;
    border-radius: 6px;
}
</style>