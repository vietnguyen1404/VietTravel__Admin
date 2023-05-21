import api from "@/api";
import Vue from "vue";

export default {
    actions: {
        async UploadImages(_,options) {
            let response = await Vue.axios({
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                method: "POST",
                url: api.UploadImages,
                data : options
            });
            return response.data;
        },
    }
}