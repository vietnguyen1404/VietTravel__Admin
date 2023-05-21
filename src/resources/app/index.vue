<template>
    <div>
        <PageHeader :isMenushow="isMenuShow" @toggleMenu="toggleMenu" />
        <div class="wrapper">
            <sideNav :isMenuShow="isMenuShow" />
            <div class="main-content">
                <div class="page-content">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PageHeader from "@/components/page-header.vue";
import sideNav from "@/components/side-nav.vue";
export default {
    components: { PageHeader, sideNav },
    data: () => ({
        isMenuShow: true,
    }),
    methods: {
        toggleMenu() {
            this.isMenuShow = !this.isMenuShow;
        },
    },
};
</script>
