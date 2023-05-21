<template>
    <div>
        <b-form-group>
            <label for="" class="mb-3 font-weight-bold"
                >Lịch trình<span class="text-danger">* </span>
                <a @click.prevent="addSchedule" ><i class="fa-solid fa-plus"></i></a
            ></label>
        </b-form-group>
        <b-form-group
            class="schedule-item "
            v-for="(item, index) in schedule"
            :key="item.id">
            <label class="d-flex align-items-center">
                <i
                    class="text-success fas fa-circle"
                    style="font-size: 8px"></i>
                <div>Day {{ index + 1 }}</div>
            </label>
            <b-row>
                <b-col lg="4" class="my-3">
                    <b-form-input
                        v-model="item.title"
                        class="schedule-item-title"
                        placeholder="Nhập tiêu đề" />
                </b-col>

                <b-col lg="7">
                    <VueEditor
                        v-model="item.description"
                        class="schedule-item-description"
                        placeholder="Nhập mô tả" />
                </b-col>
                <b-col lg="1" class="d-flex align-items-center">
                    <a @click.prevent="deleteScheduleItem">
                        <i class="fa-solid fa-trash" ></i>
                    </a>
                </b-col>
            </b-row>
        </b-form-group>
    </div>
</template>
<script>
import { VueEditor } from "vue2-quill-editor";
export default {
    props: {
        value: Array,
    },
    components: {
        VueEditor,
    },
    data: () => ({
        text: "",
        schedule: [],
    }),
    watch: {
        description: {
            handler: function () {
                this.$emit("update", this.schedule);
            },
        },
        "value" :{
            handler : function() {
                this.schedule = this.value
            },
        }
    },
    methods: {
        addSchedule() {
            this.schedule.push({
                id : this.schedule.length + 1,
                title: "",
                description: "",
            });
        },
        deleteScheduleItem() {
  
        }
    },
    created() {
        this.schedule = this.value;
    },
};
</script>
<style scoped>
.schedule-item-description {
    width: 100%;
    border-radius: 10px;
    padding: 6px;
}
svg {
    font-size: 1.3rem;
    cursor: pointer;
    color: #64c5b1;
}
.fa-circle {
    margin-right: 6px;
}


</style>
