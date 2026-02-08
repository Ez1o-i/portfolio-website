# 个人作品网站

一个现代化的全栈开发者个人作品展示网站，采用深色主题设计，融合流畅的动画效果与极致的视觉体验。

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-06B6D4?style=flat&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## ✨ 特性

- 🎨 **现代化 UI 设计** - 深色主题 + 玻璃态卡片设计
- 🌟 **星空背景动画** - 动态粒子效果营造沉浸式体验
- 🎭 **流畅动画** - 基于 Motion 的高性能动画系统
- 📱 **完全响应式** - 适配桌面、平板和移动设备
- 🎯 **视差滚动** - 多层次视差效果增强视觉深度
- ⚡ **高性能** - Vite 构建工具，极速开发体验
- 🧩 **组件化架构** - 基于 Radix UI 和 MUI 的可复用组件

## 🛠️ 技术栈

### 前端框架
- **React 18.3.1** - 用于构建用户界面的 JavaScript 库
- **Vite 6.3.5** - 下一代前端构建工具
- **TypeScript** - 类型安全的 JavaScript 超集

### UI 组件与样式
- **Tailwind CSS 4.1.12** - 原子化 CSS 框架
- **Radix UI** - 无样式的可访问 UI 组件库
- **MUI (Material-UI) 7.3.5** - React UI 组件库
- **Motion** - 用于 React 的动画库
- **Lucide React** - 美观的图标库

### 主要功能模块
- **Hero Section** - 首页展示，包含动态代码片段和状态卡片
- **Skills Section** - 技术栈展示（后端、前端、测试）
- **Projects Section** - 精选项目案例展示
- **Contact Section** - 联系表单
- **Navigation** - 响应式导航栏
- **Starry Background** - 动态星空背景
- **Parallax Effects** - 视差滚动效果

## 📁 项目结构

```
PersonalWorks/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/           # UI 组件
│   │   │   ├── hero.tsx      # 首页展示
│   │   │   ├── skills.tsx    # 技术栈
│   │   │   ├── projects.tsx  # 项目展示
│   │   │   ├── contact.tsx   # 联系表单
│   │   │   ├── nav.tsx       # 导航栏
│   │   │   ├── parallax-section.tsx  # 视差滚动
│   │   │   └── starry-background.tsx # 星空背景
│   │   └── App.tsx           # 主应用组件
│   ├── lib/
│   │   └── utils.ts          # 工具函数
│   ├── styles/
│   │   ├── index.css         # 全局样式
│   │   ├── tailwind.css      # Tailwind 配置
│   │   ├── theme.css         # 主题样式
│   │   └── fonts.css         # 字体样式
│   └── main.tsx              # 应用入口
├── index.html
├── vite.config.ts
├── tailwind.config.js
└── package.json
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0 或 pnpm >= 8.0.0

### 安装依赖

```bash
npm install
```

### 开发模式

启动开发服务器：

```bash
npm run dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看项目

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录

### 预览生产构建

```bash
npm run preview
```

## 📦 部署

本项目已配置为可轻松部署到以下平台：

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Vite 配置并部署

### Netlify

1. 构建命令：`npm run build`
2. 发布目录：`dist`
3. 点击部署

### GitHub Pages

1. 构建项目：`npm run build`
2. 将 `dist` 目录内容推送到 `gh-pages` 分支
3. 在 GitHub 设置中启用 GitHub Pages

## 🎨 设计亮点

### 玻璃态设计
使用半透明背景、模糊效果和微妙的边框，营造现代感的视觉层次。

### 动态星空背景
基于 Canvas 的粒子系统，创建沉浸式的星空背景效果。

### 视差滚动
多层次的内容滚动速度差异，增强页面的视觉深度和动态感。

### 渐变色彩
精心挑选的渐变配色方案，从紫色到粉红再到青色，营造科技感。

## 📝 个人技能展示

### 后端开发
- 精通 Java 和 Spring Boot
- 熟练使用 MyBatis/MyBatis-Plus
- MySQL 索引优化与事务处理
- Redis 缓存设计与数据结构

### 前端与移动端
- 熟悉 Android 原生开发
- 熟悉微信小程序开发
- 掌握 Vue.js 及响应式页面开发
- HTML5 / CSS3 / ES6+ 基础扎实

### 测试与质量
- 掌握 Python 与 Pytest 自动化测试
- 熟悉 Allure 测试报告生成
- 编写高质量测试用例
- 全流程功能测试能力

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📮 联系方式

如果您对本项目感兴趣或有任何问题，欢迎通过以下方式联系：

- GitHub Issues: [提交问题](https://github.com/Ez1o-i/portfolio-website/issues)
- Email: [通过网站联系表单](https://github.com/Ez1o-i/portfolio-website)

---

**Built with ❤️ using React, Vite & Tailwind CSS**
