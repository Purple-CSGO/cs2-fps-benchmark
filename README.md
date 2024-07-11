# CS2 FPS Benchmark

CS2帧数测试方案

## 测试信息

| 地图    | 版本 | Demo日期  | 开始Tick | 测试时长 | 玩家数字Slot | 玩家名称  |
| ------- | ---- | --------- | -------- | -------- | ------------ | --------- |
| Inferno | v1   | 2024.6.23 | 64600    | 40s      | 8            | 『 5号 』 |
| Ancient | v1   | 2024.7.5  | 20000    | 30s      | 3            | Rop紫     |

## 测试准备

下载对应打包好的压缩文件：[主要源](https://share.hlae.site/%E4%B8%BB%E8%A6%81%E6%BA%90/CS2%E5%B8%A7%E6%95%B0%E6%B5%8B%E8%AF%95) | [备用源](https://share.hlae.site/%E5%A4%87%E7%94%A8%E6%BA%90/CS2%E5%B8%A7%E6%95%B0%E6%B5%8B%E8%AF%95)

### 放置 CFG 文件

`.cfg` 文件放置于 steamapps\common\Counter-Strike Global Offensive\game\cfg`

### 放置 Demo 文件

`.dem` 文件放置于 `steamapps\common\Counter-Strike Global Offensive\game\csgo`

### 设置启动项

启动项务必添加 `-insecure` 或 `-allow_third_party_software`

### 设置帧数记录工具

工具：CapFrameX、Fraps 或任意可固定记录时长的工具

快捷键：`[`

收集数据：平均帧 `Average` 和 Low帧 `1%Low`

## 测试设置

### 分辨率

必测：1920x1080 · 1280x960（使用率高）

可选：3840x2160 · 2560x1440

### 画面设置

统一使用如下的推荐画面设置，如有其他设置请在提交时注明

> TODO

## 测试结果收集

### 提交测试结果

> TODO

### 汇总表格

> TODO

## 自打包

1. 安装 Node.js 环境
2. 安装依赖：`npm install`
3. 修改 `config` 目录中的配置文件，也可以新增 `地图-版本号.json`
4. 生成对应文件并打包：`node ./generate.js 设置文件路径 demo文件路径`，如：
   `node ./generate.js config/inf-v1.json demo/inf-v1.dem`
5. 修改 `README.md` 的 Demo 信息表格，准备好打包的zip文件，并提交PR
