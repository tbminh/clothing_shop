<template>
  <div>
    <li v-for="user in users" :key="user.id">{{ user.name }}</li>
  </div>
</template>
<script>
import axios from 'axios';
import Cookies from 'js-cookie';

export default {
data() {
  const myADtoken = Cookies.get('admin_token');
  return {
    users: [],
  };
},
mounted() {
  // Call the API endpoint to get users data
  axios.get('/api/admin_users')
    .then(response => {
      this.users = response.data.data;
      console.log('user',  response.data)
    })
    .catch(error => {
      console.error(error);
    });
},
};
</script>