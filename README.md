# Intro

<a href="https://996.icu"><img src="https://img.shields.io/badge/link-996.icu-red.svg" alt="996.icu" /></a>

本库是尝试复现 lodash 库的实现。

[文档（中文）](https://www.lodashjs.com/)
[文档](https://lodash.com/)
[github](https://github.com/lodash/lodash)

基于 ES5 和 ES6 构建，测试暂时用的是 node 的 `assert`，当然测试环境就是 node，且不包含浏览器环境，之后可能会更换测试框架吧!

```shell
# node version
# v12.13.0

# lodash
# v4.17.15
```

> 源码均来自 master 分支。

实现 `differenceBy` 时，发现缺少工具类函数，项目调整，先完成工具类函数的实现。（2020-06-01）

然而互调让人头大。。。遂决定修改架构，即废弃之前按照文档分类的思想，转而采用源码平级并置。(2020-12-02)

```markdown
新架构主体

 |
 |-- lib 函数库
 |
 |-- test 测试库
 |
 |-- util 工具库
 |
```
