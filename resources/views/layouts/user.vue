<style>
@keyframes beat-fade {

    0%,
    100% {
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
    <TheHeader />
    <router-view></router-view>
    <TheFooter />
</template>
<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import axios from 'axios';
export default {
   
    components: {
        TheHeader,
        TheFooter
    }
}
</script>