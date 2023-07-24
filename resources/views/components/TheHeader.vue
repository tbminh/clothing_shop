

<style type="text/css">
.fixed-top {
  top: -40px;
  transform: translateY(40px);
  transition: transform .3s;
}

.login {
  position: relative;
}

.login .dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
}

.login:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  border-radius: 0px;
  padding-bottom: 0px;
  padding-top: 0px;
}
.dropdown-divider{
  padding:0;
  margin:0;
}
</style>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser, fas,faShoppingBag } from '@fortawesome/free-solid-svg-icons'

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
      if (window.scrollY >= 50 ) {
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
    <div class="bg-light py-2">
      <div class="container-fluid d-none d-sm-block">
        <div class="row">
          <div class="col-3">
            <font-awesome-icon :icon="['fas', 'shopping-bag']" :class="['beat-fade']" size="lg" style="color: #1c4387;" />
          </div>
        </div>
      </div>
      <div class="container border">
        <div class="row">
          <div class="col-12 px-auto text-center">
            <h1>Nhãn hiệu</h1>
          </div>
        </div>
      </div>
    </div>

    <nav :class="navbarClasses" class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand px-5" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main_nav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item px-5"><a class="nav-link fs-5 fw-bold" href="#">Trang chủ</a></li>
            <li class="nav-item dropdown login ">
              <a class="nav-link  px-5 fs-5 fw-bold dropdown-toggle" href="#â" @mouseenter="toggleDropdown(true)"
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
            <li class="nav-item px-5 "><a class="nav-link fs-5 fw-bold" href="#">Giới thiệu</a></li>
            <li class="nav-item px-5 "><a class="nav-link fs-5 fw-bold" href="#">Blog</a></li>
            <li class="nav-item px-5  "><a class="nav-link fs-5 fw-bold" href="#">Liên hệ</a></li>

          </ul>
          <ul class="navbar-nav ms-auto mx-5">
            <li class="nav-item dropdown login  px-5">
              <a class="nav-link fs-5 fw-bold dropdown-toggle" href="#" @mouseenter="toggleDropdown(true)"
                @mouseleave="toggleDropdown(false)">
                <font-awesome-icon :icon="['fas', 'user']" class="fa-lg" /></a>
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
            <li class="nav-item dropdown login d-md-none px-5">
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
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>


