<template>
  <div>
    <data-table
      :data="items"
      :columns="tableColumns"
      :languageUrl="languageUrl"
    />
  </div>
</template>

<script>
import DataTable from '../../../components/DatatableCom.vue';
import axios from 'axios';


export default {
  components: {
    DataTable,
  },
  data() {
    return {
      items: [], // Đặt giá trị mặc định là một mảng rỗng
      tableColumns: [
      { data: 'stt', title: 'STT' },
          // { data: 'id', title: 'ID' },
          { data: 'name', title: 'Name' },
          { data: 'email', title: 'Email' },
          { data: 'roles', title: 'Roles' },
          { data: 'phone_number', title: 'Số điện thoại' },
          { data: 'created_at', title: 'Ngày tạo' },
          { data: 'updated_at', title: 'Ngày cập nhật' },
      ],
      languageUrl: '//cdn.datatables.net/plug-ins/1.13.6/i18n/vi.json',
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      axios.get('/api/admin_users')
        .then(response => {
          this.items = response.data.data; // Đưa dữ liệu từ API vào items
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
