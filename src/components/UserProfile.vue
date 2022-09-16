<template>
  <div>
    <header class="g-head">
      <a href="#" class="m-logo">
        <img src="../assets/logo2.cae6ad43.png" />
        <h1>慕课乐高</h1>
      </a>

      <div>
        <a href="#" v-if="!user?.isLogin" @click="login" class="u-btn">登录</a>
        <ul class="g-head__menu" v-else>
          <li><a href="#" class="u-btn">创作设计</a></li>
          <li><a href="#" class="u-btn">我的作品</a></li>
          <li>
            <div class="g-head-menu__content">
              <p>{{ user.userName }}</p>
              <div class="g-head-menu-content__icon">
                <svg
                  class=""
                  data-icon="ellipsis"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  viewBox="64 64 896 896"
                  focusable="false"
                >
                  <path
                    d="M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useStore } from "vuex";
import { UserProps } from "../store/user";
import { message } from "ant-design-vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "user-profile",
  props: {
    user: {
      type: Object as PropType<UserProps>,
      require: true,
    },
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const login = () => {
      store.commit("login");
      message.success("登录成功", 2);
    };
    const logout = () => {
      store.commit("logout");
      message.success("退出登录成功，2秒后跳转到首页", 2);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    };
    return {
      login,
      logout,
    };
  },
});
</script>

<style>
.g-head__menu {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.g-head__menu--closed {
  display: none;
}

.g-head-menu__content {
  height: 32px;
  display: flex;
  background: #fff;
  border-radius: 16px;
}

.g-head-menu__content > p {
  color: #001529;
  font-size: 14px;
  line-height: 32px;
  padding: 0 16px;
  border-right: 1px solid #ccc;
}

.g-head-menu-content__icon {
  width: 30px;
  height: 32px;
  color: #001529;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
