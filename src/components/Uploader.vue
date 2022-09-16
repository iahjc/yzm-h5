<template>
  <div class="file-upload">
    <div class="upload-area" :class="{'is-dragover': drag && isDragOver}" v-on="events">
      <slot v-if="isUploading" name="loading">
        <button disabled>正在上传</button>
      </slot>
      <slot name="uploaded" v-else-if="lastFileData && lastFileData.loaded" :uploadedData="lastFileData.data">
        <button>点击上传</button>
      </slot>
      <slot v-else name="default">
        <button>点击上传</button>
      </slot>
    </div>
    <input type="file" ref="fileInput" @change="handleFileChange" :style="{display: 'none'}">
    <ul>
      <li :class="`uploaded-file upload-${file.status}`"
          v-for="file in uploadedFiles"
          :key="file.uid">
        <span class="filename">{{ file.name }}</span>
        <button class="delete-icon" @click="removeFile(file.uid)">Del</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, computed, PropType} from "vue"
import {DeleteOutlined, LoadingOutlined, FileOutlined} from '@ant-design/icons-vue'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import {last} from 'lodash-es'
import _default from "ant-design-vue/es/color-picker";
import prop = _default.model.prop;

type UploadStatus = 'ready' | 'loading' | 'success' | 'error'
type checkUpload = (file: File) => boolean | Promise<File>

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status: UploadStatus;
  raw: File;
  resp?: any;
}

export default defineComponent({
  components: {
    // DeleteOutlined,
    // LoadingOutlined,
    // FileOutlined
  },
  props: {
    action: {
      type: String,
      required: true
    },
    beforeUpload: {
      type: Function as PropType<checkUpload>
    },
    drag: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const fileInput = ref<null | HTMLInputElement>(null)
    const uploadedFiles = ref<UploadFile[]>([])
    const isDragOver = ref(false)
    const isUploading = computed(() => {
      return uploadedFiles.value.some(file => file.status === 'loading')
    })

    const lastFileData = computed(() => {
      const lastFile = last(uploadedFiles.value)
      if (lastFile) {
        return {
          loaded: lastFile.status === 'success',
          data: lastFile.resp
        }
      }
      return false
    })

    const removeFile = (id: string) => {
      uploadedFiles.value = uploadedFiles.value.filter(file => file.uid !== id)
    }

    const triggerUpload = () => {
      if (fileInput.value) {
        fileInput.value.click()
      }
    }

    let events: { [key: string]: (e: any) => void } = {
      'click': triggerUpload
    }

    const postFile = (uploadedFile: File) => {
      const formData = new FormData()
      formData.append(uploadedFile.name, uploadedFile)
      const fileObj = reactive<UploadFile>({
        uid: uuidv4(),
        size: uploadedFile.size,
        name: uploadedFile.name,
        status: 'loading',
        raw: uploadedFile
      })
      uploadedFiles.value.push(fileObj)
      axios.post(props.action, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((resp: { data: any }) => {
        fileObj.status = 'success'
        fileObj.resp = resp.data
      }).catch(() => {
        fileObj.status = 'error'
      }).finally(() => {
        if (fileInput.value) {
          fileInput.value.value = ''
        }
      })
    }

    const uploadFiles = (files: null | FileList) => {
      if(files) {
        const uploadedFile = files[0]
        if (props.beforeUpload) {
          const result = props.beforeUpload(uploadedFile)
          if (result && result instanceof Promise) {
            result.then(processedFile => {
              if (processedFile instanceof File) {
                postFile(processedFile)
              } else {
                throw new Error('beforedUpload Promise should return File object')
              }
            }).catch(e => {
              console.error(e)
            })
          } else if (result === true) {
            postFile(uploadedFile)
          }
        } else {
          postFile(uploadedFile)
        }
      }
    }

    const handleFileChange = (e: Event) => {
      const target = e.target as HTMLInputElement
      const files = target.files
      uploadFiles(files)
      // if (files) {
      //   const uploadedFile = files[0]
      //   if (props.beforeUpload) {
      //     const result = props.beforeUpload(uploadedFile)
      //     if (result && result instanceof Promise) {
      //       result.then(processedFile => {
      //         if (processedFile instanceof File) {
      //           postFile(processedFile)
      //         } else {
      //           throw new Error('beforedUpload Promise should return File object')
      //         }
      //       }).catch(e => {
      //         console.error(e)
      //       })
      //     } else if (result === true) {
      //       postFile(uploadedFile)
      //     }
      //   } else {
      //     postFile(uploadedFile)
      //   }
      // }
    }

    const handleDrag = (e: DragEvent, over: boolean) => {
      e.preventDefault()
      isDragOver.value = over
    }

    const handleDrop = (e: DragEvent) => {
      e.preventDefault()
      isDragOver.value = false
      if (e.dataTransfer) {
        uploadFiles(e.dataTransfer.files)
      }
    }



    if (props.drag) {
      events = {
        ...events,
        'dragover': (e: DragEvent) => {
          handleDrag(e, true)
        },
        'dragleave': (e: DragEvent) => {
          handleDrag(e, false)
        },
        'drop': handleDrop
      }
    }

    return {
      fileInput,
      triggerUpload,
      handleFileChange,
      isUploading,
      uploadedFiles,
      removeFile,
      lastFileData,
      isDragOver,
      events
    }
  }
})
</script>

<style lang="scss">
.upload-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.upload-list li {
  transition: all .5s cubic-bezier(.55,0,.1,1);
  font-size: 14px;
  line-height: 1.8;
  margin-top: 5px;
  box-sizing: border-box;
  border-radius: 4px;
  min-width: 200px;
  position: relative;
  &:first-child {
    margin-top: 10px;
  }
  .upload-list-thumbnail {
    vertical-align: middle;
    display: inline-block;
    width: 70px;
    height: 70px;
    position: relative;
    z-index: 1;
    background-color: #fff;
    object-fit: cover;
  }
  .file-icon {
    svg {
      margin-right: 5px;
      color: rgba(0, 0, 0, 0.45);
    }
  }
  .filename {
    margin-left: 5px;
    margin-right: 40px;
  }
  &.upload-error {
    color: #f5222d;
    svg {
      color: #f5222d;
    }
  }
  .file-status {
    display: block;
    position: absolute;
    right: 5px;
    top: 0;
    line-height: inherit;
  }
  .delete-icon {
    display: none;
    position: absolute;
    right: 7px;
    top: 0;
    line-height: inherit;
    cursor: pointer;
  }
  &:hover {
    background-color: #efefef;
    .file-status {
      display: none;
    }
    .delete-icon {
      display: block;
    }
  }
}
</style>
