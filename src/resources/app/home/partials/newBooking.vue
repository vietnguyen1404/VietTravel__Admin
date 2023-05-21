<template>
    <div class="card box-info">
        <div class="box-info-icon">
            <i class="fa-solid fa-calendar-check"></i>
        </div>
        <div class="box-info-content">
            <h2>5</h2>
            <span>New Booking</span>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    methods : {
        ...mapActions('booking',[''])
    }
}
</script>
<style lang="scss" scoped>
.box-info-icon {
    background-color: #8cdce5;
    svg {
        color : rgb(91, 91, 243);
    }
}
</style>