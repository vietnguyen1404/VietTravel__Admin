<template>
    <b-card class="mb-2">
        <div class="card-body">
            <div class="col-lg-3">
                <bookingFilterName/>
            </div>
        </div>
    </b-card>
</template>
<script>
import bookingFilterName from './booking-filter-name.vue';
export default {
    components : { bookingFilterName }
}
</script>