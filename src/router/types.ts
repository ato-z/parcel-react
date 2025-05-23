import { ComponentType } from 'react'

export interface RouteConfig {
  path: string
  component: ComponentType
  title?: string
  exact?: boolean
}

export interface RouteGroup {
  name: string
  routes: RouteConfig[]
}
