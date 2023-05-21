<template>
    <b-card>
        <b-row class="header align-items-center">
            <b-col lg="6">
                <router-link
                    :to="{ name: 'admin.tour.list' }"
                    class="title text-success"
                    style="text-decoration: none">
                    <i class="fa fa-arrow-left mr-2"></i>
                    Danh sách tour
                </router-link>
            </b-col>
            <b-col lg="6" class="text-right">
                <div class="button-container d-flex justify-content-end">
                    <b-button
                        variant="outline-success"
                        class="mr-2"
                        style="margin-right: 10px">
                        <i class="fas fa-sync mr-2"></i> Đặt lại
                    </b-button>
                    <b-button variant="success" @click="updateTour">
                        <i class="fa fa-save mr-2"></i> Thêm mới
                    </b-button>
                </div>
            </b-col>
        </b-row>
        <hr style="margin: 1rem -17px" />
        <b-row>
            <b-col lg="6">
                <tourName
                    v-model="entry.name"
                    @update="(value) => (entry.name = value)" />
            </b-col>
            <b-col lg="4">
                <tourDuration
                    v-model="entry.duration"
                    @update="
                        (value) => (entry.duration = Number.parseInt(value))
                    " />
            </b-col>
            <b-col lg="12" class="mt-4">
                <tourDescription
                    v-model="entry.description"
                    @update="(value) => (entry.description = value)" />
            </b-col>
            <b-col lg="5">
                <tourPrice
                    v-model="entry.price"
                    @update="(value) => (entry.price = value)" />
            </b-col>
            <b-col lg="3">
                <tourCode
                    v-model="entry.code"
                    @update="(value) => (entry.code = value)" />
            </b-col>
            <b-col lg="4 mt-2">
                <tourDestination
                    v-model="entry.destination"
                    @update="(value) => (entry.destination = value)" />
            </b-col>
            <b-col lg="12" class="mt-4">
                <tourSchedule
                    v-model="entry.schedule"
                    @update="(value) => (entry.schedule = value)" />
            </b-col>
            <b-col lg="12">
                <tourImage
                    v-model="entry.images"
                    @update="(value) => (entry.images = value)" />
            </b-col>
        </b-row>
    </b-card>
</template>
<script>
import tourName from "./partials/tour-name.vue";
import tourDuration from "./partials/tour-duration.vue";
import tourDescription from "./partials/tour-description.vue";
import tourPrice from "./partials/tour-price.vue";
import tourCode from "./partials/tour-code.vue";
import tourSchedule from "./partials/tour-schedule.vue";
import tourDestination from "./partials/tour-destination.vue";
import tourImage from "./partials/tour-image.vue";
import { mapActions } from "vuex";
export default {
    components: {
        tourName,
        tourDuration,
        tourDescription,
        tourPrice,
        tourCode,
        tourSchedule,
        tourDestination,
        tourImage,
    },
    data: () => ({
        entry: {
            name: "",
            duration: 0,
            photos: [],
            description: "",
            price: {
                adult: 0,
                children: 0,
            },
            images : [],
            code: "",
            schedule: [],
            destination: null,
        },
    }),
    watch: {
        entry: {
            handler: function () {},
            deep: true,
        },
    },
    methods: {
        ...mapActions("tour", ["UpdateTour","GetTour"]),
        async updateTour() {
            let response = await this.UpdateTour(this.entry);
            if (response.code === 200) {
                this.$swal({
                    title : 'Update Success !!',
                    icon : "success"
                })
            }
        },
        async getData() {
            let response = await this.GetTour(this.$route.params.id);
            if(response.code === 200) {
                this.entry = response.tour
            }
        }
    },
    created( ) {
        this.getData();
    }
};
</script>
<style scoped>
</style>