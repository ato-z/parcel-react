import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Parcel + React + React-Router
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          一个现代化的 React 应用启动模板，集成了最佳实践和优美的动画效果
        </p>
      </div>

      {/* 功能特性 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 功能特性</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <div className="text-2xl mb-3">✨</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              流畅的页面切换动画
            </h3>
            <p className="text-gray-600 text-sm">
              使用 Framer Motion 实现多种动画效果
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <div className="text-2xl mb-3">🎨</div>
            <h3 className="font-semibold text-gray-900 mb-2">现代化 UI 设计</h3>
            <p className="text-gray-600 text-sm">
              基于 Tailwind CSS 的响应式设计
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <div className="text-2xl mb-3">🔧</div>
            <h3 className="font-semibold text-gray-900 mb-2">
              TypeScript 支持
            </h3>
            <p className="text-gray-600 text-sm">完整的类型安全保障</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <div className="text-2xl mb-3">⚡</div>
            <h3 className="font-semibold text-gray-900 mb-2">高性能</h3>
            <p className="text-gray-600 text-sm">
              使用 React 19 和优化的构建工具
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <div className="text-2xl mb-3">📱</div>
            <h3 className="font-semibold text-gray-900 mb-2">响应式设计</h3>
            <p className="text-gray-600 text-sm">适配移动端和桌面端</p>
          </div>
        </div>
      </section>

      {/* 技术栈 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🛠️ 技术栈</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>
                <strong>React 19</strong> - 最新的 React 版本
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span>
                <strong>TypeScript</strong> - 类型安全的 JavaScript
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>
                <strong>React Router DOM</strong> - 客户端路由
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
              <span>
                <strong>Framer Motion</strong> - 页面切换动画
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              <span>
                <strong>Tailwind CSS</strong> - 实用优先的 CSS 框架
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>
                <strong>Parcel</strong> - 快速的零配置构建工具
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 动画效果 */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">🎬 动画效果</h2>
        <p className="text-gray-600 mb-4">项目包含多种页面切换动画效果：</p>
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>
              <strong>滑动动画</strong> - 页面从左侧滑入，向右侧滑出
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>
              <strong>淡入淡出</strong> - 简单的透明度切换
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>
              <strong>缩放动画</strong> - 页面缩放进入和退出
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
            <span>
              <strong>旋转动画</strong> - 带旋转效果的页面切换
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            <span>
              <strong>垂直滑动</strong> - 页面垂直滑动切换
            </span>
          </div>
        </div>
      </section>

      {/* 快速开始 */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📦 快速开始</h2>
        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <div className="space-y-4">
            <div>
              <p className="text-gray-300 mb-2"># 安装依赖</p>
              <code className="text-green-400">pnpm install</code>
            </div>
            <div>
              <p className="text-gray-300 mb-2"># 启动开发服务器</p>
              <code className="text-green-400">pnpm dev</code>
            </div>
            <div>
              <p className="text-gray-300 mb-2"># 构建生产版本</p>
              <code className="text-green-400">pnpm build</code>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
