# LeetCode Note

基于[VuePress](https://vuepress.vuejs.org/)搭建的个人笔记。

## 快速搭建

```bash
# 创建目录
mkdir leetcode-note && cd leetcode-note

# 使用包管理器初始化
yarn init

# 本地安装vuepress
yarn add -D vuepress

# 新建docs文件夹并创建README.md文档
mkdir docs && echo '# Hello VuePress' > docs/README.md
```

## 运行

```bash
# 启动文档项目
yarn docs:dev
```

## github pages托管

```bash
# 构建静态文件
yarn docs:build

# 执行部署命令 run in Git Bash Here
yarn docs:deploy
```