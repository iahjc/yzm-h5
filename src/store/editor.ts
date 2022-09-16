import { Module } from "vuex";
import { GlobalDataProps } from "./index";
import { v4 as uuidv4 } from "uuid";
import {TextComponentProps} from "@/defaultProps";

export interface EditorProps {
  // 供中间编辑器渲染的数组
  components: ComponentData[];
  // 当前编辑的是那个元素，uuid
  currentElement: string;
  // 当然最后保存的时候还有一些项目信息
}

interface ComponentData {
  // 这个元素的属性，
  props: { [key: string]: any };
  // id, uuid v4 生成
  id: string;
  // 业务组件库名称 l-text, l-image
  name: string;
}

export const testComponents: ComponentData[] = [
    {id: uuidv4(), name: 'l-text', props: { text: 'hello', fontSize: '20px', lineHeight: '15px', textAlign: 'center', fontFamily:'', position: 'absolute', top: '30px' }},
    {id: uuidv4(), name: 'l-text', props: { text: 'hello2', fontSize: '10px',position: 'absolute', top: '50px'  }},
    {id: uuidv4(), name: 'l-text', props: { text: 'hello3', fontSize: '15px'  }},
]

const editor: Module<EditorProps, GlobalDataProps> = {
    state: {
        components: testComponents,
        currentElement: ''
    },
    mutations: {
        addComponent(state, props) {
            const newComponent: ComponentData = {
                id: uuidv4(),
                name: 'l-text',
                props
            }
            state.components.push(newComponent)
        },
        setActive(state, currentId: string) {
            state.currentElement = currentId
        },
        updateComponent(state, {key, value}) {
            const updateComponent = state.components.find((component) => {
                return component.id === state.currentElement
            })
            if (updateComponent) {
                updateComponent.props[key as keyof TextComponentProps] = value
            }
        }
    },
    getters: {
        getCurrentElement: (state) => {
            return state.components.find((component) => {
                return component.id === state.currentElement
            })
        }
    }
}

export default editor;
