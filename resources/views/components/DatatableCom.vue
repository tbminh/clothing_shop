<template>
    <div class="container  border">
      <table ref="dataTable" class="w-100 border"></table>
    </div>
  </template>
  
  <script>
  import $ from 'jquery';
  import 'datatables.net-dt/css/jquery.dataTables.css';
  import 'datatables.net-dt/js/dataTables.dataTables';
  import { format } from 'date-fns';
  
  export default {
    props: {
      data: {
        type: Array,
        required: true,
      },
      columns: {
        type: Array,
        required: true,
      },
      languageUrl: {
        type: String,
        default: '//cdn.datatables.net/plug-ins/1.13.6/i18n/vi.json',
      },
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData() {
        
        this.data.forEach((item, index) => {
          item.stt = index + 1;
          item.created_at = format(new Date(item.created_at), 'dd/MM/yyyy HH:mm:ss');
          item.updated_at = format(new Date(item.updated_at), 'dd/MM/yyyy HH:mm:ss');
        });
  
        $(this.$refs.dataTable).DataTable({
          data: this.data,
          columns: this.columns,
          language: {
            url: this.languageUrl,
          },
        });
      },
    },
  };
  </script>
  
  <style>
  /* Các kiểu CSS cho DataTables */
  </style>
  