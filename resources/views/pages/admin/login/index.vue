<template>
  <section class="m-0 p-0">
    <div class="container-fluid m-0 p-0 overflow-hidden ">
      <div class="login-box ">
        <div class="row d-flex align-items-center">
          <div class="col-sm-6  ">
            <div class="logo">
              <span class="logo-font">Ad</span>min
            </div>
            <br>
            <h3 class="header-title">
              <div class="logo">
                Đăng<span class="logo-font"> Nhập</span>
              </div>
            </h3>
            <form @submit.prevent="login" class="sign-in-form ">
              <div class="input-field">
                <font-awesome-icon :icon="['fas', 'user-cog']" class="fa-lg iconinput" />
                <input type="email" placeholder="Email" v-model="data.email" required>
              </div>
              <div class="input-field">
                <font-awesome-icon :icon="['fas', 'lock']" class="fa-lg iconinput" />
                <input placeholder="Mật khẩu" v-bind:type="showPassword ? 'text' : 'password'" v-model="data.password"
                  required>
                <span @click="togglePasswordVisibility">
                  <font-awesome-icon :icon="showPassword ? ['fas', 'eye'] : ['fas', 'eye-slash']"
                    class="fa-lg showpass" />
                </span>
              </div>
              <!-- <input type="submit" :value=" loading ? '<font-awesome-icon :icon="['fas', 'spinner']" spin style="color: #010409;" />': 'Đăng nhập'" class=" buttonsubmit">
               -->
              <button @click="login" :disabled="loading"  class="buttonsubmit">
                <template v-if="loading">
                  <font-awesome-icon :icon="['fas', 'spinner']" spin style="color: #010409;" />
                </template>
               
                  Đăng nhập
               
              </button>
            </form>
          </div>
          <div class="col-sm-6 pt-5  hide-on-mobile">
            <div id="demo" class="carousel slide " data-bs-ride="carousel">
              <div class="carousel-inner ">
                <div class="carousel-item active">
                  <div class="slider-feature-card bg-transparent">
                    <img src="../../../../img/signin.svg">
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="slider-feature-card bg-transparent">
                    <img src="../../../../img/signup.svg">
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="slider-feature-card bg-transparent">
                    <img src="../../../../img/bgsilde1.svg">
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="slider-feature-card bg-transparent">
                    <img src="../../../../img/bgsilde2.svg">
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#demo" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              </a>
              <a class="carousel-control-next" href="#demo" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
              </a>
            </div>


          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Cookies from 'js-cookie';
import './stylelogin.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, fas, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
library.add(faUser, fas, faShoppingBag);
const showPassword = ref(false);
const loading = ref(false);
// Method to toggle password visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const data = ref({
  value: {
    email: 'admin@admin.vn',
    password: '12345'
  }
});

const login = () => {
  loading.value=true;
  axios.post('/api/admin/login', {
    email: data.value.email,
    password: data.value.password
  })
    .then(response => {
      if (!response.data.data || response.errors) {
        const notify = () => {
          toast(response.data.message, {
            autoClose: 2000,
          }); // ToastOptions
        }
        notify(); // Call the notify function to show the toast

        console.log('mess', response.data.message)
      } else if (response.data.data && response.data.token) {
        const Hour = 8 / 24;
        Cookies.set('admin', JSON.stringify(response.data.data), { expires: Hour });
        Cookies.set('admin_token', response.data.token, { expires: Hour });
        const url = new URL('admin/', window.location.origin)
        window.location.href = url.toString()

      }
      
    })
    .catch(error => {
      // Xử lý lỗi nếu có
      console.error(error);
    });
    loading.value=false;
};
</script>