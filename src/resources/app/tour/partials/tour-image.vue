<template>
    <div>
        <b-form-group class="mt-3">
            <label for="">Tour Image<span class="text-danger">*</span></label>
            <label for="file-input" class="btn btn-success btn-add">
                Thêm ảnh
            </label>
            <b-form-file
                class="d-none"
                id="file-input"
                multiple
                ref="image"
                v-model="currentFiles"
                @change="handleUploadImage"></b-form-file>
        </b-form-group>
        <b-row class="mt-3">
            <b-col lg="4" v-for="image,index in images" :key="index">
                <img :src="image" alt="" class="h-100 w-100 tour-image">
            </b-col>
        </b-row>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    props: {
        value: Array,
    },
    data: () => ({
        currentFiles : [],
        fileImages: [],
        images : []
    }),
    watch: {
        images: {
            handler: function () {
                console.log("Images", this.images);
                this.$emit("update", this.images);
            },
        },
        value: {
            handler: function () {
                this.images = this.value;
            },
        },
    },
    created() {
        this.images = this.value
    },
    methods: {
        ...mapActions('upload',['UploadImages']),
        async handleUploadImage(e) {
            this.fileImages = [...this.fileImages, ...e.target.files];
            let response = await this.UploadImages(this.fileImages);
            if(response.code === 200) {
                this.images = [...this.images , ...response.images]
                this.currentFiles = []
            }
        },
        showImage(e) {
            return URL.createObjectURL(e)
        }
    },
};
</script>
<style scoped lang="scss">
.btn-add {
    margin-left: 10px;
    background-color: #64c5b1;
    border: none;
    &:hover {
        background-color: #92edda;
    }
}
.tour-image {
    border-radius: 8px;
    object-fit: cover;
    max-height: 250px;
}
</style>