<template>
  <section class="m-0 p-0">
    <div class="container-fluid m-0 p-0 overflow-hidden">
      <div class="login-box">
        <div class="row">
          <div class="col-sm-6">
            <div class="logo">
              <span class="logo-font">Go</span>Snippets
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <br>
            <h3 class="header-title">Đăng nhập admin</h3>
            <form class="login-form">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="UserName">
              </div>
              <div class="form-group">
                <input type="Password" :type="showPassword ? 'text' : 'password'" class="form-control"
                  placeholder="Password">
                <span class="password-toggle" @click="togglePasswordVisibility">
                  <font-awesome-icon :icon="showPassword ? ['fas', 'eye'] : ['fas', 'eye-slash']"     class="fa-lg" />
                </span>
              </div>
              <div class="form-group">
                <button class="btn btn-primary btn-block">Đăng nhập admin</button>
              </div>

            </form>
          </div>
          <div class="col-sm-6 hide-on-mobile">
            <div id="demo" class="carousel slide" data-bs-ride="carousel">
              <!-- The slideshow -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="slider-feature-card bg-transparent">
                    <img src="../../../../img/signin.svg" style="{{ width:'100px' }}">
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="slider-feature-card bg-transparent">
                    <img src="../../../../img/signup.svg" style="{{ width:'100px'}}">
                  </div>
                </div>
              </div>
              <!-- Left and right controls -->
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
import './stylelogin.css';
const showPassword = ref(false);

// Method to toggle password visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>