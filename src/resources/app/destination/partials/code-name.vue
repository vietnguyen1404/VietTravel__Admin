<template>
    <b-form-group class="mt-3">
        <label for="">Short Name<span class="text-danger">*</span></label>
        <b-form-input v-model="codeName"></b-form-input>
    </b-form-group>
</template>
<script>
export default {
    props : {
        value : String 
    },
    data :() => ({
        codeName : ''
    }),
    watch : {
        codeName : {
            handler : function () {
                this.$emit('update', this.codeName)
            }
        },
        "value" :{
            handler : function() {
                this.codeName = this.value
            },
        }
    },
    created () {
        this.codeName = this.value
    }
}
</script>