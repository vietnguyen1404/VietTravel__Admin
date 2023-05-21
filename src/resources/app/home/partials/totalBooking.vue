<template>
    <div class="card box-info">
        <div class="box-info-icon">
            <i class="fa-solid fa-calendar-check"></i>
        </div>
        <div class="box-info-content">
            <h2>{{ this.bookings.length }}</h2>
            <span>Total Booking</span>
        </div>
    </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data : () => ({
        bookings : []
    }),
    methods : {
        ...mapActions("booking", ["GetListBooking"]),
        async getData () {
            let response = await this.GetListBooking();
            if(response.code === 200) {
                this.bookings = response.bookings
                console.log(this.bookings);
            }
        }
    },
    created () {
        this.getData();
    }
}
</script>
<style lang="scss" scoped>
.box-info-icon {
    background-color: #faeaaa;
    svg {
        color : rgb(244, 215, 54);
    }
}
</style>