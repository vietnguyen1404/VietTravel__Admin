<template>
    <div>
        <booking-filter />
        <b-card>
            <div class="card-body">
                <template v-if="loading">
                    <c-table
                        class="table table-hover table-centered table-nowrap">
                        <template slot="thead">
                            <tr>
                                <th  class="text-center" scope="col">Tour Name</th>
                                <th  class="text-center" scope="col">Booker</th>
                                <th  class="text-center" scope="col">Booking Date</th>
                                <th  class="text-center" scope="col">Payment Method</th>
                                <th  class="text-center" scope="col">Total Price</th>
                                <th  class="text-center" scope="col">Status</th>
                            </tr>
                        </template>
                        <template slot="tbody">
                            <tr
                                v-for="(booking, index) in bookings"
                                :key="index"
                                class="text-center"
                                >
                                <td class="align-middle">Tour Đà Lạt</td>
                                <td class="align-middle">{{ booking.contactDetail.fullName }}</td>
                                <td class="align-middle">{{ booking.date | formatDate }}</td>
                                <td class="align-middle">{{ booking.paymentMethod }}</td>
                                <td class="align-middle">{{ booking.totalPrice }}$</td>
                                <td  v-if="booking.status !== 1">
                                    <b-dropdown
                                        v-if="booking.status !== 0"
                                        id="dropdown-btn"
                                        :text="statusName(booking.status)"
                                        class="m-md-2">
                                        <b-dropdown-item
                                            v-for="(item, index) in status"
                                            :key="index"
                                            @click="
                                                changeBookingStatus(
                                                    booking,
                                                    item.value
                                                )
                                            "
                                            >{{ item.text }}</b-dropdown-item
                                        >
                                    </b-dropdown>
                                    <div v-else class="btn btn-danger disabled">
                                        Cancel
                                    </div>
                                </td>
                                <td class="" v-else>
                                    <div class="d-flex aligns-item-center justify-content-center">
                                        <div
                                            @click="
                                                handleChangeStatus(booking, 2)
                                            ">
                                            <i
                                                class="fa-solid fa-check"
                                                style="
                                                    color: #1ef50f;
                                                    cursor: pointer;
                                                "></i>
                                        </div>
                                        <div
                                            @click="
                                                handleChangeStatus(booking, 0)
                                            ">
                                            <i
                                                class="fa-solid fa-x"
                                                style="
                                                    color: #f20707;
                                                    cursor: pointer;
                                                "></i>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </template>
                    </c-table>
                </template>
            </div>
        </b-card>
    </div>
</template>
<script>
import CTable from "@/components/datatable/table-custom.vue";
import bookingFilter from "./partials/booking-filter.vue";
import { mapActions } from "vuex";
export default {
    components: { CTable, bookingFilter },
    data: () => ({
        loading: true,
        bookings: [],
        status: [
            {
                text: "UnPaid",
                value: 2,
            },
            {
                text: "Paid",
                value: 3,
            },
        ],
    }),
    computed: {},
    watch: {
        "this.$router": {
            handler: function () {
            },
        },
    },
    methods: {
        ...mapActions("booking", ["GetListBooking", "ChangeStatusBooking"]),
        async toggleStatus(booking) {
            if (booking.status === 0) {
                this.$swal({
                    title: "Confirm Booking Tour ?",
                    icon: "info",
                    showCancelButton: true,
                    confirmButtonText: "Confirm",
                    cancelButtonText: "Cancel",
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        let options = {
                            id: booking._id,
                            status: 1,
                        };
                        const response = await this.ChangeStatusBooking(
                            options
                        );
                        if (response.code === 200) {
                            console.log(response);
                        }
                        booking.status = 1;
                        this.$swal({
                            title: "Confirm Booking Success !!",
                            icon: "success",
                        });
                    }
                });
            }
        },
        async changeBookingStatus(booking, status) {
            let options = {
                id: booking._id,
                status: status,
            };
            let response = await this.ChangeStatusBooking(options);
            if (response.code === 200) {
                booking.status = status;
            }
        },
        statusName: (status) => {
            switch (status) {
                case 0:
                    return "Cancel";

                case 1:
                    return "Pending";

                case 2:
                    return "Unpaid";

                default:
                    return "Paid";
            }
        },
        statusStyle(status) {
            switch (status) {
                case 0:
                    return "btn-danger";

                case 1:
                    return "btn-warning";

                case 2:
                    return "btn-primary";

                default:
                    return "btn-success";
            }
        },
        handleChangeStatus(booking, status) {
            let textAction = status === 2 ? "Confirm" : "Cancel";
            this.$swal({
                title: `${textAction} Booking ?`,
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Confirm",
                cancelButtonText: "Cancel",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    let options = {
                        id: booking._id,
                        status: status,
                    };
                    let response = await this.ChangeStatusBooking(options);
                    if (response.code === 200) {
                        console.log(response);
                        booking.status = status;
                    }
                }
            });
        },
        async getData() {
            let response = await this.GetListBooking(this.$route.query);
            if (response.code === 200) {
                this.bookings = response.bookings;
            }
        },
    },
    created() {
        this.getData();
    },
};
</script>
<style scoped lang="scss">
.fa-check {
    margin-right: 10px;
}

svg {
    font-size: 1.2rem;
}

</style>