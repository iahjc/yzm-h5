<template>
    <div>
        <h2>{{template.title}}</h2>
        <router-link to="/editor">使用模板</router-link>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { TemplatesProps } from '../store/templates';
export default defineComponent({
    setup() {
        const route = useRoute();
        const store = useStore<TemplatesProps>();
        const currentId = route.params.id as string;
        const template = computed<TemplatesProps>(() => store.getters.getTemplateById(parseInt(currentId)))
        return {
            route,
            template
        }
    },
})
</script>
