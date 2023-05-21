<template>
    <b-card>
        <b-row class="header align-items-center">
            <b-col lg="6">
                <router-link
                    :to="{ name: 'admin.destination.list' }"
                    class="title text-success"
                    style="text-decoration: none">
                    <i class="fa fa-arrow-left mr-2"></i>
                    Destinations List
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
                    <b-button variant="success" @click="createDestination">
                        <i class="fa fa-save mr-2"></i> Thêm mới
                    </b-button>
                </div>
            </b-col>
        </b-row>
        <hr style="margin: 1rem -17px" />
        <b-row>
            <b-col lg="8">
                <destinationName v-model="entry.name"  @update="value => entry.name = value" />
           </b-col>
           <b-col lg="8">
                <codeName v-model="entry.codeName" @update="value => entry.codeName = value" />
           </b-col>
        </b-row>
    </b-card>
</template>
<script>
import codeName from "./partials/code-name.vue";
import destinationName from "./partials/destination-name.vue";
import { mapActions } from "vuex";
export default {
    components: {
        codeName,
        destinationName
    },
    data: () => ({
        entry: {
            codeName : "",
            name : ""
        },
    }),
    watch: {
        entry: {
            handler: function () {},
            deep: true,
        },
    },
    methods: {
        ...mapActions("destination", ["CreateDestination"]),
        async createDestination() {
            let response = await this.CreateDestination(this.entry);
            if (response.code === 200) {
                this.$swal({
                    title: "Thêm mới destination thành công !",
                    icon: "success",
                });
            }
        },
    },
};
</script>
<style scoped></style>
