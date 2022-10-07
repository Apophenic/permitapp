import { alertController } from '@ionic/vue'

export namespace AlertService {
  export async function confirm(msg: string, confirmFn: () => Promise<void>, cancelFn = () => {}) {
    const alert = await alertController.create({
      header: 'Confirm',
      message: msg,
      buttons: [
        { text: 'Cancel', handler: () => cancelFn() },
        { text: 'Confirm', handler: () => confirmFn() }
      ]
    })
    await alert.present()
  }
}
