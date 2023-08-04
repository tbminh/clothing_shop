<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-nav mb-3 ">
        <div class="container">
            <a class="navbar-brand text-white" href="#">Logo</a>
            <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ">
                    <li class="nav-item ">
                        <router-link to="/admin/" class="nav-link" :class="{ active: isLinkActive('/admin/') }">Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin/users" class="nav-link" :class="{ active: isLinkActive('/admin/users') }">User</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/admin/roles" class="nav-link" :class="{ active: isLinkActive('/admin/roles') }" >Sản phẩm</router-link>
                    </li>
                    <li class="nav-item">
                        <!-- <a class="nav-link" href="#">Blog</a> -->
                        <router-link to="/admin/blog" class="nav-link" :class="{ active: isLinkActive('/admin/blog') }" >Blog</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Đơn hàng
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="spacer"></li>
                </ul>
                <ul class="navbar-nav  d-block d-sm-flex  justify-content-end ms-auto">
                    <li class="nav-item dropdown liaccount me-0 ms-auto d-block d-sm-flex  justify-content-end">
                        <router-link :to="admin !== null ? '/' : '/login'" class="nav-link dropdown-toggle"
                            id="navDropdowacc" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <font-awesome-icon :icon="['fas', 'user']" class="fa-lg" />
                            <span class="">&ensp;{{ admin ? admin.name : '' }}</span>
                        </router-link>
    
                        <ul class="dropdown-menu dropdown-menu-right" v-if="admin !== null"
                            @aria-labelledby="navDropdowacc">
                            <li class="m-0 p-0"><button class="dropdown-item btndropdownmenu " @click="logout">Đăng
                                    xuất</button></li>
                           
                        </ul>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
</template>
<script></script>
<script setup>
import Cookies from 'js-cookie';
const logout = () => {
    Cookies.remove('admin');
    Cookies.remove('admin_token');
    const url = new URL('admin/login', window.location.origin)
    window.location.href = url.toString()
}
</script>
<script>
// import '../../css/header.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, fas, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
library.add(faUser, fas, faShoppingBag);
// import { useRouter } from 'vue-router';

const isLinkActive = (path) => {
  const router = useRouter();
  return router.currentRoute.value.path === path;
};
export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      navbarClasses: '',
      showDropdown: false,
      admin: null,
    };
  },
  mounted() {
    const myauth = Cookies.get('admin');
    if (myauth !== null && myauth !== undefined) {
      this.admin = JSON.parse(myauth);
    }
  },
 
  methods: {
    

  }
};
</script>
<style>
.active {
    border-bottom: 3px solid blue;
    margin-bottom: 0;
    font-weight: bolder;
    color: white !important;
}
.nav-item .nav-link:hover,
.nav-item .nav-link:focus {
    color: wheat;
}
.btndropdownmenu:hover,
.btndropdownmenu:focus {
    color: rgb(0, 0, 0) !important;
}
.bg-nav {
    background-color: #03045e;
}

.dropdown-menu {
    background-color: #023e8a;
}

.bg-nav a,
.btndropdownmenu,
button {
    color: white;
}

.bg-nav .nav-link {
    padding-left: 40px;
    padding-right: 40px;
    margin-left: 10px;
    margin-right: 10px;

}

.navbar-toggler-icon {
    color: white !important;
    background-color: white;
    border: 2px solid white !important;
    outline: white;

}

.liaccount {
    /* float: right !important; */
    margin-left: auto;
    /* justify-content: flex-end; */
    /* display: flex; */
    /* border:1px dashed rgb(255, 255, 255); */
}
body{
  background-color: #caf0f8;
}
</style>