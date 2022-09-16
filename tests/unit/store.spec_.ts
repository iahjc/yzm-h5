// import { testComponents, ComponentData } from "@/store/editor";
// import { TextComponentProps } from '../../src/defaultProps'
// import { last, clone } from 'lodash-es'
// import store from "@/store";
// const cloneComponents = clone(testComponents)
// describe('test vuex store', () => {
//     expect(store.state).toHaveProperty('user')
//     expect(store.state).toHaveProperty('templates')
//     expect(store.state).toHaveProperty('editor')
// })
//
// describe('test user module', () => {
//     it('test login mutation', () => {
//         store.commit('login')
//         expect(store.state.user.isLogin).toBeTruthy()
//     })
//     it('test logout mutation', () => {
//         store.commit('logout')
//         expect(store.state.user.isLogin).toBeFalsy()
//     })
// })
//
// describe('test templates module', () => {
//     // it('should have default templates', () => {
//     //     expect(store.state.templates.data).toHaveLength(testData.length)
//     // })
//     it('should get the correct template by Id', () => {
//         const selectTemplate = store.getters.getTemplateById(1)
//         expect(selectTemplate.title).toBe('test title 1')
//     })
// })
