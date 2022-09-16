<template>
  <div class="edit-wrapper" @click="onItemClick(id)">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  emits: ["set-active"],
  setup(props, context) {
    const onItemClick = (id: string) => {
      context.emit("set-active", id);
    };

    return {
      onItemClick,
    };
  },
});
</script>
<style>
.edit-wrapper {
  padding: 0;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
}

.edit-wrapper:hover {
  border: 1px solid #ccc;
}

.edit-wrapper.active {
  border: 1px solid #188efc;
  user-select: none;
  z-index: 1500;
}
</style>
