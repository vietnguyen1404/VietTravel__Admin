import api from "@/api";
import Vue from "vue";

export default {
    actions: {
        async GetListTour(_, options) {
            let response = await Vue.axios({
                method: "GET",
                url: api.GetListTour,
                params: options,
            });
            return response.data;
        },
        async GetTour(_, tourId) {
            let response = await Vue.axios({
                method: "GET",
                url: api.params("GetTour", { id: tourId }),
            });
            return response.data;
        },
        async CreateTour(_, entry) {
            let response = await Vue.axios({
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                method: "POST",
                url: api.CreateTour,
                data: entry,
            });
            return response.data;
        },
        async UpdateTour(_, entry) {
            let response = await Vue.axios({
                method: "POST",
                url: api.params("UpdateTour", { id: entry._id }),
                data: entry,
            });
            return response.data;
        },
        async DeleteTour(_, id) {
            let response = await Vue.axios({
                method: "POST",
                url: api.params("DeleteTour", { id }),
            });
            return response.data;
        },
    },
};
