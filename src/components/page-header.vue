<template>
    <div id="header">
        <div class="d-flex left-top-nav">
            <button class="vertical-menu-btn" @click="toggleMenu">
                <i class="fa-solid fa-bars"></i>
            </button>
            <div class="logo">
                <router-link to="/">
                    <img src="../assets/logo/logo.png" alt="">
                    <span>Việt Travel</span>
                </router-link>
            </div>
        </div>
        <div class="d-flex right-top-nav" @click="onProfileClick">
            <img src="@/assets/images/bg-login.jpg" alt="" class="avatar">
            <span class="username">Trọng Việt</span>
            <ul class="menu-profile" ref="test">
                <li><i class="fa-solid fa-power-off"></i> <span>Đăng xuất</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    props : {
        isMenushow : Boolean
    },
    methods :{ 
        ...mapActions('user',['PostLogout']),
        onProfileClick() {
            this.$refs['test'].style.display === 'block' ? this.$refs['test'].style.display = 'none' : this.$refs['test'].style.display = 'block';
        },
        toggleMenu() {
            this.$emit('toggleMenu', this.isMenushow)
        }
    },

}
</script>