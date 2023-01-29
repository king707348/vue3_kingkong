<template>
  <div class="container">
    <div class="my_photo" @mouseenter="evtLang" @mouseleave="evtLang">
      <img :src="yucheng.my_photo" alt="" />
    </div>
    <div class="my_self">
      <span class="name">
        <h4>姓名:</h4>
        <pre v-if="changeLang">{{ yucheng.my_name.ch }}</pre>
        <pre v-else>{{ yucheng.my_name.eng }}</pre>
      </span>
      <span class="nationality">
        <h4>國籍:</h4>
        <pre>{{ yucheng.my_nationality }}</pre>
      </span>
      <span class="birth">
        <h4>生日:</h4>
        <pre>{{ yucheng.my_birth }}</pre>
      </span>
      <span class="email">
        <h4>Email:</h4>
        <a href="mailto:{{ yucheng.email }}">
          <pre>{{ yucheng.email }}</pre>
        </a>
      </span>
      <span class="mobile">
        <h4>電話:</h4>
        <a href="tel:+{{ yucheng.my_mobile }}">
          <pre>{{ yucheng.my_mobile }}</pre>
        </a>
      </span>
      <span class="job_title">
        <h4>職務:</h4>
        <pre>{{
          yucheng.job_title[0].at(0).toUpperCase() +
          yucheng.job_title[0].slice(1)
        }}</pre>
      </span>
      <span class="addr">
        <h4>地址:</h4>
        <pre>{{ yucheng.current_address }}</pre>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const changeLang = ref(true);
const yucheng = reactive({
  my_name: {
    ch: "許益誠",
    eng: "Yu-Cheng HSU",
  },
  my_photo: "./src/assets/yucheng_HSU.png",
  my_birth: "1991/06/21",
  my_mobile: "0988-348-013",
  my_nationality: "Taiwan,R.O.C.",
  job_title: ["frontend developer", "IT"],
  gender: "male",
  id: "F128334149",
  blood_type: "A",
  edu: "健行科技大學",
  current_address: "新北市板橋區溪崑二街(近樹林車站)",
  marital_status: "single",
  email: "vovojason@gmail.com",
  github: "https://github.com/king707348",
});
console.group("me");
console.log(yucheng);
console.groupEnd();

const evtLang = () => {
  changeLang.value = !changeLang.value;
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  min-height: 60vh;

  .my_photo {
    flex: 1;
    margin: auto;
    border: 0 solid transparent;
    &:hover img {
      border-radius: 50%;
    }
    img {
      transition: all 0.1s linear;
    }
  }
  .my_self {
    flex: 1;
    margin: auto;
    h4 {
      font-size: 1.2rem;
      min-width: 100px;
    }
    span {
      display: flex;
      pre,
      a {
        font-size: 1.2rem;
        margin: auto 0;
        color: var(--el-menu-text-color);
      }
      a{
        :hover{
          color: var(--el-menu-hover-text-color);
        }
      }
    }
  }
}
</style>