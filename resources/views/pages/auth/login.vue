
<template>
    <div class="section fmlogin ">
        <div class="container ">
            <div class="row full-height justify-content-center  p-0 m-0">
                <div class="col-12 text-center   m-0">
                    <div class="section text-center">
                        <h6 class="mb-0 pb-3 mt-1">
                            <span>Đăng nhập</span>
                            <span>Đăng ký</span>
                        </h6>
                        <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                        <label for="reg-log"></label>
                        <div class="card-3d-wrap mx-auto">
                            <div class="card-3d-wrapper">
                                <div class="card-front">
                                    <div class="center-wrap">
                                        <div class="section text-center">
                                            <h4 class="mb-4 pb-2 text-white">Log In</h4>
                                            <div class="form-group"> <input type="email" name="logemail" class="form-style"
                                                    placeholder="Your Email" id="logemail" autocomplete="none">
                                                <i class="input-icon fa fa-at"></i>
                                            </div>
                                            <div class="form-group mt-2"> <input type="password" name="logpass"
                                                    class="form-style" placeholder="Your Password" id="logpass"
                                                    autocomplete="none">
                                                <i class="input-icon fa fa-lock "></i>
                                            </div> <a href="#" class="btn mt-4">Login</a>
                                          
                                        </div>
                                    </div>
                                </div>
                                <div class="card-back"> 
                                    <div class="center-wrap">
                                        <div class="section text-center">
                                            <h4 class="mb-4 pb-3 text-white">Đăng ký</h4>
                                            <div class="form-group"> 
                                                <input type="text" name="logname" class="form-style"
                                                    placeholder="Tên đầy đủ" id="logname" autocomplete="none"> 
                                                    <i class="input-icon fa fa-user"></i> 
                                                </div>
                                            <div class="form-group mt-2"> 
                                                <input type="email" name="logemail"
                                                    class="form-style" placeholder="Email" id="logemail"
                                                    autocomplete="none"> 
                                                    <i class="input-icon fa fa-at"></i> 
                                                </div>
                                            <div class="form-group mt-2"> 
                                                <input type="password" name="logpass"
                                                    class="form-style" placeholder="Mật khẩu" id="logpass"
                                                    autocomplete="none"> <i class="input-icon fa fa-lock"></i> 
                                                </div> 
                                            <div class="form-group mt-2"> 
                                                <input type="password" name="logpass"
                                                    class="form-style" placeholder="Xác nhận lại mật khẩu" id="logpass"
                                                    autocomplete="none"> <i class="input-icon fa fa-lock"></i> 
                                                </div> 
                                                <a href="#" class="btn mt-4">Đăng ký</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import './login.css';
</script>
