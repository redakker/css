<script setup lang="ts">
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faKey, faAddressBook, faBabyCarriage, faCableCar, faDashboard, faEarDeaf, faHSquare, faSailboat } from '@fortawesome/free-solid-svg-icons'

</script>

<template>

    <div class="wrapper">

        <div class="homebg"></div>

        <div class="linux"></div>

        <div class="microsoft">
            <div class="tl"></div>
            <div class="tr"></div>
            <div class="bl"></div>
            <div class="br"></div>
        </div>

        <div class="apple">
            <div class="slice1 slice">
                <div class="apple1"></div>
                <div class="apple2"></div>
                <div class="apple5"></div>
            </div>
            <div class="slice2 slice">
                <div class="apple1"></div>
                <div class="apple2"></div>
                <div class="apple3"></div>
                <div class="apple4"></div>
                <div class="apple5"></div>
            </div>
            <div class="slice3 slice">
                <div class="apple1"></div>
                <div class="apple2"></div>
                <div class="apple3"></div>
                <div class="apple4"></div>
                <div class="apple5"></div>
            </div>
            <div class="slice4 slice">
                <div class="apple3"></div>
                <div class="apple4"></div>
                <div class="apple5"></div>
            </div>
            <div class="slice5 slice">
                <div class="apple3"></div>
                <div class="apple4"></div>
                <div class="apple5"></div>
            </div>
            <div class="slice6 slice">
                <div class="apple3"></div>
                <div class="apple4"></div>
                <div class="apple5"></div>
            </div>
            <div class="slice">
                <div class="apple6">
                <div class="apple61"></div>
                </div>
                <div class="apple7"></div>
                <div class="apple8"></div>
                <div class="apple9"></div>
            </div>
        </div>
    </div>

</template>

<style scoped>

.homebg {
  height: 70px;
  width: 70px;

  background: rgb(112, 112, 112);
  border-radius: 0 50%;
  position: absolute;
  left: 0px;
}

/* linux */
.linux {
  height: 300px;
  width: 300px;
  margin-left: 50px;
  background: black;
  border-radius: 50%;
  position: relative;
  background-image: radial-gradient(ellipse at 200px 110px, white 2px, transparent 15px), radial-gradient(ellipse at 190px 119px, black 25px, transparent 25px), radial-gradient(ellipse closest-corner at 190px 125px, darkgrey 10px, transparent 33px), radial-gradient(ellipse closest-corner at 190px 120px, black 29px, transparent 29px), radial-gradient(ellipse at 135px 111px, white 1px, transparent 14px), radial-gradient(ellipse at 125px 119px, black 24px, transparent 24px), radial-gradient(ellipse closest-corner at 125px 125px, darkgrey 13px, transparent 33px), radial-gradient(ellipse closest-corner at 125px 120px, black 33px, transparent 33px), radial-gradient(ellipse closest-corner at 100px 120px, #e8e8e8 55px, transparent 55px), radial-gradient(ellipse closest-corner at 100px 120px, #000 59px, transparent 59px), radial-gradient(ellipse farthest-corner at 210px 120px, #e8e8e8 55px, transparent 55px), radial-gradient(ellipse farthest-corner at 210px 119px, #000 59px, transparent 59px), linear-gradient(to bottom, transparent 30px, black 90px), radial-gradient(circle at 150px 100px, white 90px, transparent 100px);
  box-shadow: 0 160px 0 27px black, 0 200px 0 29px grey, 0 180px 0 40px black, 0 18px 0 10px black;
}

.linux:before {
  content: '';
  height: 550px;
  width: 380px;
  background: rgba(22, 33, 11, .0);
  position: absolute;
  top: 0px;
  left: -40px;
  z-index: 9;
  background-image: radial-gradient(circle at 50% 360px, rgba(255, 255, 255, 1) 160px, transparent 170px);
}

.linux:after {
  content: '';
  height: 0px;
  width: 0px;
  background: transparent;
  position: absolute;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-left-radius: 4%;
  border-bottom-right-radius: 4%;
  border-top: 70px solid #ffa300;
  border-right: 60px solid transparent;
  border-bottom: 0px solid transparent;
  border-left: 60px solid transparent;
  top: 165px;
  left: 90px;
  box-shadow: -100px 300px 0 10px rgba(255, 163, 0, 1), 100px 300px 0 10px rgba(255, 163, 0, 1);
  z-index: 9999;
}

/* microsoft */

.microsoft {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    grid: 10px;
    position: relative;
    height: 320px;
    width: 320px;
    margin-left: 40px;
    margin-top: 300px
}

.microsoft .tl {
    background-color: #f25022;
    width: 150px;
    height: 150px;
    margin-right: 10px;
}

.microsoft .tr {
    background-color: #7fba00;
    width: 150px;
    height: 150px;
}

.microsoft .bl {
    background-color: #00a4ef;
    width: 150px;
    height: 150px;
    margin-right: 10px;
}

.microsoft .br {
    background-color: #ffb900;
    width: 150px;
    height: 150px;
}

/* apple */

.apple {
  height: 202px;
  overflow: hidden;
  position: relative;
  width: 172px;
  margin-left: 110px;
  margin-top: 30px;
}

.apple * {
  position: absolute;
}

.apple,
.apple6,
.apple7,
.apple8,
.apple61 {
  background: #ffffff;
}

.apple1,
.apple2 {
  border-radius: 108px 108px 108px 94px/128px 128px 128px 128px;
  height: 128px;
  top: 47px;
  width: 108px;
}

.apple2 {
  left: 72px;
}

.apple3,
.apple4 {
  border-radius: 22px 64px 64px 64px/106px 106px 106px 106px;
  height: 106px;
  left: 12px;
  transform: rotate(-25deg);
  top: 98px;
  width: 64px;
}

.apple4 {
  border-radius: 64px 22px 64px 64px/106px 106px 106px 106px;
  left: 103px;
  transform: rotate(25deg);
}

.apple5 {
  height: 145px;
  left: 54px;
  top: 53px;
  width: 70px;
}

.apple6 {
  left: 50px;
  transform: scaley(0.5);
  top: 14px;
}

.apple61 {
  border-radius: 20px;
  height: 80px;
  transform: rotate(-45deg) scale(0.9);
  width: 80px;
}

.apple7 {
  border-radius: 50%;
  height: 22px;
  left: 66px;
  top: 192px;
  width: 47px;
}

.apple8 {
  border-radius: 50%;
  height: 85px;
  left: 144px;
  top: 63px;
  width: 85px;
}

.apple .slice {
  height: 200px;
  width: 180px;
}

.apple .slice1 *,
.apple9:before,
.apple9:after {
  background: #62bb47;
}

.apple .slice2 * {
  background: #fcb827;
}

.apple .slice3 * {
  background: #f6821f;
}

.apple .slice4 * {
  background: #e03a3e;
}

.apple .slice5 * {
  background: #963d97;
}

.apple .slice6 * {
  background: #009ddc;
}

.apple .slice1 {
  clip: rect(0 180px 73px 0px);
}

.apple .slice2 {
  clip: rect(73px 180px 98px 0px);
}

.apple .slice3 {
  clip: rect(98px 180px 123px 0px);
}

.apple .slice4 {
  clip: rect(123px 180px 148px 0px);
}

.apple .slice5 {
  clip: rect(148px 180px 174px 0px);
}

.apple .slice6 {
  clip: rect(174px 180px 205px 0px);
}

.apple9 {
  left: 122px;
  top: -18px;
  transform: rotate(40deg);
}

.apple9:before,
.apple9:after {
  border-radius: 50%;
  content: '';
  display: block;
  height: 90px;
  position: absolute;
  text-indent: -9999px;
  width: 90px;
}

.apple9:before {
  clip: rect(0 13px 80px 0px);
}

.apple9:after {
  clip: rect(14px 100px 76px 76px);
  left: -64px;
}

</style>