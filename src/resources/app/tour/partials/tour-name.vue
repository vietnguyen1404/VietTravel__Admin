<template>
    <b-form-group>
        <label for="">Tên tour<span class="text-danger">*</span></label>
        <b-form-input v-model="name"></b-form-input>
    </b-form-group>
</template>
<script>
export default {
    props : {
        value : String 
    },
    data :() => ({
        name : ''
    }),
    watch : {
        name : {
            handler : function () {
                this.$emit('update', this.name)
            }
        },
        "value" :{
            handler : function() {
                this.name = this.value
            },
        }
    },
    created () {
        this.name = this.value
    }
}
</script>