<template>
  <div>
    <div class="home-search">
      <p class="home-search__title">海量精彩设计 一键生成</p>
      <div class="home-search__input">
        <input type="text" placeholder="搜索一下，快速找模板"/>
        <div class="home-search-input__btn">
          <svg data-icon="search" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896" focusable="false"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
        </div>
      </div>
    </div>

    <div class="home-intro">
      <div class="home-intro__item">
        <div class="home-intro-item__icon">
          <svg data-icon="html5" width="46" height="56" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896" focusable="false"><path d="M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2z" fill="#1890ff"></path><path d="M209.9 155.4l56.7 641.2 245.2 69.6 244.1-69.6 57.8-641.2H209.9zm530.4 117.9l-4.8 47.2-1.7 19.5H381.7l8.2 94.2H511v-.2h214.7l-3.2 24.3-21.2 242.2-1.7 16.3-187.7 51.7v.4h-1.7l-188.6-52-11.3-144.7h91l6.5 73.2 102.4 27.7h.8v-.2l102.4-27.7 11.4-118.5H511.9v.1H305.4l-22.7-253.5L281 249h461l-1.7 24.3z" fill="#e6f7ff"></path><path d="M281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" fill="#1890ff"></path></svg>
        </div>
        <p>专注H5 始终如一</p>
        <p>三年保持行业领先</p>
      </div>

      <div class="home-intro__item">
        <div class="home-intro-item__icon">
          <svg data-icon="build" width="58" height="40" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896" focusable="false"><path d="M144 546h200v200H144zm268-268h200v200H412z" fill="#e6f7ff"></path><path d="M916 210H376c-17.7 0-32 14.3-32 32v236H108c-17.7 0-32 14.3-32 32v272c0 17.7 14.3 32 32 32h540c17.7 0 32-14.3 32-32V546h236c17.7 0 32-14.3 32-32V242c0-17.7-14.3-32-32-32zM344 746H144V546h200v200zm268 0H412V546h200v200zm0-268H412V278h200v200zm268 0H680V278h200v200z" fill="#1890ff"></path></svg>
        </div>
        <p>海量 H5 模版</p>
        <p>一键生成，一分钟轻松制作</p>
      </div>

      <div class="home-intro__item">
        <div class="home-intro-item__icon">
          <svg data-icon="bulb" width="44" height="61"  fill="currentColor" aria-hidden="true" viewBox="64 64 896 896" focusable="false"><path d="M512 136c-141.4 0-256 114.6-256 256 0 92.5 49.4 176.3 128.1 221.8l35.9 20.8V752h184V634.6l35.9-20.8C718.6 568.3 768 484.5 768 392c0-141.4-114.6-256-256-256z" fill="#e6f7ff"></path><path d="M632 888H392c-4.4 0-8 3.6-8 8v32c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-32c0-4.4-3.6-8-8-8zM512 64c-181.1 0-328 146.9-328 328 0 121.4 66 227.4 164 284.1V792c0 17.7 14.3 32 32 32h264c17.7 0 32-14.3 32-32V676.1c98-56.7 164-162.7 164-284.1 0-181.1-146.9-328-328-328zm127.9 549.8L604 634.6V752H420V634.6l-35.9-20.8C305.4 568.3 256 484.5 256 392c0-141.4 114.6-256 256-256s256 114.6 256 256c0 92.5-49.4 176.3-128.1 221.8z" fill="#1890ff"></path></svg>
        </div>
        <p>极致体验</p>
        <p>用户的一致选择</p>
      </div>
    </div>

    <template-list :list="testData"></template-list>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { GlobalDataProps} from "../store/index";
import TemplateList from "../components/TemplateList.vue";
import '../assets/css/home.css';
export default defineComponent({
  components: { TemplateList },
  setup() {
    const store = useStore<GlobalDataProps>();
    const testData = computed(() => store.state.templates.data);
    return {
      testData
    }
  },
});
</script>
