<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faLock, faEye } from '@fortawesome/free-solid-svg-icons'

function showPassword() {
    const pw = document.getElementById('pw') as HTMLInputElement
    if (pw.type === 'password') {
        pw.type = 'text'
    } else {
        pw.type = 'password'
    }
}
</script>

<template>
    <div class="context">
        <div class="wrapper">
            <form>
                <h1>Login</h1>
                <div>demo</div>

                <div class="input-box">
                    <input type="text" placeholder="Username">
                    <FontAwesomeIcon :icon="faUser" class="icon" />
                </div>

                <div class="input-box">
                    <input id="pw" type="password" placeholder="Password">
                    <div class="icon-box" @click="showPassword()">
                        <FontAwesomeIcon :icon="faLock" class="icon password hand lock" />
                        <FontAwesomeIcon :icon="faEye" class="icon password hand eye" />
                    </div>
                </div>

                <div class="remember-forgot">
                    <label><input type="checkbox">Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="button" class="btn hand">Login</button>

                <div class="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>

    </div>
    <div class="area" >
        <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>
    </div >
</template>

<style scoped>
.context {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    max-height: 90%;
    position: absolute;
    top: 50vh;
    left: 50vw;
    text-align: center;
    color: #fff;
    border: 1px solid #868686;
    transform: translate(-50%, -50%);
    background-color: #291e1e56;
    border-radius: 15px;
    box-shadow: 0 0 10px 0 #9095f1;
    z-index: 999;
    backdrop-filter: blur(4px);

}

.context h1{
    margin-bottom: -5px;
    padding-bottom: 0;
    font-size: 3.2em
}

.wrapper {
    width: 420px;
    color: #fff;
}

.wrapper .input-box{
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px 0;

}

.input-box input {
    color: white;
    width: calc(100% - 100px);
    height: 100%;
    background: transparent;
    outline: none;
    border: 2px solid #ffffff2c;
    padding: 0px 40px 0px 20px;
    border-radius: 40px;
    caret-color: #919191;
}

.input-box input:hover {
    box-shadow: 0 0 10px 0 #9095f1;
}

.input-box input::placeholder {
    color: #919191;
}

.input-box .icon {
    position: absolute;
    top: 50%;
    right: 35px;
    transform: translate(0%, -40%);
    font-size: 1.2em;
}

.input-box .password:hover {
    color: #9095f1;
}

.wrapper .remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 25px 15px 25px;
}

.remember-forgot label input {
    accent-color: #9095f1;
    margin-right: 3px;
}

.remember-forgot a:hover {
    color: #9095f1;;
}

.register-link a:hover {
    color: #9095f1;
}

.icon-box:hover .lock,
.icon-box .eye {
    display: none;
}
.icon-box:hover .eye {
    display: inline;
}

.wrapper .btn {
    width: 90%;
    height: 45px;
    border: none;
    outline: none;
    border-radius: 40px;
    background-color: #9095f173;
    border: 2px solid #ffffff2c;
    color: #fff;
    font-size: 1.2em;
    font-weight: 600;
}

.btn:hover {
    box-shadow: 0 0 10px 0 #9095f1;
}

.area{
    background: #42467eee;
    background: linear-gradient(45deg, #3e4174 0%, #31358b 15%, #9095f1 100%);
    width: 100%;
    height:100vh;
}

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;

}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
    background-color: #F5D5D8;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
    background-color: #F6DFDA;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
    background-color: #F8E6DE;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
    background-color: #FBE9E0;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
    background-color: #FCEEDF;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
    background-color: #FFF2DA;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
    background-color: #FFF5D6;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
    background-color: #FFF9D2;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
    background-color: #FFFBD8;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
    background-color: #FFFEDE;
}

@keyframes animate {

    0%{
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}

</style>
