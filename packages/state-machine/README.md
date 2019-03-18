# 项目名

项目简介

## 特性

特性简介

- 特性 1
- 特性 2

## 如何修改本项目为你自己的项目

```shell
git clone https://github.com/xiaomingplus/npm-typescript-boilerplate.git your-project-name
cd your-project-name
# 安装依赖
tnpm i
# 开始开发
npm start
# 修改 package.json 里面的项目名和简介
# 修改 README.md 文件内容
# 修改 远程仓库的地址
git remote set-url origin your-git-url
```

## 如何安装

(修改为你自己的：

```shell
tnpm i @tencent/typescript-boilerplate
```

## 如何使用

(修改为你自己的

```typescript
import { Greeter } from '@tencent/typescript-boilerplate'

const str = Greeter('Bob')
console.log('str', str)
```

## API

(修改为你自己的

这里列出所有的 API，如果有很多的话，建议这里只写索引，具体的参数信息可以导航到 doc 目录下的文件

## 如何开发

(修改为你自己的

```shell
git clone https://github.com/xiaomingplus/npm-typescript-boilerplate.git
cd typescript-boilerplate/
git checkout develop
git checkout -b feature/some-feature
npm install
npm start
```

本项目采用[prettier](https://prettier.io/)来统一代码风格，并且会在`pre-commit`前自动 format 你本次提交的代码，推荐你在你的编辑器里安装 prettier 插件，并且开启保存文件就自动 format 选项，这样可以在开发的时候，就能自动 format

本项目采用[git flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) 工作流，请按照 git flow 工作流来提交合并代码

推荐使用`npm run cm`来代替`git commit`作为格式化 commit 信息的工具

```shell
npm run cm
```

### 如何打包发布

(修改为你自己的

```shell
cd npm-typescript-boilerplate
# 自动打tag和生成changelog,并修改package.json
npm run release
npm publish
```
