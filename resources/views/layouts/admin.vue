<style>
@keyframes beat-fade {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0;
  }
}
</style>
<template>
   <!-- <TheHeader /> -->
    <router-view></router-view>
</template>
<script>
// import TheHeader from '../components/TheHeader.vue';
export default {
    components:{
        // TheHeader
    }
}
</script>