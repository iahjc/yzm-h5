<template>
  <div class="homepage-container">
    <user-profile></user-profile>
    <div class="container">
      <router-view></router-view>
    </div>
    <Uploader action="http://47.92.163.252:8081/api/upload" drag></Uploader>
    <footer>
      尾部
    </footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import UserProfile from './components/UserProfile.vue'
import Uploader from "@/components/Uploader.vue";

export default defineComponent({
  name: "App",
  components: {
    UserProfile,
    Uploader
  },
});
</script>

<style lang="scss">
.page-title {
  color: #fff;
}
.file-upload .upload-area {
  background: #efefef;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  padding: 20px;
  width: 360px;
  height: 180px;
  text-align: center;
  &:hover {
    border: 1px dashed #1890ff;
  }
  &.is-dragover {
    border: 2px dashed #1890ff;
    background: rgba(#1890ff, .2);
  }
}
</style>
