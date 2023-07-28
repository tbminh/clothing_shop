<template>
    <TheHeader />
    <div class="" style="height: '100vh';">
      <h1>404 - Trang không tìm thấy</h1>
      <!-- Thêm nội dung hoặc giao diện tùy ý -->
    </div>
    <TheFooter />

  </template>
  <script>
  import TheHeader from './components/TheHeader.vue';
  import TheFooter from './components/TheFooter.vue';
  import axios from 'axios';
  export default {
     
      components: {
          TheHeader,
          TheFooter
      }
  }
  </script>