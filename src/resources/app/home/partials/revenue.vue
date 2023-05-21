<template>
    <div class="card box-info">
        <div class="box-info-icon">
            <i class="fa-solid fa-money-check-dollar"></i>
        </div>
        <div class="box-info-content">
            <h2>{{ revenue }}</h2>
            <span>Revenue</span>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data: () => ({
        revenue : 0
    }),
    methods: {
        ...mapActions("booking", ["GetListBooking"]),
        async getData() {
            let response = await this.GetListBooking();
            if (response.code === 200) {
                this.revenue = response.bookings.reduce((acc, cur) => acc + cur.totalPrice,this.revenue);
                console.log(this.revenue);
            }
        },
    },
    created() {
        this.getData();
    },
};
</script>
<style lang="scss" scoped>
.box-info-icon {
    background-color: #fad7cd;
    svg {
        color : rgb(249, 108, 47);
    }
}
</style>