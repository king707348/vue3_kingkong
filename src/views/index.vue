<template>
  <div class="container">
    <div class="my_photo" @mouseenter="evtLang" @mouseleave="evtLang">
      <img :src="yucheng.my_photo" alt="" />
    </div>
    <div class="my_self">
      <span class="name">
        <h4>姓名:</h4>
        <p v-if="changeLang">{{ yucheng.my_name.ch }}</p>
        <p v-else>{{ yucheng.my_name.eng }}</p>
      </span>
      <span class="birth">
        <h4>生日:</h4>
        <p>{{ yucheng.my_birth }}({{ getYears() }}歲)</p>
      </span>
      <span class="job_title">
        <h4>職務:</h4>
        <p v-if="changeLang">{{ yucheng.job_title.ch }}</p>
        <p v-else>{{
          yucheng.job_title.eng[0].at(0).toLocaleUpperCase() +
          yucheng.job_title.eng[0].slice(1)
        }}</p>
      </span>
      <span class="nationality">
        <h4>國籍:</h4>
        <p>{{ yucheng.my_nationality }}</p>
      </span>
      <span class="mobile">
        <h4>電話:</h4>
        <a href="tel:+{{ yucheng.my_mobile }}">
          <p>{{ yucheng.my_mobile }}</p>
        </a>
      </span>
      <span class="email">
        <h4>Email:</h4>
        <a href="mailto:{{ yucheng.email }}">
          <p>{{ yucheng.email }}</p>
        </a>
      </span>
      <span class="addr">
        <h4>地址:</h4>
        <p>{{ yucheng.current_address }}</p>
      </span>
      <span class="personal">
        <p>{{ yucheng.personal }}</p>
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
  job_title: {
    ch: "前端開發工程師",
    eng: ["frontend developer", "IT"],
  },
  gender: "male",
  id: "F128334149",
  blood_type: "A",
  edu: "健行科技大學",
  current_address: "新北市板橋區溪崑二街(近樹林火車站)",
  marital_status: "single",
  email: "vovojason@gmail.com",
  github: "https://github.com/king707348",
  personal:
    "個性外冷內熱好相處，有時鑽牛角尖，對一些小細節會講究。喜歡挑戰不同事物，曾挑戰七日斷食，考驗意志力。目前積極提升英文能力，希望能生活、興趣和工作無國界。",
});
console.group("me");
console.log(yucheng);
console.groupEnd();

const evtLang = () => {
  changeLang.value = !changeLang.value;
};

const getYears = () => {
  const myBirthYear = +yucheng.my_birth.split("/")[0];
  const presentYear = new Date().getFullYear();
  // console.log(myBirthYear, presentYear)
  return presentYear - myBirthYear;
};
getYears();
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  min-height: 60vh;
  color: #cecece;
  background: var(--bg-color);
  color: var(--font-color);
  padding: 2rem 0;
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
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    margin: auto;
    h4 {
      font-size: 1.2rem;
      min-width: 4.5rem;
    }
    span {
      display: flex;
      width: fit-content;
      margin: 0 1rem;
      p,
      a {
        font-size: 1.2rem;
        margin: auto 0;
        color: var(--font-color);
      }
      a {
        :hover {
          color: var(--el-menu-hover-text-color);
        }
      }
    }
    .personal{
      position: relative;
      margin-top: 2rem;
      text-align: start;
      ::before{
        content: '';
        position: absolute;
        top: -2rem;
        left: 50%;
        transform: translate(-50%, 0);
        width: 10%;
        border-top: 1px solid var(--font-color);
      }
    }

    @media screen and (max-width: 1600px) {
    }
  }
}
</style>