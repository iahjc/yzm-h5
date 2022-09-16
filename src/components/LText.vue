<template>
  <component :is="tag" :style="styleProps" class="l-text-component" @click="handleClick">
    {{text}}
  </component>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import {pick} from 'lodash-es'
import { transformToComponentProps, textDefaultProps, textStylePropNames } from '../defaultProps'
const defaultProps = transformToComponentProps(textDefaultProps);
import useComponentCommon from "@/hooks/useComponentCommon";
export default defineComponent({
    name: 'l-text',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        ...defaultProps
    },
    setup(props) {
      // 重用并且简化
      // const styleProps = computed(() => pick(props, textStylePropNames))
      const { styleProps, handleClick } = useComponentCommon(props, textStylePropNames)
      return {
        styleProps,
        handleClick
      }
    }
})
</script>
