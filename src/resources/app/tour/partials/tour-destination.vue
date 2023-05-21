<template>
    <b-form-group>
        <label class="mb-1 font-weight-medium d-flex align-items-center">
            Điểm đến
        </label>
        <multiselect
            v-model="destination"
            :options="entries"
            @search-change="debouncedSearch"
            track-by="id"
            label="name"
            placeholder="Chọn điểm đến"
            :clear-on-select="false"
            :close-on-select="true"
            :hide-selected="false"
            :show-labels="false"
            :internal-search="false"
            :disabled="disable"
            :multiple="false">
            <span slot="noResult">Không tìm thấy điểm đến này</span>
            <span slot="noOptions">Danh sách trống</span>

            <template slot="option" slot-scope="{ option }">
                <div class="option__desc">
                    <span class="option__small">
                        {{ option.name }}
                    </span>
                </div>
            </template>
        </multiselect>
    </b-form-group>
</template>

<script>
import Multiselect from "vue-multiselect";
import debounce from "debounce";
import { mapActions } from "vuex";
// import { mapActions, mapGetters } from "vuex";

export default {
    name: "distributor-manufacture",
    components: { Multiselect },
    props: {
        value: Object,
    },
    data() {
        return {
            debouncedSearch: debounce(this.getData, 1000),
            destination : null, 
            entries: [],
            disable: false,
        };
    },
    watch: {
        destination: {
            handler: function () {
                console.log(this.destination);
                this.$emit("update", this.destination);
            },
            deep: true,
        },
        value : {
            handler : function () {
                this.destination = this.value
            }
        }
    },
    computed: {},
    methods: {
        ...mapActions("destination", ["GetListDestination"]),
        async getData() {
            let response = await this.GetListDestination();
            this.entries = response.destinations;
        },
    },
    created() {
        this.destination = this.value
        this.getData();
    },
    mounted() {},
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped></style>
