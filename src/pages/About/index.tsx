import React from 'react'
import { Link } from 'react-router'

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">关于项目</h1>
        <p className="text-xl text-gray-600 mb-8">
          深入了解项目架构、设计理念和开发指南
        </p>
      </div>

      {/* 项目架构 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📁 项目架构</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <pre className="text-sm text-gray-700 overflow-x-auto">
            {`src/
├── components/           # 可复用组件
│   ├── AnimatedRoutes.tsx  # 路由动画容器
│   └── Navigation.tsx      # 导航组件
├── pages/               # 页面组件
│   ├── Home/              # 首页
│   │   └── index.tsx
│   └── About/             # 关于页面
│       └── index.tsx
├── router/              # 路由配置
│   ├── index.ts           # 统一导出文件
│   ├── types.ts           # TypeScript类型定义
│   ├── routes.ts          # 路由配置文件
│   ├── AppRouter.tsx      # 主路由组件
│   └── utils.ts           # 路由工具函数
├── utils/               # 工具函数
│   └── animations.ts      # 动画配置
├── App.tsx              # 主应用组件
├── main.tsx             # 应用入口
└── global.css           # 全局样式`}
          </pre>
        </div>
      </section>

      {/* 路由系统 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🛣️ 路由系统</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="font-semibold text-gray-900 mb-3">路由配置</h3>
            <p className="text-gray-600 text-sm mb-3">
              在{' '}
              <code className="bg-gray-100 px-2 py-1 rounded">
                router/routes.ts
              </code>{' '}
              中定义所有路由
            </p>
            <div className="bg-gray-900 text-white p-3 rounded text-xs">
              <code>
                {`{
  path: '/about',
  component: About,
  title: '关于',
}`}
              </code>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="font-semibold text-gray-900 mb-3">动画切换</h3>
            <p className="text-gray-600 text-sm mb-3">
              使用 Framer Motion 实现页面间的流畅切换
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>滑动进入/退出</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>淡入淡出效果</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>缩放动画</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 开发指南 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">👨‍💻 开发指南</h2>

        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="font-semibold text-blue-900 mb-2">添加新页面</h3>
            <ol className="text-blue-800 text-sm space-y-1 list-decimal list-inside">
              <li>
                在 <code>src/pages/</code> 目录下创建新组件
              </li>
              <li>
                在 <code>router/routes.ts</code> 中添加路由配置
              </li>
              <li>可选：在导航组件中添加链接</li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h3 className="font-semibold text-green-900 mb-2">自定义动画</h3>
            <p className="text-green-800 text-sm">
              在 <code>utils/animations.ts</code> 中定义新的动画变体，然后在{' '}
              <code>AnimatedRoutes.tsx</code> 中应用
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
            <h3 className="font-semibold text-purple-900 mb-2">样式系统</h3>
            <p className="text-purple-800 text-sm">
              使用 Tailwind CSS 的实用类进行样式设计，支持响应式设计和暗色模式
            </p>
          </div>
        </div>
      </section>

      {/* 性能优化 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ 性能优化</h2>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">构建优化</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Parcel 自动代码分割</li>
                <li>• Tree-shaking 消除死代码</li>
                <li>• 自动资源优化</li>
                <li>• 缓存策略优化</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">运行时优化</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• React 19 并发特性</li>
                <li>• 组件懒加载</li>
                <li>• 动画性能优化</li>
                <li>• 内存使用优化</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 导航测试 */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🔗 路由测试</h2>
        <p className="text-gray-600 mb-4">
          点击下面的按钮测试页面切换动画效果：
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            🏠 返回首页
          </Link>

          <Link
            to="/about"
            className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            🔄 刷新关于页
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            ← 后退
          </button>

          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
          >
            🔄 重新加载
          </button>
        </div>
      </section>
    </div>
  )
}

export default About
