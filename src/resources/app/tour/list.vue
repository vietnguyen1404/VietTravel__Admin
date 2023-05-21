<template>
    <div>
        <!-- <booking-filter /> -->
        <b-card>
            <div class="card-body">
                <div class="d-flex justify-content-end mb-3">
                    <router-link
                        :to="{
                            name: 'admin.tour.create',
                        }">
                        <div class="btn btn-success">Thêm mới</div>
                    </router-link>
                </div>
                <hr />
                <template v-if="loading">
                    <c-table
                        class="table table-hover table-centered table-nowrap">
                        <template slot="thead">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Durations</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price</th>
                                <th scope="col">Code</th>
                                <th scope="col"></th>
                            </tr>
                        </template>
                        <template slot="tbody">
                            <tr v-for="(tour, index) in tours" :key="index">
                                <td>{{ tour.name }}</td>
                                <td>
                                    <img :src="tour.images[0]" alt="images" />
                                </td>
                                <td class="text-center">
                                    {{ tour.duration }}
                                </td>
                                <td class="h-100">
                                    <p
                                        v-html="tour.description"
                                        class="limit-text"
                                        style="max-width: 350px"></p>
                                </td>
                                <td>{{ tour.price.adult }}</td>
                                <td>
                                    {{ tour.code }}
                                </td>
                                <td>
                                    <div class="align-items-center d-flex justify-content-around">
                                        <RouterLink
                                            :to="{
                                                name: 'admin.tour.edit',
                                                params: {
                                                    id: tour._id,
                                                },
                                            }">
                                            <i
                                                class="fa-solid fa-pen-to-square"></i>
                                        </RouterLink>
                                        <a @click="deleteTour(tour)" style="cursor: pointer;">
                                            <i
                                                class="fa-solid fa-trash"
                                                style="color: #e90c0c"></i>
                                        </a>
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
import { RouterLink } from "vue-router";
// import bookingFilter from "./booking-filter.vue";
import { mapActions } from "vuex";
export default {
    components: { CTable, RouterLink },
    data: () => ({
        loading: true,
        tours: [],
    }),
    watch: {
        "this.$router": {
            handler: function () {},
        },
    },
    methods: {
        ...mapActions("tour", ["GetListTour","DeleteTour"]),
        toggleStatus(booking) {
            this.$swal({
                title: "Confirm Paid",
                icon: "info",
                showCancelButton: true,
                confirmButtonText: "Confirm",
                cancelButtonText: "Cancel",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    booking.status = booking.status === 0 ? 1 : 0;
                    console.log(booking.status);
                }
            });
        },
        async getData() {
            let response = await this.GetListTour(this.$route.query);
            if (response.code === 200) {
                this.tours = response.data;
            }
        },
        deleteTour(tour) {
            this.$swal({
                title : 'Xóa tour ' + tour.name,
                icon : 'info',
                showCancelButton : true ,
                confirmButtonText : "Xác nhận",
                cancelButtonText : "Hủy"
            }).then(async (result) => {
                if(result.isConfirmed) {{
                    let response = await this.DeleteTour(tour._id);
                    if(response.code === 200) {
                        this.$swal({
                            title : "Xóa thành công",
                            icon : "success"
                        })
                        this.getData();
                    }
                }}
            })
        }
    },
    created() {
        this.getData();
    },
};
</script>
<style scoped>
.fa-eye {
    margin-right: 10px;
}
svg {
    font-size: 1.3rem;
    color: #64c5b1;
}
img {
    width: 100px;
}
</style>
