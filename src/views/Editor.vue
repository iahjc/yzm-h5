<template>
  <div class="g-editor">
    <div class="g-editor__list">
      <components-list
          :list="defaultTextTemplates"
          @onItemClick="addItem"
      ></components-list>
    </div>
    <div class="g-editor__canvas">
      <edit-wrapper
          @setActive="setActive"
          v-for="component in components"
          :key="component.id"
          :id="component.id"
          :active="component.id === (currentElement && currentElement.id)"
      >
        <component :is="component.name" v-bind="component.props"></component>
      </edit-wrapper>
    </div>
    <div class="g-editor__property">
      <h2>组件属性</h2>
      <props-table
          v-if="currentElement && currentElement.props"
          :props="currentElement.props"
          @change="handleChange"
      ></props-table>
      <pre>
      {{ currentElement && currentElement.props }}
      </pre>
    </div>
  </div>
</template>
<script lang="ts">
import {computed, defineComponent} from "vue"
import {useStore} from "vuex"
import {GlobalDataProps} from "../store/index"
import LText from "../components/LText.vue"
import ComponentsList from "@/components/ComponentsList.vue"
import {defaultTextTemplates} from "@/defaultTemplates"
// import { ComponentData } from '../store/editor'
import EditWrapper from "../components/EditWrapper.vue"
import PropsTable from "@/components/PropsTable.vue"

export default defineComponent({
  components: {
    LText,
    ComponentsList,
    EditWrapper,
    PropsTable
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const components = computed(() => store.state.editor.components)
    // const currentElement = computed<ComponentData | null>(() => store.getters.getCurrentElement)
    const currentElement = computed(() => store.getters.getCurrentElement)
    const addItem = (props: any) => {
      store.commit("addComponent", props)
    };
    const setActive = (id: string) => {
      store.commit("setActive", id)
    };
    const handleChange = (e: any) => {
      console.log('handleChange', e)
      store.commit('updateComponent', e)
    }
    return {
      components,
      defaultTextTemplates,
      addItem,
      setActive,
      currentElement,
      handleChange
    };
  },
});
</script>

<style>
.g-editor {
  display: flex;
}

.g-editor__list {
  width: 300px;
}

.g-editor__canvas {
  flex-grow: 1;
  position: relative;
}

.g-editor__property {
  width: 300px;
}
</style>
