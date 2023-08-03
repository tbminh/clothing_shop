<template>
  <div>
    <!-- Button để mở/closed sidebar -->
    <button class="btn btn-primary" @click="toggleSidebar" v-show="!showSidebar">
      Mở Sidebar
    </button>

    <!-- Sidebar -->
    <aside
      id="sidebar"
      class="bg-light border-end vh-100 shadow-sm"
      :class="{ 'active': showSidebar }"
      @click="closeSidebar"
    >
      <div id="sidebar-nav" class="list-group border-0 rounded-0">
        <div class="p-2">
          <h4>Admin Dashboard</h4>
        </div>

        <ul class="list-group">
          <li class="list-group-item"><a href="#" class="text-decoration-none text-black">Dashboard</a></li>
          <li class="list-group-item"> <a href="#" class="text-decoration-none text-black">Home</a> </li>
          <li class="list-group-item"> <a href="#" class="text-decoration-none text-black">Blogs</a> </li>
          <li class="list-group-item active" aria-current="true"> <a href="#" class="text-decoration-none text-white">Inbox</a> </li>
          <li class="list-group-item"> <a href="#" class="text-decoration-none text-black">Settings</a></li>
        </ul>
      </div>
    </aside>

    <!-- Main content -->
    <main :style="{ 'margin-left': showSidebar ? '250px' : '0' }">
      <!-- Phần menu -->
      <div class="row fixed-top" style="background-color: #fff; padding: 10px;">
        <div class="col">
          <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" class="border rounded-3 p-1 text-decoration-none">MENU</a>
        </div>
        <div class="col">
          <div class="page-header pt-3">
            <h2>Bootstrap 5 Sidebar Menu</h2>
          </div>
        </div>
      </div>

      <hr>
      <div class="row">
        <div class="col-md-4">
          <!-- ... -->
        </div>
        <div class="col-md-4">
          <!-- ... -->
        </div>
        <div class="col-md-4">
          <!-- ... -->
        </div>
      </div>
      <div class="mt-5">
        <table class="table">
          <!-- ... -->
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    closeSidebar() {
      if (this.showSidebar) {
        this.showSidebar = false;
      }
    },
  },
};
</script>

<style>
/* ... */
</style>
