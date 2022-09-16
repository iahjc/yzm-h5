import { Module } from "vuex";
import { GlobalDataProps } from ".";
export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}

const testData: TemplateProps[] = [
  {
    id: 1,
    coverImg: "http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png",
    title: "1024 程序员日",
    author: "alines",
    copiedCount: 10,
  },
  {
    id: 2,
    coverImg: "http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png",
    title: "1024 程序员日",
    author: "alines",
    copiedCount: 10,
  },
  {
    id: 3,
    coverImg: "http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png",
    title: "1024 程序员日",
    author: "alines",
    copiedCount: 10,
  },
  {
    id: 4,
    coverImg: "http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png",
    title: "1024 程序员日",
    author: "alines",
    copiedCount: 10,
  },
  {
    id: 4,
    coverImg: "http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png",
    title: "1024 程序员日",
    author: "alines",
    copiedCount: 10,
  },
  {
    id: 4,
    coverImg: "http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png",
    title: "1024 程序员日",
    author: "alines",
    copiedCount: 10,
  },
  {
    id: 4,
    coverImg: "http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png",
    title: "1024 程序员日",
    author: "alines",
    copiedCount: 10,
  },
  {
    id: 4,
    coverImg: "http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png",
    title: "1024 程序员日",
    author: "alines",
    copiedCount: 10,
  },
];

export interface TemplatesProps {
  data: TemplateProps[];
}

const templates: Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: testData,
  },
  getters: {
    getTemplateById: (state, getters, rootState) => (id: number) => {
      return state.data.find((t) => t.id === id);
    },
  },
};

export default templates;
