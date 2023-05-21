<template>
    <div>
        <!-- <booking-filter /> -->
        <b-card>
            <div class="card-body">
                <div class="d-flex justify-content-end mb-3">
                    <router-link
                        :to="{
                            name: 'admin.destination.create',
                        }">
                        <div class="btn btn-success">Thêm mới</div>
                    </router-link>
                </div>
                <hr>
                <template v-if="loading">
                    <c-table
                        class="table table-hover table-centered table-nowrap">
                        <template slot="thead">
                            <tr>
                                <th class="text-center" scope="col">Tên</th>
                                <th class="text-center" scope="col">
                                    Short Name
                                </th>
                                <th scope="col"></th>
                            </tr>
                        </template>
                        <template slot="tbody">
                            <tr v-for="des in destinations" :key="des._id">
                                <td class="text-center">{{ des.name }}</td>
                                <td class="text-center">{{ des.codeName }}</td>
                                <td class="d-flex justify-content-end">
                                    <RouterLink
                                        :to="{
                                            name: 'admin.destination.edit',
                                            params : {
                                                id : des._id
                                            }
                                        }">
                                        <i
                                            class="fa-solid fa-pen-to-square"></i>
                                    </RouterLink>
                                    <a>
                                        <i
                                            style="color: red"
                                            class="fa-solid fa-trash"></i>
                                    </a>
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
import { mapActions } from "vuex";

export default {
    components: { CTable },
    data: () => ({
        loading: true,
        destinations: [],
    }),
    computed: {},
    watch: {
        "this.$router": {
            handler: function () {},
        },
    },
    methods: {
        ...mapActions("destination", ["GetListDestination"]),
        async getData() {
            let response = await this.GetListDestination();
            if (response.code === 200) {
                this.destinations = response.destinations;
            }
        },
    },
    created() {
        this.getData();
    },
};
</script>
<style scoped>
.fa-check {
    margin-right: 10px;
}

svg {
    font-size: 1.2rem;
}
</style>
