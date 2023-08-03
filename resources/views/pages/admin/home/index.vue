<template>
 
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
