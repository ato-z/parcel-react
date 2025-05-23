import Home from '@/pages/Home'
import About from '@/pages/About'
import { RouteConfig } from './types'

export const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    title: '首页',
    exact: true,
  },
  {
    path: '/about',
    component: About,
    title: '关于我们',
  },
]

// 导出路由映射，方便后续扩展
export const routeMap = routes.reduce(
  (map, route) => {
    map[route.path] = route
    return map
  },
  {} as Record<string, RouteConfig>
)
