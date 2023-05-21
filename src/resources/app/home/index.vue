<template>
    <div id="home">
        <div class="row">
            <b-col lg="12">
                <welcome />
            </b-col>
        </div>
        <div class="row mt-4">
            <b-col lg="4">
                <newBooking />
            </b-col>
            <b-col lg="4">
                <totalBooking />
            </b-col>
            <b-col lg="4">
                <revenue />
            </b-col>
        </div>
        <div class="row mt-4">
            <b-col lg="4">
                <topDestination />
            </b-col>
            <b-col lg="8">
                <recentBooking/>
            </b-col>
        </div>
    </div>
</template>
<script>
import welcome from "./partials/welcome.vue";
import newBooking from "./partials/newBooking.vue";
import totalBooking from "./partials/totalBooking.vue";
import revenue from "./partials/revenue.vue";
import topDestination from "./partials/topDestination.vue";
import recentBooking from "./partials/recentBooking.vue";
export default {
    components: {
        welcome,
        newBooking,
        totalBooking,
        revenue,
        topDestination,
        recentBooking,
    },
};
</script>
