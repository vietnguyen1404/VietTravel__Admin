<template>
    <b-form-group>
        <label for="">Thời gian (Ngày)<span class="text-danger">*</span></label>
        <b-form-input v-model="duration" type="number"/>
    </b-form-group>
</template>
<script>
export default {
    props : {
        value : Number 
    },
    data :() => ({
        duration : 0
    }),
    watch : {
        duration : {
            handler : function () {
                this.$emit('update', this.duration)
            }
        },
        "value" :{
            handler : function() {
                this.duration = this.value
            },
        }
    },
    created () {
        this.duration = this.value
    }
}
</script>