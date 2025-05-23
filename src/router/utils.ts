import { routes, routeMap } from './routes'
import { RouteConfig } from './types'

/**
 * 根据路径获取路由配置
 */
export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routeMap[path]
}

/**
 * 获取路由标题
 */
export const getRouteTitle = (path: string): string => {
  const route = getRouteByPath(path)
  return route?.title || 'Page'
}

/**
 * 获取所有路由路径
 */
export const getAllPaths = (): string[] => {
  return routes.map((route) => route.path)
}

/**
 * 检查路径是否存在
 */
export const isValidPath = (path: string): boolean => {
  return path in routeMap
}

/**
 * 获取导航菜单项（排除不需要显示在导航中的路由）
 */
export const getNavigationRoutes = (): RouteConfig[] => {
  return routes.filter((route) => route.title) // 只返回有标题的路由
}
