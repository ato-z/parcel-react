# Parcel + React + React-Router

一个现代化的 React 应用启动模板，集成了最佳实践和优美的动画效果

## 🚀 功能特性

- ✨ **流畅的页面切换动画** - 使用 Framer Motion 实现多种动画效果
- 🎨 **现代化 UI 设计** - 基于 Tailwind CSS 的响应式设计
- 🔧 **TypeScript 支持** - 完整的类型安全
- ⚡ **高性能** - 使用 React 19 和优化的构建工具
- 📱 **响应式设计** - 适配移动端和桌面端

## 🛠️ 技术栈

- **React 19** - 最新的 React 版本
- **TypeScript** - 类型安全的 JavaScript
- **React Router DOM** - 客户端路由
- **Framer Motion** - 页面切换动画
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Parcel** - 快速的零配置构建工具
- **pnpm** - 高效的包管理器

## 📦 安装和运行

### 环境要求

- Node.js 18+
- pnpm 8+

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

访问 [http://localhost:1234](http://localhost:1234) 查看应用

### 构建生产版本

```bash
pnpm build
```

## 🎬 动画效果

项目包含多种页面切换动画效果：

1. **滑动动画** (slideVariants) - 页面从左侧滑入，向右侧滑出
2. **淡入淡出** (fadeVariants) - 简单的透明度切换
3. **缩放动画** (scaleVariants) - 页面缩放进入和退出
4. **旋转动画** (rotateVariants) - 带旋转效果的页面切换
5. **垂直滑动** (verticalSlideVariants) - 页面垂直滑动切换

## 📁 项目结构

```
src/
├── components/ # 可复用组件
│ ├── AnimatedRoutes.tsx # 路由动画容器
│ └── Navigation.tsx # 导航组件
├── pages/ # 页面组件
│ ├── Home/ # 首页
│ └── About/ # 关于页面
├── utils/ # 工具函数
│ └── animations.ts # 动画配置
├── App.tsx # 主应用组件
├── main.tsx # 应用入口
└── global.css # 全局样式
├── router/
│ ├── index.ts # 统一导出文件
│ ├── types.ts # TypeScript类型定义
│ ├── routes.ts # 路由配置文件
│ ├── AppRouter.tsx # 主路由组件
│ ├── utils.ts # 路由工具函数
│ └── README.md # 说明文档
└── global.css # 全局样式
```

## 🎨 自定义路由

你可以在 \`src/router/routes.ts\` 文件中自定义路由配置：

```typescript
{
path: '/contact',
component: Contact,
title: '联系我们',
}
```

### 如何添加新路由

1. 在 `src/pages/` 目录下创建新的页面组件
2. 在 `src/router/routes.ts` 中添加路由配置：

```typescript
{
  path: '/new-page',
  component: NewPageComponent,
  title: '新页面', // 可选，用于导航菜单
}
```

### 路由配置选项

- `path`: 路由路径
- `component`: 页面组件
- `title`: 页面标题（可选，有标题的路由会显示在导航菜单中）
- `exact`: 是否精确匹配（可选）

### 工具函数

- `getRouteByPath(path)` - 根据路径获取路由配置
- `getRouteTitle(path)` - 获取路由标题
- `getAllPaths()` - 获取所有路由路径
- `isValidPath(path)` - 检查路径是否有效
- `getNavigationRoutes()` - 获取导航菜单项
