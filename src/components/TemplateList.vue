<template>
  <div class="template-list">
    <h2>热门海报</h2>
    <p>只需替换文字和图片，一键自动生成H5</p>
    <div class="template-items">
      <div class="template-item__info" v-for="item in list" :key="item.id">
        <div class="template-item-info__top">
          <img :src="item.coverImg"/>
        </div>
        <h4>{{item.title}}</h4>
        <div class="template-item-info-author">
          <span>作者：{{item.author}}</span>
          <span>{{item.copiedCount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TemplatesProps } from "../store/templates";
export default defineComponent({
  name: "template-list",
  props: {
    list: {
      type: Array as PropType<TemplatesProps[]>,
      required: true,
    },
  },
  
});
</script>

<style scoped>
  .template-list>h2 {
    font-size: 20px;
    text-align: center;
    color: #333333;
    margin-top: 25px;
  } 
  .template-list>p {
    font-size: 16px;
    color: #666666;
    text-align: center;
    margin-bottom: 40px;
  }
  .template-items {
    width: 1160px;
    display: flex;
    gap: 15px;
    margin: 0 auto;
    flex-wrap: wrap;
  }
  .template-items .template-item__info {
    width: 275px;
    height: 485px;
    box-shadow: 2px 2px 2px 2px #ccc;
    border-radius: 12px;
    overflow: hidden;
  }
  .template-items .template-item__info .template-item-info__top {
    width: 100%;
    height: 390px;
    overflow: hidden;
  }

  .template-items .template-item__info .template-item-info__top>img {
    width: 100%;
  }

  .template-items .template-item__info>h4{
    font-size: 18px;
    height: 45px;
    line-height: 45px;
    padding-left: 8px;
    border-bottom: 1px solid #ccc;
  }
</style>
