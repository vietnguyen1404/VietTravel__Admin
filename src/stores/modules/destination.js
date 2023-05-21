import api from "@/api"
import Vue from "vue"

export default {
    actions : {
        async GetListDestination() {
            let response = await Vue.axios({
                method : "GET",
                url : api.GetListDestination
            })
            
            return response.data
        },
        async CreateDestination(_, entry) {
            let response = await Vue.axios({
                method: "POST",
                url: api.CreateDestination,
                data: entry,
            });
            return response.data;
        },
        async GetDestination(_, id) {
            let response = await Vue.axios({
                method: "GET",
                url: api.params("GetDestination", { id }),
            });
            return response.data;
        },
        async UpdateDestination(_, entry) {
            let response = await Vue.axios({
                method: "POST",
                url: api.params("UpdateDestination", { id: entry._id }),
                data: entry,
            });
            return response.data;
        },
    }
}