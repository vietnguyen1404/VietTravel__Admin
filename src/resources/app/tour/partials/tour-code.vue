<template>
    <b-form-group class="mt-3">
        <label for="">Tour Code<span class="text-danger">*</span></label>
        <b-form-input v-model="code"></b-form-input>
    </b-form-group>
</template>
<script>
export default {
    props : {
        value : String 
    },
    data :() => ({
        code : ''
    }),
    watch : {
        code : {
            handler : function () {
                this.$emit('update', this.code)
            }
        },
        "value" :{
            handler : function() {
                this.code = this.value
            },
        }
    },
    created () {
        this.code = this.value
    }
}
</script>