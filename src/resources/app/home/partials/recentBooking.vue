<template>
    <b-card>
        <h3>Recent Booking</h3>
        <table class="table">
            <tr>
                <th>Customer Name</th>
                <th>Booking Date</th>
                <th>Total</th>
                <th class="text-center">Status</th>
            </tr>
            <tr v-for="booking in bookings" :key="booking._id">
                <td class="customer-name">{{ booking.contactDetail.fullName }}</td>
                <td class="booking-date">{{ booking.date }}</td>
                <td class="total">{{ booking.totalPrice }}</td>
                <td class="text-center">
                    <span :class="statusStyle(booking.status)">{{
                        bookingStatus(booking.status)
                    }}</span>
                </td>
            </tr>
        </table>
    </b-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
    data: () => ({
        bookings: [],
    }),
    methods: {
        ...mapActions("booking", ["GetListBooking"]),
        async getData() {
            let response = await this.GetListBooking();
            if (response.code === 200) {
                this.bookings = response.bookings;
            }
        },
        bookingStatus(status) {
            switch (status) {
                case 1:
                    return "Pending";
                case 2:
                    return "Unpaid";
                case 3:
                    return "Paid";
                default:
                    break;
            }
        },
        statusStyle(status) {
            switch (status) {
                case 1:
                    return "pending-style";
                case 2:
                    return "unpaid-style";
                case 3:
                    return "paid-style";
                default:
                    break;
            }
        },
    },
    created() {
        this.getData();
    },
};
</script>
<style lang="scss" scoped>
table {
    border-collapse: separate;
    border-spacing: 0 12px;
}
.customer-name {
    color: #bda5f8;
}

.booking-date {
    color: #ffb98a;
}

.total {
    color: #97c0ff;
}

.pending-style {
    color: #ff7f57;
    background: #fff0eb;
    border-radius: 6px;
}

.unpaid-style {
    color: #0893c8;
    background: #e6f8ff;
    border-radius: 6px;
}

.paid-style {
    color: #50d863;
    background: #e8ffeb;
    border-radius: 6px;
}
</style>
