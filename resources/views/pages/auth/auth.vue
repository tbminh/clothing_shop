
<template>
    <div class="bodyauth">
    <div :class="{ 'authcontainer': true, 'sign-up-mode': signUpMode, 'sign-in-mode': signInMode, 'sign-up-mode2': signUpMode2, 'sign-in-mode2': signInMode2 }">
        <div class="signin-signup">
            <form action="" class="sign-in-form">
                <h2 class="title">Đăng nhập</h2>
                <div class="input-field">
                    <font-awesome-icon :icon="['fas', 'user']" class="fa-lg iconinput" />
                    <input type="text" placeholder="Tên người dùng">
                </div>
                <div class="input-field">
                    <font-awesome-icon :icon="['fas', 'lock']" class="fa-lg iconinput" />
                    <input type="password" placeholder="Mật khẩu">
                </div>
                <input type="submit" value="Đăng nhập" class="btn buttonsubmit">
                <p class="account-text">bạn chưa có tài khoản? <a href="#"  class="btn"  @click="signUpClick2">Đăng ký</a></p>

            </form>
            <form action="" class="sign-up-form">
                <h2 class="title">Đăng ký</h2>
                <div class="input-field">
                    <font-awesome-icon :icon="['fas', 'user']" class="fa-lg iconinput" />
                    <input type="text" placeholder="Tên người dùng">
                </div>
                <div class="input-field">
                    <font-awesome-icon :icon="['fas', 'envelope']" class="fa-lg iconinput" />
                    <input type="text" placeholder="Email">
                </div>
                <div class="input-field">
                    <font-awesome-icon :icon="['fas', 'phone']" class="fa-lg iconinput" />
                    <input type="text" placeholder="Số điện thoại">
                </div>
                <div class="input-field">
                    <font-awesome-icon :icon="['fas', 'lock']" class="fa-lg iconinput" />
                    <input type="password" placeholder="Mật khẩu">
                </div>
                <div class="input-field">
                    <font-awesome-icon :icon="['fas', 'lock']" class="fa-lg iconinput" />
                    <input type="password" placeholder="Xác nhận mật khẩu">
                </div>
                <input type="submit" value="Đăng ký" class=" buttonsubmit">
                <p class="account-text">Bạn đã có tài khoản? 
                    <a href="#" class="btn"  @click="signInClick2">Đăng nhập</a></p>


            </form>
        </div>
        <div class="panels-container">
            <div class="panel left-panel">
                <div class="content">
                    <h3>Logo Brand?</h3>
                    <p>Đây sẽ là phần giới thiệu về trang web của bạn</p>
                    <button class="buttonsubmit" id="sign-in-btn"  @click="signInClick">Đăng nhập</button>
                </div>
                <img src="../../../img/signin.svg" class="imageauth" >
            </div>
            <div class="panel right-panel">
                <div class="content">
                    <h3>Logo Brand?</h3>
                    <p>Đây sẽ là phần giới thiệu về trang web của bạn</p>
                    <button class="buttonsubmit" id="sign-up-btn" @click="signUpClick">Đăng ký</button>
                </div>
                <img src="../../../img/signup.svg" class="imageauth" >
            </div>
        </div>
    </div>
</div>
</template>
<script setup>
import './auth.css';
import { ref } from 'vue';

const signUpMode = ref(false);
const signInMode = ref(false);
const signUpMode2 = ref(false);
const signInMode2= ref(false);

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

</script>
