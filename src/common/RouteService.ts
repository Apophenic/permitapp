import router from '@/router'

export enum Route {
  Permit = 'permit', Review = 'review'
}
export const Routes = Object.values(Route)

export namespace RouteService {
  export function getCurrentRoute(): Route | null {
    const path = router.currentRoute.value.path
    for (const r of Routes) {
      if (path.includes(r)) return r
    }
    return null
  }

  export function getCurrentRouteParam(param: string) {
    return router.currentRoute.value?.params[param]
  }

  export function onRoute(r: Route) {
    return router.currentRoute.value.path.includes('/'+r)
  }

  export async function goTo(r: Route, id: number | string | null = null) {
    const path = !!id ? `/${r}/${id}` : '/'+r
    await router.push(path)
  }
}
