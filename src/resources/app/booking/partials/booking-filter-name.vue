<template>
    <div class="search-box">
      <label class="mb-1 font-weight-normal"> Tìm kiếm </label>
      <div class="position-relative">
        <input
          type="text"
          class="form-control form-search"
          style="height: 38px"
          v-model="keyword"
          :placeholder="placeholder"
        />
        <span
          class="position-absolute"
          style="top: 55%; transform: translateY(-50%); right: 10px"
          ><i class="bx bx-search"></i
        ></span>
      </div>
    </div>
  </template>
  
  <script>
  import debounce from "debounce";
  
  export default {
    name: "filter-search",
    data: function () {
      return {
        keyword: "",
        debouncedSearch: debounce(this.runSearch, 500),
        loaded: false,
      };
    },
    props: {
      placeholder: {
        default: "Nhập ký tự",
      },
    },
    watch: {
      keyword: {
        handler: function () {
          if (this.loaded) this.debouncedSearch();
        },
      },
      $route(to) {
        this.keyword = to.query.search;
      },
    },
    methods: {
      runSearch() {
        let query = { ...this.$route.query };
        if (this.keyword) {
          query.search = this.keyword;
          console.log(query.search);
        } else {
          delete query.search;
        }
  
        if (this.$route.query["search"] != this.keyword) {
          this.$router.push({ name: this.$route.name, query: query });
        }
      },
    },
    created() {
      if (this.$route.query.search) this.keyword = this.$route.query.search;
      else this.keyword = this.pagination ? this.pagination.search : "";
  
      let self = this;
      setTimeout(function () {
        self.loaded = true;
      }, 1000);
      // this.renderPlaceholder();
    },
    mounted() {},
  };
  </script>
  
  <style scoped lang="scss">
  .form-search {
    padding-right: 30px;
    font-weight: 400;
    background: #f0f0f0;
    height: 41px !important;
  }
  </style>
  