



## 介绍
暂且能用的webpack—ts吧
ract + ts + webpack + antd + rxjs

## 运行

```bash
# 单页
$ npm run dev:spa
$ npm run build:spa

# 多页
$ npm run dev:mpa
$ npm run build:mpa

# 多页增加app需改build/webpack__configs/page.config.ts中
interface pageConfig {
    home:string  | Array<string>,
    ahaha:string  | Array<string>,
    user:string  | Array<string>
}

const configArr:ConfigArrType = [
    'home',
    'ahaha',
    'user',
]



```
