import { Response } from './Response'
import { ToastService } from '@/common/ToastService'

export namespace HttpService {
  const BasePath = `http://${process.env.VUE_APP_HOST}/media`

  export async function post<T>(path: string, body: {}): Promise<T> {
    const res = await fetch(BasePath + path, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(body)
    })
    return handle(await res.json())
  }

  export async function put<T>(path: string, body: {}): Promise<T> {
    const res = await fetch(BasePath + path, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify(body)
    })
    return handle(await res.json())
  }

  export async function get<T>(path: string): Promise<T> {
    const res = await fetch(BasePath + path, { method: 'GET' })
    return handle(await res.json())
  }

  export async function del(path: string): Promise<null> {
    const res = await fetch(BasePath + path, { method: 'DELETE' })
    return handle(await res.json())
  }

  async function handle<T>(res: Response<T>): Promise<T> {
    if (res.status !== 200) {
      await ToastService.error(res?.msg ?? 'unknown error')
      throw new Error('an error occured')
    }
    return res.data as T
  }
}
