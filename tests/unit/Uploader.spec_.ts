import {shallowMount, VueWrapper} from "@vue/test-utils";
import Uploader from "@/components/Uploader.vue";
import axios from "axios";
// import flushPromises from "flush-promises";
jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
let wrapper: VueWrapper<any>

describe('Uploader Component', () => {
    beforeAll(() => {
        wrapper = shallowMount(Uploader, {
            props: {
                action: 'test.url'
            }
        })
    })
    it('basic layout before uploading', function () {
        expect(wrapper.find('button').exists()).toBeTruthy()
        expect(wrapper.get('button span').text()).toBe('点击上传')
        expect(wrapper.get('input').isVisible()).toBeFalsy()
    });

    it('upload process should works fine', function () {
        // const fileInput = wrapper.get('input').element as HTMLInputElement
        // const files = [testFile] as any
        // Object.defineProperties(fileInput, 'files', {
        //     value: files,
        //     writable: false
        // })
    });

    // it('should return error text when post is rejected', function () {
    //
    // });
})
