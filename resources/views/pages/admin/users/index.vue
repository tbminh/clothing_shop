<template >
  <div class="container bg-white h-100">
    <div class="table-responsive h-100">
      <table ref="dataTable" class="w-100 bg-white border"></table>
    </div>
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
        responsive: true,
       
      });
    },
  },
};
</script>
<style>
.dataTables_wrapper  {
  /* margin-top: 10px !important; */
  padding-top: 20px; 
  padding-bottom: 20px;
  background-color: transparent !important;

}
.dataTable thead th{
  background-color: #3c096c !important;
  font-weight: bold;
  text-align: center;
  color:white;
}
table.dataTable tbody th,
table.dataTable tbody td {
  border-top: 1px solid #ff1979;
  border-bottom: 1px solid #ff1979;
  border-collapse: collapse;
}
.even {
  background-color: #bbdefb !important;
}
.old {
  background-color: #fff !important;
}
.dataTables_filter{
  margin-bottom: 10px;
}

/* .table-responsive {
  overflow-x: auto;
} */
/* chơi thử */
.dataTables_scrollHead {
  overflow: hidden;
}

.dataTables_scrollHeadInner {
  padding-right: 17px; /* Add extra padding to avoid overflow due to scrollbar */
}

.dataTables_scrollHeadInner table {
  width: 100%;
  margin-bottom: 0;
}

/* Adjust the styles of the header cells if needed */
.table-responsive {
  overflow-y: auto;
  max-height: calc(100vh - 100px); /* Adjust 100px to accommodate other elements on the page if needed */
}
.dataTables_scrollHead th {
  background-color: #3c096c !important;
  font-weight: bold;
  text-align: center;
  color: white;
  border-top: 1px solid #ff1979;
  border-bottom: 1px solid #ff1979;
}
</style>
