import { toastController } from '@ionic/vue'

export namespace ToastService {
  export async function success(msg: string) {
    const toast = await toastController.create({
      message: msg,
      position: 'bottom',
      color: 'primary',
      duration: 3000
    })
    await toast.present()
  }

  export async function warning(msg: string) {
    const toast = await toastController.create({
      message: msg,
      position: 'bottom',
      color: 'warning',
      duration: 3000
    })
    await toast.present()
  }

  export async function error(msg: string) {
    const toast = await toastController.create({
      message: msg,
      position: 'bottom',
      color: 'danger',
      duration: 3000
    })
    await toast.present()
  }
}
