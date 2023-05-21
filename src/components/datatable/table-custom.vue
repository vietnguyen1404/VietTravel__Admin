<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead style="color: #7a7a7a">
                <slot name="thead"></slot>
            </thead>
            <tbody>
                <slot name="tbody"></slot>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "c-table",
};
</script>

<style lang="scss" scoped>
th {
    background-color: #f8faff !important;
    color : #64c5b1;
    padding: 1rem !important;
}
tbody td {
    padding: 1rem !important;
}
</style>
