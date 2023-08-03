<template>
  <div class="container  border">
    <table ref="dataTable" class="w-100 border"></table>
  </div>
</template>

<script>
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import axios from 'axios';
// import vietnamese from '../../../../json/vndatatable.json';
import { format } from 'date-fns';
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get('/api/admin_users')
        .then(response => {
          this.items = response.data.data;
          this.initDataTable();
          this.formatDateTime();
        })
        .catch(error => {
          console.error(error);
        });
    },
    initDataTable() {
      this.items.forEach((item, index) => {
        item.stt = index + 1;
        item.created_at = item.created_at ? format(new Date(item.created_at), 'dd/MM/yyyy HH:mm:ss') : '';
        item.updated_at = item.updated_at ? format(new Date(item.updated_at), 'dd/MM/yyyy HH:mm:ss') :'';

      });

      $(this.$refs.dataTable).DataTable({
        data: this.items,
        columns: [
          { data: 'stt', title: 'STT' },
          // { data: 'id', title: 'ID' },
          { data: 'name', title: 'Name' },
          { data: 'email', title: 'Email' },
          { data: 'roles', title: 'Roles' },
          { data: 'phone_number', title: 'Số điện thoại' },
          { data: 'created_at', title: 'Ngày tạo' },
          { data: 'updated_at', title: 'Ngày cập nhật' },
        ],
        language: {
          url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/vi.json',
        },
       
      });
    },
  },
};
</script>
<style>
table.dataTable tbody th,
table.dataTable tbody td {
  /* border: 1px solid #ccc; */
  border-collapse: collapse;
}

.even {
  background-color: #cdbaba !important;
  /* Màu cho hàng chẵn */
}

.old {
  background-color: #fff !important;
  /* Màu cho hàng lẻ */
}
</style>
