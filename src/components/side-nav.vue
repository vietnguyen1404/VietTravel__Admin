<template>
    <div id="side-nav">
        <ul class="menu">
            <li
                v-for="(item, idx) in menu"
                :key="idx"
                :class="['item', item.active ? 'active' : '']">
                <router-link :to="item.href">
                    <i :class="item.icon"></i>
                    <span ref="item-text">{{ item.text }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props : { 
        isMenuShow : Boolean
    },
    data: () => ({
        menu: [
            {
                text: "Dashboard",
                icon: "fa-solid fa-house",
                href: "/",
                active: true,
                to: "admin.home",
            },
            {
                text: "Booking",
                icon: "fa-solid fa-star",
                href: "/admin/booking",
                active: false,
                to: "admin.booking",
            },
            {
                text: "Tour",
                icon: "fa-solid fa-music",
                href: "/admin/tour",
                active: false,
                to: "admin.tour",
            },
            {
                text: "User",
                icon: "fa-solid fa-user",
                href: "/admin/user",
                active: false,
                to: "admin.user",
            },
            {
                text : "Destination",
                icon: "fa-solid fa-user",
                href: "/admin/destination",
                active: false,
                to: "admin.destination",
            }
        ],
    }),
    watch: {
        "$route.name": {
            handler: function () {
                this.checkActive();
            },
        },
        isMenuShow :{
            handler : function () {
                if(this.isMenuShow) {
                    console.log(this.$refs['item-text']);
                    this.$refs['item-text'].map(e => {
                        e.style.display = 'none'
                    })
                }else {
                    this.$refs['item-text'].map(e => {
                        e.style.display = 'inline-block'
                    })
                }
            }
        }
    },
    methods: {
        checkActive() {
            this.menu = this.menu.map((item) => {
                item.active = item.to === this.$route.name;
                return item;
            });
        },
    },
    created() {
        this.checkActive();
    },
};
</script>
<style>
@keyframes show {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
.item.active {
    animation: show 0.3s ease-in;
}
</style>
