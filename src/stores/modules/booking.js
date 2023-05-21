// import router from "@/router";
import api from "@/api";
import Vue from "vue";
// import ability from "../ability";
// import _ from "lodash";

export default {

    actions: {
        async GetListBooking(_, options) {
            let response = await Vue.axios({
                method: "GET",
                url: api.GetListBooking,
                params : options
            });
            // if (response.data.code === 200) {
   
            // }
            return response.data;
        },
        async ChangeStatusBooking(_, options) {
            let response = await Vue.axios({
                method: "POST",
                url: api.params("ChangeStatusBooking", { id: options.id }),
                data : {
                    status : options.status
                }
            });
            // if (response.data.code === 200) {
   
            // }
            return response.data;
        },
    },
};
