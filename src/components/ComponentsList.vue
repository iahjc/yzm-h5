<template>
  <div class="create-component-list">
    <div class="component-item" v-for="(item, index) in list" :key="index" @click="onItemClick(item)" >
      <l-text v-bind="item"></l-text>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import LText from "@/components/LText.vue";
export default defineComponent({
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  emits: ['on-item-click'],
  name: 'components-list',
  components: {
    LText
  },
  setup(props, context) {
    const onItemClick = (data: any) => {
      context.emit('on-item-click', data)
    }
    return {
      onItemClick
    }
  }
})
</script>
