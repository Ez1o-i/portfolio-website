# 项目开发指南

本文档提供了本项目的开发规范和最佳实践，帮助 AI 助手和开发者保持代码一致性和高质量。

---

## 通用开发规范

### 代码风格
- **保持代码简洁**：避免过度复杂的嵌套和冗长的函数
- **组件化思维**：将可复用的逻辑和 UI 提取为独立组件
- **TypeScript 优先**：充分利用 TypeScript 的类型系统，避免使用 `any`
- **函数式组件**：优先使用函数式组件和 Hooks，避免类组件

### 文件组织
- **按功能分组**：相关组件放在同一目录下
- **组件文件命名**：使用 PascalCase（如 `Hero.tsx`、`Skills.tsx`）
- **工具函数分离**：通用工具函数放在 `src/lib/utils.ts`
- **样式文件分离**：全局样式放在 `src/styles/` 目录

### 性能优化
- **避免不必要的重渲染**：合理使用 `React.memo`、`useMemo` 和 `useCallback`
- **懒加载**：大型组件或图片使用懒加载
- **代码分割**：使用动态导入进行路由级别的代码分割

---

## 设计系统指南

### 色彩系统

#### 主色调
- **背景色**：`#020203`（深黑色背景）
- **文字色**：`white`（主要文字）、`zinc-400`（次要文字）
- **强调色**：
  - 紫色系：`purple-400`、`purple-500`
  - 粉色系：`pink-400`
  - 青色系：`cyan-400`
  - 蓝色系：`blue-500`、`indigo-600`

#### 渐变使用
- 主要渐变：`from-purple-400 via-pink-400 to-cyan-400`
- 次要渐变：`from-blue-500 to-indigo-600`、`from-emerald-500 to-teal-600`
- 用途：标题、按钮背景、卡片装饰

### 排版系统

#### 字体大小
- **主标题**：`text-5xl md:text-7xl`（首页标题）
- **章节标题**：`text-4xl md:text-5xl`（各部分标题）
- **副标题**：`text-2xl`（卡片标题）
- **正文**：`text-lg`（主要描述文字）
- **小字**：`text-sm`（标签、辅助信息）

#### 字重
- **标题**：`font-bold`
- **强调文字**：`font-medium`
- **正文**：`font-light`

### 间距系统

#### 章节间距
- **章节垂直间距**：`py-32`（128px）
- **内容块间距**：`space-y-8`（32px）
- **卡片内边距**：`p-8`（32px）

#### 元素间距
- **按钮间距**：`gap-4`（16px）
- **列表项间距**：`space-y-4`（16px）
- **表单字段间距**：`space-y-6`（24px）

---

## 组件使用规范

### GlassCard（玻璃态卡片）

**用途**：用于内容容器、信息展示、表单等

**使用规则**：
- 默认启用 `spotlight` 效果（鼠标悬停光效）
- 内容卡片使用 `p-8` 内边距
- 小型信息卡片使用 `p-4` 内边距
- 装饰性卡片可设置 `spotlight={false}`

**示例**：
```tsx
<GlassCard className="p-8">
  <h3>标题</h3>
  <p>内容</p>
</GlassCard>
```

### ParallaxSection（视差滚动区域）

**用途**：创建视差滚动效果的区域

**使用规则**：
- 每个 `ParallaxSection` 应设置唯一的 `id`（用于导航）
- `speed` 参数范围：0.25 - 0.4
- 必须包含 `ScrollGlow` 组件以增强视觉效果

**示例**：
```tsx
<ParallaxSection id="home" speed={0.3}>
  <ScrollGlow className="top-0 left-1/4 w-[600px] h-[600px]" color="rgba(100, 100, 255, 0.2)" />
  <Hero />
</ParallaxSection>
```

### Motion 动画

**用途**：添加流畅的动画效果

**使用规则**：
- **进入动画**：使用 `initial` 和 `animate` 属性
- **滚动触发**：使用 `whileInView` 和 `viewport={{ once: true }}`
- **悬停效果**：使用 `whileHover` 属性
- **动画时长**：保持在 0.5s - 1.2s 之间
- **延迟**：使用 `staggerChildren` 实现交错动画

**示例**：
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  内容
</motion.div>
```

---

## 布局规范

### 响应式设计
- **移动优先**：先设计移动端布局，再适配桌面端
- **断点使用**：
  - `md:`：平板设备（768px+）
  - `lg:`：桌面设备（1024px+）
  - `xl:`：大屏幕（1280px+）

### 网格系统
- **双列布局**：`grid-cols-1 lg:grid-cols-2`
- **三列布局**：`grid-cols-1 lg:grid-cols-3`
- **最大宽度**：`max-w-7xl mx-auto`（主要内容区域）

### Flexbox 使用
- **水平居中**：`flex justify-center items-center`
- **垂直分布**：`flex flex-col justify-between`
- **间距控制**：`gap-4`、`gap-8`

---

## 动画规范

### 动画类型

#### 淡入动画
```tsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
```

#### 上滑淡入
```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
```

#### 缩放淡入
```tsx
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
```

### 动画参数
- **duration**：0.5 - 1.2s（根据复杂度调整）
- **delay**：0 - 0.8s（用于交错效果）
- **ease**：`easeOut`（推荐）、`easeInOut`

---

## 可访问性规范

### 语义化 HTML
- 使用正确的语义标签（`section`、`nav`、`main`、`footer`）
- 为图片添加 `alt` 属性
- 为表单元素添加 `label`

### 键盘导航
- 所有交互元素应可通过键盘访问
- 使用 `tabindex` 控制焦点顺序
- 提供清晰的焦点样式

### 颜色对比度
- 确保文字与背景有足够的对比度
- 避免仅使用颜色传达信息

---

## 性能优化指南

### 图片优化
- 使用 WebP 格式
- 实现懒加载
- 提供多种尺寸的响应式图片

### 代码优化
- 避免在渲染函数中创建新对象/函数
- 使用 `useMemo` 缓存计算结果
- 使用 `useCallback` 缓存事件处理函数

### 构建优化
- 使用 Vite 的代码分割功能
- 启用 Tree Shaking
- 压缩和混淆生产代码

---

## Git 提交规范

### 提交信息格式
```
<type>: <subject>

<body>
```

### 类型（type）
- `feat`：新功能
- `fix`：修复 bug
- `docs`：文档更新
- `style`：代码格式调整
- `refactor`：重构
- `test`：测试相关
- `chore`：构建/工具相关

### 示例
```
feat: add contact form component

Implement contact form with validation and submission handling
```

---

## 注意事项

### 禁止事项
- ❌ 不要使用 `any` 类型
- ❌ 不要在组件中直接修改 props
- ❌ 不要在渲染函数中执行副作用
- ❌ 不要使用内联样式（除非必要）
- ❌ 不要硬编码颜色值（使用 Tailwind 类）

### 推荐做法
- ✅ 使用 TypeScript 类型定义
- ✅ 提取可复用的组件
- ✅ 使用语义化 HTML
- ✅ 保持组件单一职责
- ✅ 编写清晰的注释

---

**最后更新：** 2026年2月
