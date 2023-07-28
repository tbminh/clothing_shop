
<template>
    <div class="bodyauth">
        <div
            :class="{ 'authcontainer': true, 'sign-up-mode': signUpMode, 'sign-in-mode': signInMode, 'sign-up-mode2': signUpMode2, 'sign-in-mode2': signInMode2 }">
            <div class="signin-signup">
                <form @submit.prevent="login" class="sign-in-form">
                    <h2 class="title">Đăng nhập</h2>
                    <div class="input-field">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="fa-lg iconinput" />
                        <input type="email" v-model="data.email" placeholder="Email">
                    </div>
                    <div class="input-field">
                        <font-awesome-icon :icon="['fas', 'lock']" class="fa-lg iconinput" />
                        <input placeholder="Mật khẩu" v-model="data.password"
                            v-bind:type="showPassword ? 'text' : 'password'"
                            :placeholder="showPassword ? 'Mật khẩu' : 'Ẩn mật khẩu'">
                        <span @click="togglePasswordVisibility">
                            <font-awesome-icon :icon="showPassword ? ['fas', 'eye'] : ['fas', 'eye-slash']"
                                class="fa-lg showpass" />
                        </span>
                    </div>
                    <input type="submit" value="Đăng nhập" class="btn buttonsubmit">
                    <p class="account-text">bạn chưa có tài khoản? <a href="#" class="btn py-0 px-2"
                            @click="signUpClick2">Đăng ký</a>
                    </p>

                </form>
                <form @submit.prevent="register" class="sign-up-form">
                    <h2 class="title">Đăng ký</h2>
                    <div class="input-field">
                        <font-awesome-icon :icon="['fas', 'user']" class="fa-lg iconinput" />
                        <input type="text" v-model="data.resname" placeholder="Tên người dùng">
                    </div>
                    <div class="input-field">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="fa-lg iconinput" />
                        <input type="text" v-model="data.resemail" placeholder="Email">
                    </div>
                    <div class="input-field">
                        <font-awesome-icon :icon="['fas', 'phone']" class="fa-lg iconinput" />
                        <input type="text" v-model="data.resphone" placeholder="Số điện thoại">
                    </div>
                    <div class="input-field">
                        <font-awesome-icon :icon="['fas', 'lock']" class="fa-lg iconinput" />
                        <input placeholder="Mật khẩu" v-model="data.respassword"
                            v-bind:type="showPassword2 ? 'text' : 'password'"
                            :placeholder="showPassword2 ? 'Mật khẩu' : 'Ẩn mật khẩu'">
                        <span @click="togglePasswordVisibility2">
                            <font-awesome-icon :icon="showPassword2 ? ['fas', 'eye'] : ['fas', 'eye-slash']"
                                class="fa-lg showpass" />
                        </span>
                    </div>
                    <div class="input-field">
                        <font-awesome-icon :icon="['fas', 'lock']" class="fa-lg iconinput" />
                        <input placeholder="Xác nhận mật khẩu" v-model="data.c_password"
                            v-bind:type="showPassword2 ? 'text' : 'password'"
                            :placeholder="showPassword2 ? 'Mật khẩu' : 'Ẩn mật khẩu'">
                        <span @click="togglePasswordVisibility2">
                            <font-awesome-icon :icon="showPassword2 ? ['fas', 'eye'] : ['fas', 'eye-slash']"
                                class="fa-lg showpass" />
                        </span>
                    </div>
                    <input type="submit" value="Đăng ký" class=" buttonsubmit">
                    <p class="account-text">Bạn đã có tài khoản?
                        <a href="#" class="btn py-0 px-2" @click="signInClick2">Đăng nhập</a>
                    </p>


                </form>
            </div>
            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>Logo Brand?</h3>
                        <p>Đây sẽ là phần giới thiệu về trang web của bạn</p>
                        <button class="buttonsubmit btneff" id="sign-in-btn" @click="signInClick">Đăng nhập</button>
                    </div>
                    <img src="../../../img/signin.svg" class="imageauth">
                </div>
                <div class="panel right-panel">
                    <div class="content">
                        <h3>Logo Brand?</h3>
                        <p>Đây sẽ là phần giới thiệu về trang web của bạn</p>
                        <button class="buttonsubmit btneff" id="sign-up-btn" @click="signUpClick">Đăng ký</button>
                    </div>
                    <img src="../../../img/signup.svg" class="imageauth">
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import './auth.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import { ref } from 'vue';
const signUpMode = ref(false);
const signInMode = ref(false);
const signUpMode2 = ref(false);
const signInMode2 = ref(false);

const signUpClick = () => {
    signUpMode.value = true;
    signInMode.value = false;
};

const signInClick = () => {
    signUpMode.value = false;
    signInMode.value = true;
};
const signUpClick2 = () => {
    signUpMode2.value = true;
    signInMode2.value = false;
};
const signInClick2 = () => {
    signUpMode2.value = false;
    signInMode2.value = true;
};
const showPassword = ref(false);
const showPassword2 = ref(false);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};
const togglePasswordVisibility2 = () => {
    showPassword2.value = !showPassword2.value;
};
const data = ref({
    value: {
        email: '',
        password: ''
    }
});
const login = () => {
    axios.post('/api/login', {
        email: data.value.email,
        password: data.value.password
    })
        .then(response => {
            const oneHour = 8 / 24; // 1/24 tương ứng với 1 giờ
            Cookies.set('user', JSON.stringify(response.data.data), { expires: oneHour });
            Cookies.set('user_token', response.data.token, { expires: oneHour });
            const url = new URL('/', window.location.origin)
            window.location.href = url.toString()
        })
        .catch(error => {
            // Xử lý lỗi nếu có
            console.error(error);
        });
};
const register = () => {
    axios.post('/api/register', {
        phone_number: data.value.resphone,
        email: data.value.resemail,
        name: data.value.resname,
        password: data.value.respassword,
        c_password: data.value.c_password,
    })
        .then(response => {
            const oneHour = 8 / 24; // 1/24 tương ứng với 1 giờ
            Cookies.set('user', JSON.stringify(response.data.data), { expires: oneHour });
            Cookies.set('user_token', response.data.token, { expires: oneHour });
            const url = new URL('/', window.location.origin)
            window.location.href = url.toString()
        })
        .catch(error => {
            console.error(error);
        });

};

</script>
