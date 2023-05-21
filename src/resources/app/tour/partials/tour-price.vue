<template>
    <div class="mt-3">
        <div class="row">
            <div class="col-lg-6">
                <b-form-group>
                    <label for=""
                        >Giá người lớn ($)<span class="text-danger">*</span></label
                    >
                    <b-form-input v-model="price.adult" type="number"></b-form-input>
                </b-form-group>
            </div>
            <div class="col-lg-6">
                <b-form-group>
                    <label for=""
                        >Giá trẻ em ($)<span class="text-danger">*</span></label
                    >
                    <b-form-input v-model="price.children" type="number"></b-form-input>
                </b-form-group>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        value: Object,
    },
    data: () => ({
        price: {
            adult: 0,
            children: 0,
        },
    }),
    watch: {
        price: {
            handler: function () {
                this.$emit("update", this.price);
            },
        },
        "value" :{
            handler : function() {
                this.price = this.value
            },
        }
    },
    created() {
        this.price = this.value;
    },
};
</script>
