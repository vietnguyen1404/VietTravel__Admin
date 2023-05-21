<template>
    <b-form-group>
        <label for="">Mô tả<span class="text-danger">*</span></label>
        <textarea
            v-model="description"
            class="tour-description"
            placeholder="Nhập mô tả" />
    </b-form-group>
</template>
<script>
export default {
    props: {
        value: String,
    },
    components: {},
    data: () => ({
        description: "",
    }),
    watch: {
        description: {
            handler: function () {
                this.$emit("update", this.description);
            },
        },
        value: {
            handler: function () {
                this.description = this.value;
            },
        },
    },
    created() {
        this.description = this.value;
    },
};
</script>
<style scoped>
.tour-description {
    display: block;
    width: 60%;
    padding: 12px;
    border-radius: 1rem;
}
</style>