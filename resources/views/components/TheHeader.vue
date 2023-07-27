


<script>
import '../../css/header.css'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, fas, faShoppingBag } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, fas, faShoppingBag);
export default {
  data() {
    return {
      navbarClasses: '',
      showDropdown: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 50) {
        this.navbarClasses = 'fixed-top';
      } else {
        this.navbarClasses = '';
      }
    },
    toggleDropdown(show) {
      this.showDropdown = show;
    }
  }
};
</script>

<template>
  <header>
    <div class="">
      <div class="container-fluid d-none d-sm-block bg-dark ">
        <div class="col-11 mx-auto hea-info ">
          <font-awesome-icon :icon="['fas', 'phone']" class="bounce" /> (+84) 336 644 594 &emsp;&emsp;
          <font-awesome-icon :icon="['fas', 'envelope']" class="" /> dinhlamhuytak489@gmail.com
          <!-- <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="ms-auto" /> dinhlamhuytak489@gmail.com -->
        </div>
      </div>
      <div class="container-fluid">
        <div class="col-11 mx-auto hea-info2">
          <div class="row">
            <div class="col-2  d-flex align-items-center">LOGO</div>
            <div class="col-6  align-items-center" style="display: grid;">
              <div style="position: relative; ">
                <input type="search" class="textsearch" placeholder="Tìm kiếm..." />
                <button class="search-button">
                  <font-awesome-icon :icon="['fas', 'search']" class="" />
                </button>
              </div>
            </div>
            <div class="col-4  d-flex justify-content-end">
              <ul class="navbar-nav  d-flex flex-row ">
                <li class="nav-item dropdown login  mx-3  ">
                  <router-link to="/login" class="nav-link textnavlink dropdown-toggle" @mouseenter="toggleDropdown(true)"
                    @mouseleave="toggleDropdown(false)">
                    <font-awesome-icon :icon="['fas', 'user']" class="fa-lg" /> <span class="d-none d-sm-inline">My
                      Account</span>
                  </router-link>
                  <ul class="dropdown-menu dropdown-menu-right" v-if="showDropdown" @mouseenter="toggleDropdown(true)"
                    @mouseleave="toggleDropdown(false)">
                    <li class="m-0 p-0"><a class="dropdown-item  p-3 pr-5" href="#">Đăng nhập</a></li>
                    <li class="m-0 p-0">
                      <hr class="dropdown-divider">
                    </li>
                    <li class="m-0 p-0"><a class="dropdown-item 
                    p-3 pr-5" href="#">Đăng ký</a></li>
                    <li class="m-0 p-0">
                      <hr class="dropdown-divider">
                    </li>
                    <li class="m-0 p-0"><a class="dropdown-item 
                    p-3 pr-5" href="#">Đăng xuất</a></li>

                  </ul>
                </li>
                <!-- giỏ hàng -->
                <li class="nav-item dropdown login mx-3 ">
                  <router-link to="/" class="nav-link textnavlink dropdown-toggle" @mouseenter="toggleDropdown(true)"
                    @mouseleave="toggleDropdown(false)">
                    <font-awesome-icon :icon="['fas', 'shopping-bag']" class="fa-lg" /> <span
                      class="d-none d-sm-inline">Cart</span>
                  </router-link>
                  <ul class="dropdown-menu dropdown-menu-right" v-if="showDropdown" @mouseenter="toggleDropdown(true)"
                    @mouseleave="toggleDropdown(false)">
                    <li class="m-0 p-0"><a class="dropdown-item  p-3 pr-5" href="#">Đăng nhập</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

    <nav :class="navbarClasses" class="navbar navbar-expand-lg navbar-dark " style="background-color: #ffafcc;">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand px-5">Logo</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item  px-3"><a class="nav-link fs-5 fw-bold" href="#">Trang chủ</a></li>
            <li class="nav-item dropdown login px-3 ">
              <a class="nav-link  fs-5 fw-bold dropdown-toggle" href="#â" @mouseenter="toggleDropdown(true)"
                @mouseleave="toggleDropdown(false)">
                Sản phẩm</a>
              <ul class="dropdown-menu dropdown-menu-right" v-if="showDropdown" @mouseenter="toggleDropdown(true)"
                @mouseleave="toggleDropdown(false)">
                <li><a class="dropdown-item p-3 pr-5" href="#">Quần áo</a></li>
                <li class="m-0 p-0">
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item p-3 pr-5" href="#">Giầy dé</a></li>
              </ul>

            </li>
            <li class="nav-item  px-3 "><a class="nav-link fs-5 fw-bold" href="#">Giới thiệu</a></li>
            <li class="nav-item  px-3 "><a class="nav-link fs-5 fw-bold" href="#">Blog</a></li>
            <li class="nav-item  px-3  "><a class="nav-link fs-5 fw-bold" href="#">Liên hệ</a></li>
            <!-- khi thu nhỏ sẽ hiện ra -->
            <!-- <li class="nav-item dropdown login d-md-none px-5">
              <a class="nav-link fs-5 fw-bold dropdown-toggle" href="#" @mouseenter="toggleDropdown(true)"
                @mouseleave="toggleDropdown(false)">
                <font-awesome-icon :icon="['fas', 'shopping-bag']" class="fa-lg" /></a>
              <ul class="dropdown-menu dropdown-menu-right" v-if="showDropdown" @mouseenter="toggleDropdown(true)"
                @mouseleave="toggleDropdown(false)">
                <li class="m-0 p-0"><a class="dropdown-item 
                    p-3 pr-5" href="#">Đăng nhập</a></li>
                <li class="m-0 p-0">
                  <hr class="dropdown-divider">
                </li>
                <li class="m-0 p-0"><a class="dropdown-item 
                    p-3 pr-5" href="#">Đăng ký</a></li>
                <li class="m-0 p-0">
                  <hr class="dropdown-divider">
                </li>
                <li class="m-0 p-0"><a class="dropdown-item 
                    p-3 pr-5" href="#">Đăng xuất</a></li>
              </ul>
            </li> -->

          </ul>

        </div>
      </div>
    </nav>
  </header>
</template>


